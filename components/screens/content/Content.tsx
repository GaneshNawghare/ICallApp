import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity,FlatList,Image} from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';
import LoginArrow from '../../assests/svg/LoginArrow';


const Content = ({navigation}:any) => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Anxiety',
      color:'#E6672D',
      picturelink:require('./jpg/shutterstock_578702251_(1)_29.png'),
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Depression',
      color:'#F9CF7D',
      picturelink:require('./jpg/shutterstock_578702251_(1)_33.png'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Disorder',
      color:'#6AB58E',
      picturelink:require('./jpg/shutterstock_578702251_(1)_34.png'),
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d712',
        title: 'Suicide',
        color:'#8E97FE',
        picturelink:require('./jpg/shutterstock_578702251_(1)_35.png'),
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d777',
        title: 'fifth Item',
        color:'#E6672D',
        picturelink:require('./jpg/shutterstock_578702251_(1)_34.png'),
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d78',
        title: 'six Item',
        color:'#F9CF7D',
        picturelink:require('./jpg/shutterstock_578702251_(1)_33.png'),
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d799',
        title: 'seven Item',
        color:'#6AB58E',
        picturelink:require('./jpg/shutterstock_578702251_(1)_35.png'),
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d74',
        title: 'Eight Item',
        color:'#8E97FE',
        picturelink:require('./jpg/shutterstock_578702251_(1)_34.png'),
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
            <Text style={[styles.sosText]}>Content</Text>
        </View>
        <View style={{marginTop:hp(4),marginBottom:hp(16)}}>
        <FlatList
                    data={DATA}
                    numColumns={2}
                    renderItem={({item}) => {
                      const name=item.title;
                    return (
                        <View>
                            <TouchableOpacity onPress={()=>{navigation.navigate('ContentInner',{name})}}>
                                <View style={[styles.item,{backgroundColor:item.color}]}>
                                   <Text style={styles.title}>{item.title}</Text>
                                   <Image
                                         source={item.picturelink}
                                         style={{position:'absolute',bottom:0,right:0}}/>
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
        padding:wp(2.5),
        width:wp(42),
        height:hp(20),
        marginLeft:wp(5.5),
        marginVertical:wp(3),
      },
      title: {
        fontSize: wp(6),
        fontFamily:'Lato',
        fontStyle:'normal',
        fontWeight:'700',
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
export default Content