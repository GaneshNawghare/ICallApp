import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import LoginImage from '../assests/svg/LoginImage';
import LoginArrow from '../assests/svg/LoginArrow';
import {SafeAreaView} from 'react-native-safe-area-context';

const Login = ({navigation}: any) => {
  const [number, onChangeNumber] = React.useState('');
  const loginVerified = () => {
    navigation.navigate('LoginVerified', {number});
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <LoginArrow style={styles.loginArrow} />
        </TouchableOpacity>
        <Text style={styles.loginText}>Login</Text>
      </View>
      <View style={styles.loginImg}>
        <LoginImage />
      </View>
      <View>
        <Text style={styles.phoneNumber}>Phone Number</Text>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="  Enter your phone number"
            keyboardType="numeric"
          />
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              loginVerified();
            }}
            style={styles.senOtpBox}>
            <Text style={styles.sendOtpText}>
              Send OTP
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: hp(6),
    width: wp(90),
    marginTop: hp(1.5),
    borderWidth: wp(0.3),
    borderRadius: wp(0.4),
    fontFamily: 'Lato',
    fontWeight: '400',
    fontStyle: 'normal',
    color: '#999999',
    fontSize: wp(3.5),
  },
  safeArea: {
    width: wp(100),
    height: wp(1000),
    backgroundColor: '#FFFFFF',
  },
  loginArrow: {
    marginLeft: wp(4),
    marginTop: hp(5),
    fontSize: wp(10),
    color: '#212126',
  },
  loginText: {
    marginLeft: wp(6),
    marginTop: wp(6),
    color: '#212126',
    fontSize: wp(8),
    fontWeight: '600',
    fontStyle: 'normal',
    fontFamily: 'Lato',
  },
  loginImg: {
    marginTop: hp(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneNumber: {
    marginTop: hp(3),
    marginLeft: wp(4.6),
    fontFamily: 'Lato',
    fontWeight: '500',
    fontSize: wp(4),
    color: '#212126',
    fontStyle: 'normal',
  },
  senOtpBox: {
    width: wp(90),
    height: hp(6),
    backgroundColor: '#8E97FE',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(1),
    marginTop: hp(3),
  },
  sendOtpText: {
    color: '#FCFDFF',
    fontFamily: 'Lato',
    fontWeight: '900',
    fontStyle: 'normal',
    fontSize: wp(4),
  },
});

export default Login;
