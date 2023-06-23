import React, { useEffect, useState } from 'react'
import {View,Text,StyleSheet,TouchableOpacity,FlatList,Image} from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';
import LoginArrow from '../../assests/svg/LoginArrow';
import { getContentData } from '../../../axios';


const Content = ({navigation}:any) => {
  const Array=['#E6672D','#F9CF7D','#6AB58E','#8E97FE']
  const [content, setContent] = useState([])
  let Index=0
  // const DATA = [
  //   {
  //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  //     title: 'Anxiety',
  //     picturelink:require('./jpg/shutterstock_578702251_(1)_29.png'),
  //   },
  //   {
  //     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
  //     title: 'Depression',
  //     picturelink:require('./jpg/shutterstock_578702251_(1)_33.png'),
  //   },
  //   {
  //     id: '58694a0f-3da1-471f-bd96-145571e29d72',
  //     title: 'Disorder',
  //     picturelink:require('./jpg/shutterstock_578702251_(1)_34.png'),
  //   },
  //   {
  //       id: '58694a0f-3da1-471f-bd96-145571e29d712',
  //       title: 'Suicide',
  //       picturelink:require('./jpg/shutterstock_578702251_(1)_35.png'),
  //   },
  //   {
  //       id: '58694a0f-3da1-471f-bd96-145571e29d777',
  //       title: 'fifth Item',
  //       picturelink:require('./jpg/shutterstock_578702251_(1)_34.png'),
  //   },
  //   {
  //       id: '58694a0f-3da1-471f-bd96-145571e29d78',
  //       title: 'six Item',
  //       picturelink:require('./jpg/shutterstock_578702251_(1)_33.png'),
  //   },
  //   {
  //       id: '58694a0f-3da1-471f-bd96-145571e29d799',
  //       title: 'seven Item',
  //       picturelink:require('./jpg/shutterstock_578702251_(1)_35.png'),
  //   },
  //   {
  //       id: '58694a0f-3da1-471f-bd96-145571e29d74',
  //       title: 'Eight Item',
  //       picturelink:require('./jpg/shutterstock_578702251_(1)_34.png'),
  //   },
  // ];

  async function getData() {
    try {
      const data = await getContentData();
      const arr = data.data.resp
      setContent(arr)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

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
                    data={content}
                    numColumns={2}
                    renderItem={({item}:any) => {
                      const name=item.topic;
                      const id=item._id;
                      if(Index==Array.length){
                        Index=0;
                      }
                    return (
                        <View>
                            <TouchableOpacity onPress={()=>{navigation.navigate('ContentInner',{name,id})}}>
                                <View style={[styles.item,{backgroundColor:Array[Index++]}]}>
                                   <Text style={styles.title}>{item.topic}</Text>
                                   <Image
                                         source={item.uploadImage}
                                         style={{position:'absolute',bottom:0,right:0}}/>
                                </View>
                            </TouchableOpacity>
                       </View>
                    )
                    }}
                    keyExtractor={(item:any) => item.id}
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