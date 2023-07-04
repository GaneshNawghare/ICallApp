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
import { getContentInOneData, getContentInnerData } from '../../../axios';

const InnerPageC = ({navigation, route}: any) => {
  const [loading, setLoading] = useState(true);
  const [htmlText, setHtmlText] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const id = route.params.id

  async function getData(id: any) {
    try {
      setLoading(true);
      const {data} = await getContentInOneData(id);
      setHtmlText(data.textArea)
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log('Error in getData (ContentInner)',error);
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
          <Text style={[styles.sosText]}>{route.params.name}</Text>
        </ScrollView>
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
                html: `<font style="font-size: 40px;">${htmlText}</font>`,
              }}
            />
          </View>
        </>
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
});

export default InnerPageC;
