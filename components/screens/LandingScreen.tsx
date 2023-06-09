import React from 'react'
import { View,Text,StyleSheet, TouchableOpacity } from 'react-native';
import Arrow from '../assests/svg/Arrow';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ProfileLogo from '../assests/svg/ProfileLogo';
import Sos from '../assests/svg/Sos';
import Content from '../assests/svg/Content';
import SelfAssessment from '../assests/svg/SelfAssessment';
import ChatLogo from '../assests/svg/ChatLogo';
import CallLogo from '../assests/svg/CallLogo';
import MessageLogo from '../assests/svg/MessageLogo';
import {useSelector} from 'react-redux';
import * as _ from 'lodash';

const LandingScreen =({navigation}:any)=>{
  const store: any = useSelector((store: any) => store);
  const LoginOrProfile=()=>{
    _.isEmpty(store.userData)? navigation.navigate('Login')
    :navigation.navigate('ProfileScreen')
  }
  return (
    <View style={{backgroundColor:'#F5F5F5'}}>
      <View style={{marginLeft:wp(5),flexDirection:'row'}}>
        <Text style={[styles.textCon]}>Choose which content{'\n'}you want to see</Text>
        <Arrow style={{
            marginTop:hp(5),
            marginRight:wp(8),
            color:'#292933',
            fontFamily:'Lato',
        }}/>
        <View style={{marginTop:wp(0.7),marginLeft:wp(8)}}>
          <TouchableOpacity onPress={()=>{LoginOrProfile()}}>
             <ProfileLogo style={{ marginTop:wp(5)}}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop:hp(3),alignItems:'center',justifyContent:'center'}}>
        <TouchableOpacity>
        <Sos/>
        </TouchableOpacity>
        <Text style={[styles.imageBottomText]}>Established for maritime use in formal notation SOS is {'\n'}
        with an overscore line,to indicate that the Morse code </Text>
        <View style={[styles.horinzontalLine]}></View>
        <TouchableOpacity>
        <Content/>
        </TouchableOpacity>
        <Text style={[styles.imageBottomText]}>Established for maritime use in formal notation SOS is {'\n'}
        with an overscore line,to indicate that the Morse code </Text>
        <View style={[styles.horinzontalLine]}></View>
        <TouchableOpacity>
        <SelfAssessment/>
        </TouchableOpacity>
        <Text style={[styles.imageBottomText]}>Established for maritime use in formal notation SOS is {'\n'}
        with an overscore line,to indicate that the Morse code </Text>
      </View>
      <View style={{marginTop:hp(3.5),flexDirection:'row',alignItems:'center'}}>
        <TouchableOpacity>
        <ChatLogo style={{marginLeft:wp(18)}}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <CallLogo style={{marginLeft:wp(13)}}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <MessageLogo style={{marginLeft:wp(13)}}/>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',alignItems:'center'}}>
        <Text style={[{marginLeft:wp(20)},styles.bottomText]}>Chat</Text>
        <Text style={[{marginLeft:wp(18.5)},styles.bottomText]}>Call</Text>
        <Text style={[{marginLeft:wp(17)},styles.bottomText]}>Email</Text>
      </View>
   </View>
  )
}

const styles=StyleSheet.create({
 textCon:{
    fontSize:wp(6),
    fontWeight:'600',
    color:'#292933',
    fontFamily:'Raleway',
 },
 horinzontalLine:{
    marginTop:hp(2),
    marginBottom:hp(2),
    width:wp(75),
    height:wp(0.5),
    backgroundColor:'#DFE0EB',
    marginLeft:wp(2)
 },
 imageBottomText:{
    color:'#36364D',
    fontFamily:'Raleway'
 },
 textImages:{
    color:'#36364D',
    fontFamily:'Raleway',
 },
 bottomText:{
    fontFamily:'Raleway',
    color:'#353D6C',
    fontStyle:'normal'
 }
})
export default LandingScreen