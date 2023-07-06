import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
  RefreshControl,
  SafeAreaView,
  Image,
  ActivityIndicator,
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
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [showNetworkError, setShowNetworkError] = useState(false);


  async function getData(id: any) {
    try {
      setLoading(true);
      const data = await getContentInnerData(id);
      const arr = data.data;
      setContent(arr);
      setLoading(false);
      setShowNetworkError(false)
    } catch (error) {
      setLoading(false);
      setShowNetworkError(true);
      console.log('Error in getData (ContentInner)',error);
    }
  }

  useEffect(() => {
    getData(parentId);
  }, [parentId]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getData(parentId);
    setRefreshing(false);
  }, []);

  return (
    <SafeAreaView>
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
      <View style={{marginBottom: hp(18)}}>
      <View style={{justifyContent:'center',alignItems:'center'}}>
          {loading && <Text style={{color:'green'}}>Loading...</Text>}
          {!loading && showNetworkError && <Text style={{color:'red'}}>Network Error</Text>}
      </View>
      {loading ? 
          <View style={[styles.container]}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
          : ( content.length>0 ?  
        <FlatList
          data={content}
          renderItem={({item}) => {
            const name = item.topic;
            const id = item._id;
            const stringHtml = item.textArea;
            if (parentId === item.parentId) {
              return (
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('InnerPageC', {name, id, stringHtml});
                    }}
                    style={[styles.item, {flexDirection: 'row'}]}
                    >
                      <Text style={styles.title} numberOfLines={1}>
                        {item.order}. {name}
                      </Text>
                      <Image
                        source={require('./jpg/arrow_back_ios_new_(1).png')}
                        style={[styles.arrow]}
                      />
                  </TouchableOpacity>
                </View>
              );
            }
          }}
          keyExtractor={(item: any) => item._id}
        />: <View style={{justifyContent:'center',alignItems:'center'}}><Text> No Data Available </Text></View> )}
        <View
          style={{
            justifyContent: 'center',
            position: 'absolute',
            marginTop: hp(80),
            marginLeft: wp(35),
            alignItems: 'center',
          }}>
            {/* <TouchableOpacity>
              <View style={[styles.viewMore]}>
                <Text style={[styles.viewMoreText]}>View more</Text>
                <Image
                  source={require('./jpg/arrow_back_ios_new.png')}
                  style={{marginLeft: wp(2)}}
                />
              </View>
            </TouchableOpacity> */}
        </View>
      </View>
    </SafeAreaView>
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
    marginTop: hp(3),
    marginLeft: wp(8),
  },
  container: {
    flex: 1,
    marginTop:hp(30),
    alignItems:'center',
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
    marginTop: hp(1),
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ContentInner;
