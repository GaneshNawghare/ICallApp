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

const InnerPage = ({navigation, route}: any) => {
  const [loading, setLoading] = useState(true);
  const [htmlText, setHtmlText] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const id = route.params.id;

  async function getData(id: any) {
    try {
      setLoading(true);
      const {data} = await getSosInOneData(id);
      setHtmlText(data.textArea);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log('Error in getData (ContentInner)', error);
    }
  }

  useEffect(() => {
    getData(id);
  }, [id]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getData(id);
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
          style={{marginLeft:wp(-2)}}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <Text style={[styles.sosText]}>{route.params.name}</Text>
        </ScrollView>
      </View>
      {loading ? (
        <View style={[styles.container]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <View style={styles.webViewBox}>
          <WebView
            originWhitelist={['*']}
            style={styles.webView}
            source={{html: `<font size="+10">${htmlText}</font>`}}
          />
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
