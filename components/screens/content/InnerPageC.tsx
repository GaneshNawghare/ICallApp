import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import LoginArrow from '../../assests/svg/LoginArrow';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {WebView} from 'react-native-webview';

const InnerPageC = ({navigation, route}: any) => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

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
      {loading ? (
        <View style={[styles.container]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <>
          <View
            style={{
              marginTop: hp(2),
              marginLeft: wp(5),
              width: wp(90),
              height: hp(100),
            }}>
            <WebView
              originWhitelist={['*']}
              style={styles.webView}
              source={{
                html: `<font style="font-size: 40px;">${route.params.stringHtml}</font>`,
              }}
            />
          </View>
        </>
      )}
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
    fontWeight: '700',
    backgroundColor: `#f5f5f5`,
  },
  container: {
    flex: 1,
    marginTop: hp(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default InnerPageC;
