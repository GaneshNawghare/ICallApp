import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import LoginArrow from '../../assests/svg/LoginArrow';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {WebView} from 'react-native-webview';
import {getSosInOneData} from '../../../axios';
import NetWorkError from '../../assests/svg/NetWorkError';
import NoDataAvailable from '../../assests/svg/NoDataAvailable'


const InnerPage = ({navigation, route}: any) => {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState(route.params.name);
  const [htmlText, setHtmlText] = useState('');
  const [topicName, setTopicName] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [showNetworkError, setShowNetworkError] = useState(false);
  const [id, setId] = useState('');
  const id1 = route.params.id;

  async function getData(id: any) {
    try {
      setLoading(true);
      const {data} = await getSosInOneData(id);
      setId(data.parentId);
      setHtmlText(data.textArea);
      setTopicName(data.topic);
      setLoading(false);
      setShowNetworkError(false)
    } catch (error) {
      setLoading(false);
      setShowNetworkError(true);
      setHtmlText('');
      console.log('Error in getData (ContentInner)', error);
    }
  }

  useEffect(() => {
    getData(id1);
  }, [id1]);

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
    getData(id1);
    setRefreshing(false);
  }, []);

  return (
    <SafeAreaView
      style={{width: wp(100), height: hp(100), backgroundColor: '#FAE1D5'}}>
      <StatusBar
        animated={true}
        backgroundColor="#FAE1D5"
        barStyle="dark-content"
      />
      <View style={{flexDirection: 'row', width: wp(95)}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Anxiety",{id,name});
          }}>
          <LoginArrow
            style={{
              marginTop: hp(5),
              marginLeft: wp(5),
            }}
          />
        </TouchableOpacity>
        <ScrollView
          style={{marginLeft:wp(-2)}}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <Text style={[styles.sosText]}>{topicName}</Text>
        </ScrollView>
      </View>
      <View style={{justifyContent:'center',alignItems:'center'}}>
      {!loading && showNetworkError && (
            <View style={{marginTop:hp(25),justifyContent:'center',alignItems:'center'}}>
            <NetWorkError/>
            <Text style={{color: 'red',fontWeight:'700',fontFamily:'Lato'}}>Lost Internet Connection</Text>
            </View>
          )}
      </View>
      {loading ? (
        <View style={[styles.container]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        htmlText ? 
        <View style={styles.webViewBox}>
          <WebView
            originWhitelist={['*']}
            style={styles.webView}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            scalesPageToFit={false}
            allowsInlineMediaPlayback={true}
            source={{ html: htmlContent}}
          />
        </View> : showNetworkError?null:<View style={{marginTop:hp(25),justifyContent:'center',alignItems:'center'}}>
          <NoDataAvailable/>
          <View style={styles.noData}>
          <Text style={{color:'Black'}}> No Data Available </Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sosText: {
    fontSize: wp(8),
    width: wp(80),
    fontWeight: '600',
    fontFamily: 'Lato',
    color: '#212126',
    marginTop: hp(3),
    marginLeft: wp(8),
  },
  noData:{
    marginLeft:wp(5),
    width:wp(50),
    height:hp(3),
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#8E97FE',
    borderRadius:wp(3)
  },
  webView: {
    fontWeight: '700',
    backgroundColor: `#FAE1D5`,
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
    height: hp(90),
  },
  scrollView: {
    flex: 1,
    marginTop: hp(1),
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default InnerPage;
