import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
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
import changeNavigationBarColor from 'react-native-navigation-bar-color';

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

  {
    changeNavigationBarColor('#F5F5F5');
  }
  return (
    <SafeAreaView style={styles.SafeArea}>
      <StatusBar
        animated={true}
        backgroundColor="#F5F5F5"
        barStyle="dark-content"
      />
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
            <ProfileLogo style={{marginLeft: wp(16.5)}} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.mainPart}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Sos');
          }}>
        <Image
        style={{width:wp(90),height:hp(20),borderRadius:wp(3)}}
        source={require('./sos/jpg/Frame_1145_(1).png')}
      />
          {/* <Sos /> */}
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
            <Image
        style={{width:wp(90),height:hp(20),borderRadius:wp(3)}}
        source={require('./content/jpg/Frame_1146.png')}
      />
          {/* <Content /> */}
        </TouchableOpacity>
        <Text style={[styles.imageBottomText]}>
          Established for maritime use in formal notation SOS is {'\n'}
          with an overscore line,to indicate that the Morse code.{' '}
        </Text>
        <View style={[styles.horinzontalLine]}></View>
        {/* <TouchableOpacity>
          <SelfAssessment />
        </TouchableOpacity>
        <Text style={[styles.imageBottomText]}>
          Established for maritime use in formal notation SOS is {'\n'}
          with an overscore line,to indicate that the Morse code.{' '}
        </Text> */}
      </View>
      <View style={styles.bottomLogo}>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textCon: {
    marginLeft: wp(1),
    fontSize: wp(5.3),
    fontWeight: '600',
    color: '#292933',
    fontStyle: 'normal',
    fontFamily: 'Lato',
  },
  horinzontalLine: {
    marginTop: hp(1),
    marginBottom: hp(1),
    width: wp(78),
    height: wp(0.3),
    backgroundColor: '#DFE0EB',
    marginLeft: wp(2),
  },
  imageBottomText: {
    fontSize: wp(3.6),
    marginTop: hp(0.3),
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
  SafeArea: {
    backgroundColor: '#F5F5F5',
    width: wp(100),
    height: hp(100),
  },
  bottomLogo: {
    position: 'absolute',
    marginTop: hp(90),
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainPart: {
    position: 'absolute',
    marginTop: hp(10.2),
    marginLeft: wp(5.3),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default LandingScreen;
