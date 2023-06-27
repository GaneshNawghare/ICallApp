import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import LoginArrow from '../../assests/svg/LoginArrow';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {getContentInnerData} from '../../../axios';

const ContentInner = ({navigation, route}: any) => {
  const parentId = route.params.id;
  const [content, setContent] = useState([]);
  let cnt = 0;
  // const DATA = [
  //   {
  //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  //     title: 'Anxiety',
  //     order:1,
  //   },
  //   {
  //     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
  //     title: 'Depression',
  //     order:2,
  //   },
  //   {
  //     id: '58694a0f-3da1-471f-bd96-145571e29d72',
  //     title: 'Disorder',
  //     order:3,
  //   },
  //   {
  //     id: '58694a0f-3da1-471f-bd96-145571e29d712',
  //     title: 'Suicide',
  //     order:4,

  //   },
  //   {
  //     id: '58694a0f-3da1-471f-bd96-145571e29d777',
  //     title: 'fifth Item',
  //     order:5,
  //   },
  //   {
  //     id: '58694a0f-3da1-471f-bd96-145571e29d78',
  //     title: 'six Item',
  //     order:6,
  //   },
  //   {
  //     id: '58694a0f-3da1-471f-bd96-145571e29d799',
  //     title: 'seven Item',
  //     order:7,
  //   },
  //   {
  //     id: '58694a0f-3da1-471f-bd96-145571e29d74',
  //     title: 'Eight Item',
  //     order:8,
  //   },
  //   {
  //     id: '58694a0f-3da1-471f-bd96-145571e29d788',
  //     title: 'Nine Item',
  //     order:9,
  //   },
  //   {
  //     id: '58694a0f-3da1-471f-bd96-145571e29d7853',
  //     title: 'Tenth Item',
  //     order:10,
  //   },
  // ];

  async function getData(id) {
    try {
      const data = await getContentInnerData({id});
      const arr = data.data;
      setContent(arr);
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
      <View style={{marginTop: hp(4), marginBottom: hp(24)}}>
        <FlatList
          data={content}
          renderItem={({item}) => {
            cnt=item.order;
            console.log("cnt",cnt);
            const name = item.topic;
            const id = item._id;
            const stringHtml = item.textArea;
            console.log('content', stringHtml);
            if (parentId === item.parentId) {
              return (
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('InnerPageC', {name, id, stringHtml});
                    }}>
                    <View style={[styles.item, {flexDirection: 'row'}]}>
                      <Text style={styles.title}>
                        {item.order}. {name}
                      </Text>
                      <Image
                        source={require('./jpg/arrow_back_ios_new_(1).png')}
                        style={[styles.arrow]}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }
          }}
          keyExtractor={(item: any) => item._id}
        />
        <View
          style={{
            justifyContent: 'center',
            position: 'absolute',
            marginTop: hp(80),
            marginLeft: wp(35),
            alignItems: 'center',
          }}>
          {cnt >= 8 ? (
            <TouchableOpacity>
              <View style={[styles.viewMore]}>
                <Text style={[styles.viewMoreText]}>View more</Text>
                <Image
                  source={require('./jpg/arrow_back_ios_new.png')}
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
    backgroundColor: '#6AB58E',
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
});
export default ContentInner;
