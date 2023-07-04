import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ProfileArrow from '../assests/svg/ProfileArrow';
import ProfilePage from '../assests/svg/ProfilePage';
import {useDispatch} from 'react-redux';
import {setUserData} from '../../redux/Index';

const EditProfile = ({navigation, route}: any) => {
  const dataNumber = route.params.number;
  const dispatch = useDispatch();
  const [number, onChangeNumber] = React.useState('');
  const updateProfile = () => {
    dispatch(setUserData(number));
  };

  return (
    <View>
      <View
        style={{
          backgroundColor: '#8E97FE',
          width: wp(100),
          height: hp(30),
        }}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ProfileScreen');
            }}>
            <ProfileArrow style={styles.profileArrow} />
          </TouchableOpacity>
          <Text style={styles.editProfile}>Edit Profile</Text>
        </View>
        <View style={styles.profilePage}>
          <ProfilePage />
          <TouchableOpacity onPress={() => {}} style={styles.changePictureBox}>
            <Text style={styles.changePictureText}>Change Picture</Text>
          </TouchableOpacity>
          {/* </View> */}
        </View>
      </View>
      <View>
        <View>
          <Text style={styles.phoneNumberText}>Phone Number</Text>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder={dataNumber}
              keyboardType="numeric"
              placeholderTextColor={'#000000'}
            />
          </View>
        </View>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            updateProfile();
          }}
          style={styles.updateProfileBox}>
          <Text style={styles.updateProfileText}>Update Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  termsAndCondition: {
    color: '#212126',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: wp(5),
  },
  input: {
    height: hp(6),
    width: wp(90),
    marginTop: hp(1.5),
    borderWidth: wp(0.3),
    borderRadius: wp(0.4),
  },
  logout: {
    marginTop: hp(5),
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(26),
    height: hp(4),
    borderRadius: wp(0.5),
    backgroundColor: '#8E97FE',
  },
  editProfile: {
    marginLeft: wp(4),
    marginTop: wp(6.4),
    color: '#FCFDFF',
    fontSize: wp(7),
    fontWeight: '600',
    fontStyle: 'normal',
    fontFamily: 'Lato',
  },
  profileArrow: {
    marginLeft: wp(4),
    marginTop: hp(5),
    fontSize: wp(10),
    color: '#FCFDFF',
  },
  profilePage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(2),
  },
  changePictureBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(2),
    width: wp(30),
    height: hp(5),
    borderColor: '#FCFDFF',
    borderWidth: wp(0.3),
  },
  changePictureText: {
    color: '#FCFDFF',
    fontSize: wp(3.5),
    fontFamily: 'Lato',
    fontWeight: '600',
  },
  phoneNumberText: {
    flexDirection: 'row',
    marginLeft: wp(5),
    marginTop: hp(2),
    color: '#212126',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: wp(4.5),
  },
  updateProfileBox: {
    width: wp(90),
    height: hp(6),
    backgroundColor: '#8E97FE',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(1),
    marginTop: hp(2),
  },
  updateProfileText: {
    color: '#FCFDFF',
    fontFamily: 'Lato',
    fontWeight: '900',
    fontStyle: 'normal',
    fontSize: wp(4),
  },
});

export default EditProfile;
