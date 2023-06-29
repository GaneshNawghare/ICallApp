import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Image,
  ActivityIndicator,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import LoginArrow from '../../assests/svg/LoginArrow';
import ChatLogo from '../../assests/svg/ChatLogo';
import CallLogo from '../../assests/svg/CallLogo';
import MessageLogo from '../../assests/svg/MessageLogo';
import HelplineLogo from '../../assests/svg/HelplineLogo';
import {getSosData} from '../../../axios';

const Sos = ({navigation}: any) => {
  const Array = ['#E6672D', '#F9CF7D', '#6AB58E', '#8E97FE'];
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);
  let Index = 0;

  async function getData() {
    try {
      setLoading(true);
      const data = await getSosData();
      const arr = data.data.resp;
      setContent(arr);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  },[]);

  return (
    <SafeAreaView style={{width: wp(100), height: hp(100)}}>
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
          <Text style={[styles.sosText]}>SOS</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: hp(5)}}>
          <TouchableOpacity>
            <ChatLogo style={{marginLeft: wp(5), position: 'absolute'}} />
            <Text
              style={[
                styles.logotext,
                {marginTop: hp(5.5), marginLeft: wp(5)},
              ]}>
              Chatline
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <CallLogo style={{marginLeft: wp(30), position: 'absolute'}} />
            <Text
              style={[
                styles.logotext,
                {marginTop: hp(5.5), marginLeft: wp(26)},
              ]}>
              iCall helpline
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <MessageLogo style={{marginLeft: wp(55), position: 'absolute'}} />
            <Text
              style={[
                styles.logotext,
                {marginTop: hp(5.5), marginLeft: wp(56.2)},
              ]}>
              Email
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <HelplineLogo style={{marginLeft: wp(77), position: 'absolute'}} />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: hp(9), marginBottom: hp(26)}}>
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
              if (Index == Array.length) {
                Index = 0;
              }
              const id = item._id;
              var imageURI = item.uploadImage;
              return (
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Anxiety', {name, id});
                    }}>
                    <View
                      style={[styles.item, {backgroundColor: Array[Index++]}]}>
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
                        // style={{position:'absolute',bottom:0,right:0}}
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#E6672D',
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
  logotext: {
    fontFamily: 'Lato',
    fontSize: wp(3.5),
    fontWeight: '600',
    fontStyle: 'normal',
    color: '#353D6C',
    position: 'absolute',
  },
  container: {
    flex: 1,
    marginTop:hp(30),
    alignItems:'center',
    justifyContent: 'center',
  },
});
export default Sos;
