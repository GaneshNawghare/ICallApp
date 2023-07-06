import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import LoginArrow from '../../assests/svg/LoginArrow';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {getSosInData} from '../../../axios';

const Anxiety = ({navigation, route}: any) => {
  const parentId = route.params.id;
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [showNetworkError, setShowNetworkError] = useState(false);

  const getData = async (id: any) => {
    try {
      setLoading(true);
      const data = await getSosInData(id);
      const arr = data.data;
      setContent(arr);
      setLoading(false);
      setShowNetworkError(false)
    } catch (error) {
      setLoading(false);
      setShowNetworkError(true);
      console.log(error);
    }
  }

  useEffect(() => {
    getData(parentId);
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getData(parentId);
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
          style={{marginRight:wp(8)}}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
            <Text style={[styles.sosText]}>{route.params.name}</Text>
        </ScrollView>
      </View>
      <View style={{marginTop: hp(0.5), marginBottom: hp(18)}}>
      <View style={{justifyContent:'center',alignItems:'center'}}>
          {loading && <Text style={{color:'green'}}>Loading...</Text>}
          {!loading && showNetworkError && <Text style={{color:'red'}}>Network Error</Text>}
      </View>
      {loading ? 
          <View style={[styles.container]}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
          :( content.length > 0 ?
        <FlatList
          data={content}
          renderItem={({item}: any) => {
            const name = item.topic;
            const id = item._id;
            const stringHtml = item.textArea;
            if (parentId === item.parentId) {
              return (
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('InnerPage', {name, id, stringHtml});
                    }}>
                    <View style={[styles.item, {flexDirection: 'row'}]}>
                      <Text style={styles.title} numberOfLines={1}>
                        {item.order}. {item.topic}
                      </Text>
                      <Image
                        source={require('./jpg/arrow_back_ios_new_(1)_copy.png')}
                        style={[styles.arrow]}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }
          }}
          keyExtractor={(item: any) => item._id}
        /> : <View style={{justifyContent:'center',alignItems:'center'}}><Text> No Data Available </Text></View> )}
        {/* <View
          style={{
            justifyContent: 'center',
            position: 'absolute',
            marginTop: hp(80),
            marginLeft: wp(35),
            alignItems: 'center',
          }}> */}
          {/* <TouchableOpacity
              style={[styles.viewMore,{justifyContent: 'center', alignItems: 'center'}]}>
                <Text style={[styles.viewMoreText]}>View more</Text>
                <Image
                  source={require('../sos/jpg/arrow_back_ios_new.png')}
                  style={{marginLeft: wp(2)}}
                /> 
          </TouchableOpacity> */}
        {/* </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#E6672D',
    padding: wp(2.5),
    width: wp(90),
    height: hp(6),
    marginLeft: wp(5.5),
    marginVertical: wp(3),
  },
  arrow: {
    position: 'absolute',
    marginTop: hp(2),
    marginLeft: wp(85),
  },
  viewMore: {
    width: wp(30),
    height: hp(4.5),
    marginTop: wp(2),
    borderColor: '#6AB58E',
    borderWidth: wp(0.4),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: wp(1.5),
  },
  viewMoreText: {
    color: '#212126',
    fontFamily: 'Lato',
    fontSize: wp(4),
    fontStyle: 'normal',
    fontWeight: '500',
  },
  title: {
    fontSize: wp(5),
    width:wp(80),
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '600',
    color: '#FFFFFF',
  },
  sosText: {
    fontSize: wp(8),
    fontWeight: '600',
    fontFamily: 'Lato',
    color: '#212126',
    marginTop: hp(3),
    marginLeft: wp(8),
  },
  container: {
    flex: 1,
    marginTop:hp(30),
    alignItems:'center',
    justifyContent: 'center',
  },
});
export default Anxiety;
