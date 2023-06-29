import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import SplashScreenImage from '../assests/svg/SplashScreenImage';

const SplashScreen = ({navigation}: any): JSX.Element => {

  return (
    <View
      style={{
        backgroundColor: '#8E97FE',
        flex:1,
        width: wp(100),
        height: hp(100),
      }}>
      {/* <SafeAreaView style={{backgroundColor: '#8E97FE'}}> */}
      <View
        style={{
          alignItems: 'center',
          marginTop: wp(30),
        }}>
        <Text style={[styles.textContainer]}>Hi, Welcome</Text>
        <Text style={[styles.textContainer1]}>to icall Helpline</Text>
        <SplashScreenImage style={{position: 'absolute', marginTop: wp(38)}} />
      </View>
      <TouchableOpacity onPress={()=>{navigation.navigate('LandingScreen');}}>
        <View style={[{position: 'absolute'}, styles.bottom]}>
          <Text
          onPress={() => {
            navigation.navigate('LandingScreen');
          }}
            style={{
              fontFamily: 'Lato',
              fontSize: wp(8),
              color: '#212126',
              fontWeight: '900',
            }}>
            Get Started
          </Text>
        </View>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    position: 'absolute',
    fontSize: wp(10),
    color: '#FFFFFF',
    fontStyle: 'normal',
    fontWeight: '900',
  },
  textContainer1: {
    position: 'absolute',
    marginTop: hp(6),
    fontSize: wp(10),
    color: '#FFFFFF',
    fontWeight: '400',
    fontStyle: 'normal',
  },
  bottom: {
    width: wp(90),
    height: hp(10),
    marginTop: wp(140),
    borderRadius: wp(10),
    alignItems: 'center',
    marginLeft: wp(5),
    justifyContent: 'center',
    backgroundColor: '#FCFDFF',
  },
});

export default SplashScreen;
