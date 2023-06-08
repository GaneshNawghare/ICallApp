import React, {useState} from 'react'
import { View ,Text,TouchableOpacity,StyleSheet,TextInput,KeyboardAvoidingView } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ProfileArrow from '../assests/svg/ProfileArrow';
import ProfilePage from '../assests/svg/ProfilePage';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../redux/Index';


const EditProfile = ({navigation,route}:any) => {
  const dataNumber=JSON.stringify(route.params.number);
  console.warn(route);
  const dispatch=useDispatch();
  const [number, onChangeNumber] = React.useState('');
  const updateProfile =()=>{
    dispatch(setUserData(number));
    console.warn("profile Updated");
  }

  return (
    <View>
       <View style={{
               backgroundColor:'#8E97FE',
               width:wp(100),
               height:hp(30)
               }}>
           <View style={{flexDirection:'row'}}>
               <TouchableOpacity onPress={()=>{navigation.navigate('ProfileScreen')}}>
                    <ProfileArrow style={{
                        marginLeft:wp(4),
                        marginTop:hp(5),
                        fontSize:wp(10),
                        color:'#FCFDFF'
                        }}/>
               </TouchableOpacity>
                   <Text style={{
                        marginLeft:wp(4),
                        marginTop:wp(5),
                        color:'#FCFDFF',
                        fontSize:wp(8),
                        fontWeight:'600',
                        fontStyle:'normal',
                        fontFamily:'Raleway'}}>Edit Profile</Text>
         </View>
         <View>
            <View style={{justifyContent:'center',alignItems:'center',marginTop:hp(2)}}>
                <ProfilePage/>
                    <TouchableOpacity onPress={()=>{navigation.navigate('EditProfile')}}>
                        <View style={{
                            justifyContent:'center',
                            alignItems:'center',
                            marginTop:hp(2),
                            width:wp(30),
                            height:hp(5),
                            borderColor:'#FCFDFF',
                            borderWidth:wp(0.3)
                        }}>
                       <Text style={{
                            color:'#FCFDFF',
                            fontSize:wp(3.5),
                            fontFamily:'Raleway',
                            fontWeight:'600'
                        }}>Change Picture</Text>
                        </View>
                    </TouchableOpacity>
            </View>
         </View>
       </View>
       <View>
           <View>
             <View style={{
                flexDirection:'row',
                marginLeft:wp(3),
                marginTop:hp(2)}}>
                <Text style={{
                     color:'#999999',
                     fontFamily:'Raleway',
                     fontStyle:'normal',
                     fontWeight:'500',
                     fontSize:wp(4.5)
                     }}>Phone Number</Text>
             </View>
             <KeyboardAvoidingView>
             <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder={dataNumber}
                keyboardType="numeric"
            />
            </KeyboardAvoidingView>
           </View>
       </View>
       <View style={{alignItems:'center',justifyContent:'center'}}>
            <TouchableOpacity onPress={()=>{updateProfile()}}>
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
                        }}>Update Profile</Text>
                  </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}
const styles=StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
    termsAndCondition:{
      color:'#212126',
      fontFamily:'Raleway',
      fontStyle:'normal',
      fontWeight:'600',
      fontSize:wp(5)
    },
    input:{
    height: hp(5),
    width:wp(90),
    marginTop:hp(1.5),
    marginLeft:wp(3),
    borderWidth: wp(0.3),
    borderRadius:wp(0.4),
    },
    logout:{
      marginTop:hp(5),
      alignItems:'center',
      justifyContent:'center',
      width:wp(26),
      height:hp(4),
      borderRadius:wp(0.5),
      backgroundColor:'#8E97FE'
    },
})
export default EditProfile;