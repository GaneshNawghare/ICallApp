import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native'
import LoginArrow from '../../assests/svg/LoginArrow'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';

const Anxiety = ({navigation,route}:any) => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Anxiety',
      order:1,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Depression',
      order:2,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Disorder',
      order:3,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d712',
      title: 'Suicide',
      order:4,

    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d777',
      title: 'fifth Item',
      order:5,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d78',
      title: 'six Item',
      order:6,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d799',
      title: 'seven Item',
      order:7,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d74',
      title: 'Eight Item',
      order:8,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d785',
      title: 'Nine Item',
      order:9,
    },
  ];
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
        <View style={{marginTop:hp(4),marginBottom:hp(18)}}>
                <FlatList
                    data={DATA}
                    renderItem={({item}) => {
                      const name=item.title;
                      return (
                        <View>
                            <TouchableOpacity onPress={()=>{navigation.navigate('InnerPage',{name})}}>
                                <View style={[styles.item,{flexDirection:'row'}]}>
                                  <Text style={styles.title}>{item.order}. {item.title}</Text>
                                  <Text style={{
                                    position:'absolute',
                                    color:'#FFFFFF',
                                    fontSize:wp(8),
                                    marginTop:hp(0.2),
                                    marginLeft:wp(78),
                                    }}> > </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                    }}
                    keyExtractor={item => item.id}
                />
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
  item: {
    backgroundColor: '#E6672D',
    padding:wp(2.5),
    width:wp(90),
    height:hp(6),
    marginLeft:wp(5.5),
    marginVertical:wp(3),
  },
  title: {
    fontSize: wp(6),
    fontFamily:'Lato',
    fontStyle:'normal',
    fontWeight:'600',
    color:'#FFFFFF',
  },
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
export default Anxiety