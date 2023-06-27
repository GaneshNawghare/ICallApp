import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity,SafeAreaView} from 'react-native';
import Arrow from '../assests/svg/Arrow';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ProfileLogo from '../assests/svg/ProfileLogo';
import Sos from '../assests/svg/Sos';
import Content from '../assests/svg/Content';
import SelfAssessment from '../assests/svg/SelfAssessment';
import ChatLogo from '../assests/svg/ChatLogo';
import CallLogo from '../assests/svg/CallLogo';
import MessageLogo from '../assests/svg/MessageLogo';
import {useSelector} from 'react-redux';
import * as _ from 'lodash';

const LandingScreen = ({navigation}: any) => {
  const store: any = useSelector((store: any) => store);
  const LoginOrProfile = () => {
    //Add if else
    if (_.isEmpty(store.userData)) {
      navigation.navigate('Login');
    } else {
      navigation.navigate('ProfileScreen');
    }
  };
  return (
    <SafeAreaView>
    <View style={{backgroundColor: '#F5F5F5', width: wp(100), height: hp(100)}}>
      <View style={{flex: 1, flexDirection: 'row', marginLeft: wp(6.5)}}>
        <View style={{flex: 2, marginTop: hp(1.2)}}>
          <Text style={[styles.textCon]}>Choose which content</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.textCon]}>you want to see</Text>
            <Arrow
              style={{
                marginTop: hp(1.2),
                marginLeft: wp(5.5),
                color: '#292933',
                fontFamily: 'Lato',
              }}
            />
          </View>
        </View>
        <View style={{flex: 1, marginTop: hp(3)}}>
          <TouchableOpacity
            onPress={() => {
              LoginOrProfile();
            }}>
            <ProfileLogo style={{marginLeft: wp(15)}} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          position:'absolute',
          marginTop: hp(10),
          marginLeft:wp(8),
          // marginBottom: hp(2),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Sos');
          }}>
          <Sos />
        </TouchableOpacity>
        <Text style={[styles.imageBottomText]}>
          Established for maritime use in formal notation SOS is {'\n'}
          with an overscore line,to indicate that the Morse code.{' '}
        </Text>
        <View style={[styles.horinzontalLine]}></View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Content');
          }}>
          <Content />
        </TouchableOpacity>
        <Text style={[styles.imageBottomText]}>
          Established for maritime use in formal notation SOS is {'\n'}
          with an overscore line,to indicate that the Morse code.{' '}
        </Text>
        <View style={[styles.horinzontalLine]}></View>
        <TouchableOpacity>
          <SelfAssessment />
        </TouchableOpacity>
        <Text style={[styles.imageBottomText]}>
          Established for maritime use in formal notation SOS is {'\n'}
          with an overscore line,to indicate that the Morse code.{' '}
        </Text>
      </View>
      <View
        style={{position:'absolute',marginTop: hp(90),flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity>
          <ChatLogo style={{marginLeft: wp(18)}} />
          <Text style={[{marginLeft: wp(20)}, styles.bottomText]}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <CallLogo style={{marginLeft: wp(13)}} />
          <Text style={[{marginLeft: wp(16)}, styles.bottomText]}>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <MessageLogo style={{marginLeft: wp(13)}} />
          <Text style={[{marginLeft: wp(15)}, styles.bottomText]}>Email</Text>
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textCon: {
    marginLeft: wp(1.3),
    fontSize: wp(5.3),
    fontWeight: '600',
    color: '#292933',
    fontStyle: 'normal',
    fontFamily: 'Lato',
  },
  horinzontalLine: {
    marginTop: hp(2),
    marginBottom: hp(2),
    width: wp(78),
    height: wp(0.3),
    backgroundColor: '#DFE0EB',
    marginLeft: wp(2),
  },
  imageBottomText: {
    marginTop: hp(0.4),
    color: '#36364D',
    fontFamily: 'Lato',
  },
  textImages: {
    color: '#36364D',
    fontFamily: 'Lato',
  },
  bottomText: {
    fontFamily: 'Lato',
    color: '#353D6C',
    fontStyle: 'normal',
  },
});
export default LandingScreen;
