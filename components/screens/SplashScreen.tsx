import React from 'react'
import { Text, View,StyleSheet } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const SplashScreen = () => {
  return (
    <View>
        <Text>SplashScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width: wp(85),
  }
})

export default SplashScreen;