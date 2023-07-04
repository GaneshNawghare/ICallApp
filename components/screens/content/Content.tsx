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
    } catch (error) {
      setLoading(false);
      setShowNetworkError(true);
      console.log('Error in getData', error);
    }
  }

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
          style={{marginRight:wp(9)}}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
        </ScrollView>
        <Text style={[styles.sosText]}>Content</Text>
      </View>
      <View style={{marginTop: hp(4), marginBottom: hp(16)}}>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          {loading && <Text>Loading...</Text>}
          {!loading && showNetworkError && <Text>Network Error</Text>}
        </View>
        {loading ? (
          <View style={[styles.container]}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
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
                    <Text style={styles.title}>{item.topic}</Text>
                    <Image
                      style={styles.imgStyle}
                      source={{uri: imageURI}}
                    />
                  </TouchableOpacity>
                </View>
              );
            }}
            keyExtractor={(item: any) => item.id}
          />
        )}
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
  title: {
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
