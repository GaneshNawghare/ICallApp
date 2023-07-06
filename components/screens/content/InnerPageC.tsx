import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  RefreshControl,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import LoginArrow from '../../assests/svg/LoginArrow';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {WebView} from 'react-native-webview';
import { getContentInOneData } from '../../../axios';

const InnerPageC = ({navigation, route}: any) => {
  const [loading, setLoading] = useState(true);
  const [htmlText, setHtmlText] = useState('');
  const [topicName, setTopicName] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [showNetworkError, setShowNetworkError] = useState(false);
  const id = route.params.id

  async function getData(id: any) {
    try {
      setLoading(true);
      const {data} = await getContentInOneData(id);
      setHtmlText(data.textArea)
      setTopicName(data.topic);
      setLoading(false);
      setShowNetworkError(false)
    } catch (error) {
      setLoading(false);
      setShowNetworkError(true);
      console.log('Error in getData (ContentInner)',error);
    }
  }

  useEffect(() => {
    getData(id);
  }, [id]);

  const htmlContent = `
    <html>
      <head>
        <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0">
      </head>
      <body>
        ${htmlText}
      </body>
    </html>
  `;

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getData(id);
    setRefreshing(false);
  }, []);

  return (
    <SafeAreaView style={{width:wp(100),height:hp(100),backgroundColor:'#E1F0E8'}}>
      <StatusBar
          animated={true}
          backgroundColor="#E1F0E8"
          barStyle="dark-content"
        />
      <View style={{flexDirection: 'row',width:wp(96)}}>
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
          style={{marginRight:wp(5)}}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <Text style={[styles.sosText]}>{topicName}</Text>
        </ScrollView>
      </View>
      <View style={{justifyContent:'center',alignItems:'center'}}>
          {loading && <Text style={{color:'green'}}>Loading...</Text>}
          {!loading && showNetworkError && <Text style={{color:'red'}}>Network Error</Text>}
      </View>
      {loading ? (
        <View style={[styles.container]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : ( 
        htmlText ?
          <View
            style={styles.webViewBox}>
            <WebView
              originWhitelist={['*']}
              style={styles.webView}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              scalesPageToFit={false}
              allowsInlineMediaPlayback={true}
              source={{ html: htmlContent}}
            />
          </View> : <View style={{justifyContent:'center',alignItems:'center'}}><Text> No Data Available </Text></View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sosText: {
    fontSize: wp(8),
    fontWeight: '600',
    fontFamily: 'Lato',
    color: '#212126',
    marginTop: hp(3),
    marginLeft: wp(8),
  },
  webView: {
    fontWeight: '700',
    backgroundColor: `#E1F0E8`,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  webViewBox: {
    marginTop: hp(2),
    marginLeft: wp(5),
    width: wp(90),
    height: hp(92),
  },
});

export default InnerPageC;
