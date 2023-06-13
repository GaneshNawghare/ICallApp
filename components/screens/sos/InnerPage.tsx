import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet} from 'react-native'
import LoginArrow from '../../assests/svg/LoginArrow'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';

const InnerPage = ({navigation,route}:any)=> {
  return (
    <View>
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={()=>{navigation.goBack()}}>
              <LoginArrow style={{
                marginTop:hp(5),
                marginLeft:wp(5)
                }}
                />
            </TouchableOpacity>
            <Text style={[styles.sosText]}>{route.params.name}</Text>
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    sosText:{
        fontSize:wp(8),
        fontWeight:'600',
        fontFamily:'Lato',
        color:'#212126',
        position:'absolute',
        marginTop:hp(3),
        marginLeft:wp(15),
      },
})

export default InnerPage