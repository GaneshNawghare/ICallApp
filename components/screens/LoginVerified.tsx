import React from 'react'
import {View,Text,TouchableOpacity, TextInput, StyleSheet} from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import LoginImage from '../assests/svg/LoginImage';
import LoginArrow from '../assests/svg/LoginArrow';
import {useDispatch, useSelector} from 'react-redux';
import { setUserData } from '../../redux/Index';

const LoginVerified = ({navigation,route}:any) => {
  const [number, onChangeNumber] = React.useState('');
  const dispatch=useDispatch();
  const user = useSelector((store: any) => store);
  const userData=route.params.number
  const loginVerified=()=>{
    dispatch(setUserData(userData));
    navigation.navigate('LandingScreen')
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
         <View style={{marginLeft:wp(4.5),marginTop:hp(4)}}>
            <Text style={{
                color:'#36364D',
                fontFamily:'Lato',
                fontStyle:'normal',
                fontWeight:'400',
                fontSize:wp(3.2),
                }}>We have sent verification code to your phone number {'\n'}{route.params.number}</Text>
         </View>
         <View>
            <Text style={{
                marginTop:hp(3),
                marginLeft:wp(4.5),
                fontFamily:'Lato',
                fontWeight:'500',
                fontSize:wp(4),
                color:'#212126',
                fontStyle:'normal'
                }}>OTP Code</Text>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                  <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber}
                  value={number}
                  placeholder="  Enter Verification Code"
                  keyboardType="numeric"
                  />
                </View>
            <View style={{marginLeft:wp(76)}}>
                <Text style={{
                    color:'#36364D',
                    fontFamily:'Lato',
                    fontSize:wp(3),
                    fontWeight:'400'
                    }}>Resend OTP ?</Text>
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
                    marginTop:hp(2),
                    }}>
                     <Text style={{
                        color:'#FCFDFF',
                        fontFamily:'Lato',
                        fontWeight:'900',
                        fontStyle:'normal',
                        fontSize:wp(4),
                        }}>Verified OTP</Text>
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
    marginTop:hp(1.2),
    borderWidth: wp(0.3),
    borderRadius:wp(0.6),
    fontFamily:'Lato',
    color:'#999999',
    fontWeight:'400',
    fontStyle:'normal',
    fontSize:wp(3.2)
  },
})

export default LoginVerified