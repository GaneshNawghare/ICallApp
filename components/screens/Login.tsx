import React from 'react'
import {View,Text,TouchableOpacity, TextInput, StyleSheet} from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import LoginImage from '../assests/svg/LoginImage';
import LoginArrow from '../assests/svg/LoginArrow';

const Login = ({navigation}:any) => {
  const [number, onChangeNumber] = React.useState('');
  const loginVerified=()=>{
    navigation.navigate('LoginVerified',{number})
  }
  return (
    <View style={{width:wp(100),height:wp(1000),backgroundColor:'#FFFFFF'}}>
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={()=>{navigation.goBack()}}>
            <LoginArrow style={{
                marginLeft:wp(4),
                marginTop:hp(5),
                fontSize:wp(10),
                color:'#212126'}}/>
            </TouchableOpacity>
            <Text style={{
                marginLeft:wp(6),
                marginTop:wp(6),
                color:'#212126',
                fontSize:wp(8),
                fontWeight:'600',
                fontStyle:'normal',
                fontFamily:'Raleway'}}>Login</Text>
         </View>
         <View style={{
            marginTop:hp(4),
            alignItems:'center',
            justifyContent:'center'
            }}>
            <LoginImage/>
         </View>
         <View>
            <Text style={{
                marginTop:hp(3),
                marginLeft:wp(3.2),
                fontFamily:'Raleway',
                fontWeight:'500',
                fontSize:wp(4),
                color:'#212126',
                fontStyle:'normal'
                }}>Phone Number</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Enter your phone number"
                keyboardType="numeric"
            />
            <View style={{alignItems:'center',justifyContent:'center'}}>
               <TouchableOpacity onPress={()=>{loginVerified()}}>
                  <View style={{
                    width:wp(95),
                    height:hp(5),
                    backgroundColor:'#8E97FE',
                    alignItems:'center',
                    justifyContent:'center',
                    borderRadius:wp(1),
                    marginTop:hp(2),
                    }}>
                     <Text style={{
                        color:'#FCFDFF',
                        fontFamily:'Raleway',
                        fontWeight:'900',
                        fontStyle:'normal',
                        fontSize:wp(4),
                        }}>Send OTP</Text>
                  </View>
               </TouchableOpacity>
            </View>
         </View>
    </View>
  )
}

const styles=StyleSheet.create({
  input: {
    height: hp(5),
    width:wp(90),
    marginTop:hp(1.5),
    marginLeft:wp(3),
    borderWidth: wp(0.3),
    borderRadius:wp(0.4),
  },
})

export default Login