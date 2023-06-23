import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import LoginArrow from '../../assests/svg/LoginArrow';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {WebView} from 'react-native-webview';

const InnerPage = ({navigation, route}: any) => {
  return (
    <View style={{width:wp(100),height:hp(100)}}>
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
      <View style={{marginTop:hp(2),marginLeft:wp(5),width:wp(90),height:hp(100)}}>
        <WebView 
        originWhitelist={['*']}
        style={styles.webView}
        source={{html: `<body style={{fontSize:15}}>${route.params.stringHtml}</body>`}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sosText: {
    fontSize: wp(8),
    fontWeight: '600',
    fontFamily: 'Lato',
    color: '#212126',
    position: 'absolute',
    marginTop: hp(3),
    marginLeft: wp(15),
  },
  webView: {
    fontWeight:'700'
  },
});

export default InnerPage;
