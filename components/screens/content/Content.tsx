import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
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
  const Array = ['#E6672D', '#F9CF7D', '#6AB58E', '#8E97FE'];
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);
  let Index = 0;

  async function getData() {
    try {
      setLoading(true);
      const data = await getContentData();
      const arr = data.data.resp;
      setContent(arr);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
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
        <Text style={[styles.sosText]}>Content</Text>
      </View>
      <View style={{marginTop: hp(4), marginBottom: hp(16)}}>
      {loading ? 
          <View style={[styles.container]}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
          :
        <FlatList
          data={content}
          numColumns={2}
          renderItem={({item}: any) => {
            const name = item.topic;
            const id = item._id;
            if (Index == Array.length) {
              Index = 0;
            }
            var imageURI = item.uploadImage;
            return (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('ContentInner', {name, id});
                  }}>
                  <View
                    style={[styles.item, {backgroundColor: item.backgroundColor}]}>
                    <Text style={styles.title}>{item.topic}</Text>
                    <Image
                      style={{
                        position: 'absolute',
                        width: 71,
                        height: 71,
                        bottom: 2,
                        right: 2,
                      }}
                      source={{uri: imageURI}}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
          keyExtractor={(item: any) => item.id}
        />}
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
    marginTop:hp(30),
    alignItems:'center',
    justifyContent: 'center',
  },
});
export default Content;
