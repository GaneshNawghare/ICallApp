import React, {useState} from 'react'
import { View ,Text,TouchableOpacity,StyleSheet,Switch } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ProfileArrow from '../assests/svg/ProfileArrow';
import ProfilePage from '../assests/svg/ProfilePage';
import ProfilePrivacyArrow from '../assests/svg/ProfilePrivacyArrow';
import {useDispatch, useSelector} from 'react-redux';
import { removeUserData } from '../../redux/Index';

const ProfileScreen = ({navigation}:any) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const store: any = useSelector((store: any) => store);
    const dispatch=useDispatch();
    const number=store.userData;
    const logoutPage=()=>{
      dispatch(removeUserData());
      navigation.navigate('SplashScreen');
    }
  return (
    <View>
        <View style={{
               backgroundColor:'#8E97FE',
               width:wp(100),
               height:hp(30)
               }}>
         <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={()=>{navigation.goBack()}}>
            <ProfileArrow style={{
                 marginLeft:wp(4),
                 marginTop:hp(5),
                 fontSize:wp(10),
                 color:'#FCFDFF'
                 }}/>
            </TouchableOpacity>
            <Text style={{
              marginLeft:wp(4),
              marginTop:wp(6),
              color:'#FCFDFF',
              fontSize:wp(8),
              fontWeight:'600',
              fontStyle:'normal',
              fontFamily:'Lato'}}>Profile</Text>
         </View>
         <View>
            <View style={{
                 justifyContent:'center',
                 alignItems:'center',
                 marginTop:hp(2)
                 }}>
                <ProfilePage/>
                    <TouchableOpacity 
                      onPress={()=>{navigation.navigate('EditProfile',{number})}}>
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
                        fontFamily:'Lato',
                        fontWeight:'600'
                        }}>Edit Profile</Text>
                    </View>
                    </TouchableOpacity>
            </View>
         </View>
       </View>
       <View>
           <View>
             <Text style={{
                marginLeft:wp(4),
                marginTop:hp(5),
                fontStyle:'normal',
                color:'#8E97FE',
                fontFamily:'Lato',
                fontSize:wp(5.5),
                fontWeight:'600'
                }}>Personal Details</Text>
             <View style={[styles.horizontalLine]}></View>
             <View style={{
                flexDirection:'row',
                marginLeft:wp(4),
                marginTop:hp(2)}}>
                <Text style={{
                     color:'#212126',
                     fontFamily:'Lato',
                     fontStyle:'normal',
                     fontWeight:'600',
                     fontSize:wp(4.5)
                     }}>Phone number</Text>
                <Text style={{
                    marginLeft:wp(35),
                    color:'#212126',
                    fontFamily:'Lato',
                    fontStyle:'normal',
                    fontWeight:'600',
                    fontSize:wp(4.5)
                    }}>{store.userData}</Text>
             </View>
           </View>
       </View>
       <View style={{
                   width:wp(100),
                   height:hp(0.2),
                   backgroundColor:'#DFE0EB',
                   marginTop:hp(3),
                   }}></View>
       <View>
           <View>
             <Text style={{
                 marginLeft:wp(4),
                 marginTop:hp(1.5),
                 fontStyle:'normal',
                 color:'#8E97FE',
                 fontFamily:'Lato',
                 fontSize:wp(5.5),
                 fontWeight:'600'
                 }}>Notification</Text>
             <View style={[styles.horizontalLine]}></View>
             <View style={{
                 flexDirection:'row',
                 marginLeft:wp(4),
                 marginTop:hp(2)
                 }}>
                <Text style={{
                  color:'#212126',
                  fontFamily:'Lato',
                  fontStyle:'normal',
                  fontWeight:'600',
                  fontSize:wp(4.5)
                  }}>Do you want Notifications</Text>
                <View style={{marginLeft:wp(28)}}>
                <Switch
                     trackColor={{false: '#767577', true: '#81b0ff'}}
                     ios_backgroundColor="#DFE0EB"
                     onValueChange={toggleSwitch}
                     value={isEnabled}
                />
                </View>
             </View>
           </View>
       </View>
       <View style={{
                   width:wp(100),
                   height:hp(0.2),
                   backgroundColor:'#DFE0EB',
                   marginTop:hp(3),
                   }}></View>
       <View>
           <View>
             <Text style={{
                marginLeft:wp(4),
                marginTop:hp(1.5),
                fontStyle:'normal',
                color:'#8E97FE',
                fontFamily:'Lato',
                fontSize:wp(5.5),
                fontWeight:'600'
                }}>Terms & Conditions</Text>
             <View style={[styles.horizontalLine]}></View>
             <View style={{marginLeft:wp(4),marginTop:hp(2)}}>
                <View style={{flexDirection:'row'}}>
                <Text style={[styles.termsAndCondition]}>Privacy Policies</Text>
                <TouchableOpacity>
                <ProfilePrivacyArrow style={{marginTop:hp(1.2),marginLeft:wp(55.5)}}/>
                </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row'}}>
                <Text style={[{marginTop:hp(2)},styles.termsAndCondition]}>User Terms & Conditions</Text>
                <TouchableOpacity>
                <ProfilePrivacyArrow style={{marginTop:hp(3.2),marginLeft:wp(37)}}/>
                </TouchableOpacity>
                </View>
             </View>
           </View>
       </View>
       <View style={{
               alignItems:'center',
               justifyContent:'center'
               }}>
        <TouchableOpacity onPress={()=>{logoutPage()}}>
          <View style={[styles.logout]}>
             <Text style={{color:'#FCFDFF'}}>Logout</Text>
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
      fontFamily:'Lato',
      fontStyle:'normal',
      fontWeight:'600',
      fontSize:wp(4.5)
    },
    logout:{
      marginTop:hp(5),
      alignItems:'center',
      justifyContent:'center',
      width:wp(24),
      height:hp(4),
      borderRadius:wp(0.5),
      backgroundColor:'#8E97FE'
    },
    horizontalLine:{
        marginLeft:wp(4),
        width:wp(9),
        height:hp(0.3),
        backgroundColor:'#8E97FE',
        borderRadius:wp(1.5),
    }
})
export default ProfileScreen;