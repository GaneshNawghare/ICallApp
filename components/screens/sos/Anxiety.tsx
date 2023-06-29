import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
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
  let cnt = 0;

  async function getData(id) {
    try {
      setLoading(true);
      const data = await getSosInData({id});
      const arr = data.data;
      setContent(arr);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData(parentId);
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
        <Text style={[styles.sosText]}>{route.params.name}</Text>
      </View>
      <View style={{marginTop: hp(4), marginBottom: hp(28)}}>
      {loading ? 
          <View style={[styles.container]}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
          :
        <FlatList
          data={content}
          renderItem={({item}: any) => {
            cnt++;
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
                      <Text style={styles.title}>
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
        />}
        <View
          style={{
            justifyContent: 'center',
            position: 'absolute',
            marginTop: hp(80),
            marginLeft: wp(35),
            alignItems: 'center',
          }}>
          {cnt > 9 ? (
            <TouchableOpacity
              style={{justifyContent: 'center', alignItems: 'center'}}>
              <View style={[styles.viewMore]}>
                <Text style={[styles.viewMoreText]}>View more</Text>
                <Image
                  source={require('../sos/jpg/arrow_back_ios_new.png')}
                  style={{marginLeft: wp(2)}}
                />
              </View>
            </TouchableOpacity>
          ) : null}
        </View>
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
export default Anxiety;
