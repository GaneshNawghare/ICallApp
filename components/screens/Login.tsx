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
                fontFamily:'Lato'}}>Login</Text>
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
                marginLeft:wp(4.6),
                fontFamily:'Lato',
                fontWeight:'500',
                fontSize:wp(4),
                color:'#212126',
                fontStyle:'normal'
                }}>Phone Number</Text>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                   <TextInput
                     style={styles.input}
                     onChangeText={onChangeNumber}
                     value={number}
                     placeholder="  Enter your phone number"
                     keyboardType="numeric"
                   />
                </View>
            <View style={{alignItems:'center',justifyContent:'center'}}>
               <TouchableOpacity onPress={()=>{loginVerified()}}>
                  <View style={{
                    width:wp(90),
                    height:hp(6),
                    backgroundColor:'#8E97FE',
                    alignItems:'center',
                    justifyContent:'center',
                    borderRadius:wp(1),
                    marginTop:hp(3),
                    }}>
                     <Text style={{
                        color:'#FCFDFF',
                        fontFamily:'Lato',
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
    height: hp(6),
    width:wp(90),
    marginTop:hp(1.5),
    borderWidth: wp(0.3),
    borderRadius:wp(0.4),
    fontFamily:'Lato',
    fontWeight:'400',
    fontStyle:'normal',
    color:'#999999',
    fontSize:wp(3.5),
  },
})

export default Login