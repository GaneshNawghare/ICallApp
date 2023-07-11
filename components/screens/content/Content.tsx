import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  RefreshControl,
  Image,
  ActivityIndicator,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import LoginArrow from '../../assests/svg/LoginArrow';
import {getContentData} from '../../../axios';
import NetWorkError from '../../assests/svg/NetWorkError';
import NoDataAvailable from '../../assests/svg/NoDataAvailable'

const Content = ({navigation}: any) => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [showNetworkError, setShowNetworkError] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const data = await getContentData();
      const arr = data.data.resp;
      setContent(arr);
      setLoading(false);
      setShowNetworkError(false);
    } catch (error) {
      setLoading(false);
      setShowNetworkError(true);
      setContent([]);
      console.log('Error in getData', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getData();
    setRefreshing(false);
  }, []);

  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <LoginArrow
            style={{
              marginTop: hp(5),
              marginLeft: wp(5),
            }}
          />
        </TouchableOpacity>
        <ScrollView
          style={{marginRight: wp(9)}}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }></ScrollView>
        <Text style={[styles.sosText]}>Content</Text>
      </View>
      <View style={{marginTop: hp(4), marginBottom: hp(16)}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
        {!loading && showNetworkError && (
            <View style={{marginTop:hp(25),justifyContent:'center',alignItems:'center'}}>
            <NetWorkError/>
            <Text style={{color: 'red',fontWeight:'700',fontFamily:'Lato'}}>Lost Internet Connection</Text>
            </View>
          )}
        </View>
        {loading ? (
          <View style={[styles.container]}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : 
          ( content.length>0 ?  
          <FlatList
            data={content}
            numColumns={2}
            renderItem={({item}: any) => {
              const name = item.topic;
              const id = item._id;
              var imageURI = item.uploadImage;
              return (
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('ContentInner', {name, id});
                    }}
                    style={[
                      styles.item,
                      {backgroundColor: item.backgroundColor},
                    ]}>
                    <View
                      style={[
                        styles.square,
                        {
                          backgroundColor: item.backgroundColor,
                          shadowOpacity: wp(0.3),
                          shadowOffset: {
                            width: wp(5),
                            height: hp(-3),
                          },
                          shadowRadius: wp(0.3),
                        },
                      ]}
                    />
                    <Text style={styles.title}>{item.topic}</Text>
                    <Image style={styles.imgStyle} source={{uri: imageURI}} />
                  </TouchableOpacity>
                </View>
              );
            }}
            keyExtractor={(item: any) => item.id}
            />: showNetworkError?null:<View style={{marginTop:hp(25),justifyContent:'center',alignItems:'center'}}>
            <NoDataAvailable/>
            <View style={styles.noData}>
            <Text style={{color:'Black'}}> No Data Available </Text>
            </View>
          </View>)}
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: wp(2.5),
    width: wp(42),
    height: hp(20),
    marginLeft: wp(5.5),
    marginVertical: wp(3),
  },
  square: {
    opacity: wp(0.13),
    width: wp(42),
    height: hp(20),
  },
  noData:{
    marginLeft:wp(5),
    width:wp(50),
    height:hp(3),
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#8E97FE',
    borderRadius:wp(3)
  },
  title: {
    position: 'absolute',
    marginLeft: wp(3),
    marginTop: hp(1),
    fontSize: wp(6),
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '700',
    color: '#FFFFFF',
  },
  imgStyle: {
    position: 'absolute',
    width: 71,
    height: 71,
    bottom: 2,
    right: 2,
  },
  sosText: {
    fontSize: wp(8),
    fontWeight: '600',
    fontFamily: 'Lato',
    color: '#212126',
    position: 'absolute',
    marginTop: hp(3),
    marginLeft: wp(15),
  },
  container: {
    flex: 1,
    marginTop: hp(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Content;
