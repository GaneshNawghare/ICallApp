import React,{useEffect,useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    SafeAreaView,
    Image,
    } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';
import LoginArrow from '../../assests/svg/LoginArrow';
import ChatLogo from '../../assests/svg/ChatLogo';
import CallLogo from '../../assests/svg/CallLogo';
import MessageLogo from '../../assests/svg/MessageLogo';
import HelplineLogo from '../../assests/svg/HelplineLogo';
import { getSosData } from '../../../axios';


const Sos = ({navigation}:any) => {
  const Array=['#E6672D','#F9CF7D','#6AB58E','#8E97FE']
  const [content, setContent] = useState([])
  let Index=0
    const DATA = [
        {
          "id": 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          "title": 'Anxiety',
          "picturelink":require('./jpg/shutterstock_578702251_(1)_29.png'),
        },
        {
          "id": '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          "title": 'Depression',
          "picturelink":require('./jpg/shutterstock_578702251_(1)_33.png'),
        },
        // {
        //   id: '58694a0f-3da1-471f-bd96-145571e29d72',
        //   title: 'Disorder',
        //   picturelink:require('./jpg/shutterstock_578702251_(1)_34.png'),
        // },
        // {
        //     id: '58694a0f-3da1-471f-bd96-145571e29d712',
        //     title: 'Suicide',
        //     picturelink:require('./jpg/shutterstock_578702251_(1)_35.png'),
        // },
        // {
        //     id: '58694a0f-3da1-471f-bd96-145571e29d777',
        //     title: 'fifth Item',
        //     picturelink:require('./jpg/shutterstock_578702251_(1)_34.png'),
        // },
        // {
        //     id: '58694a0f-3da1-471f-bd96-145571e29d78',
        //     title: 'six Item',
        //     picturelink:require('./jpg/shutterstock_578702251_(1)_33.png'),
        // },
        // {
        //     id: '58694a0f-3da1-471f-bd96-145571e29d799',
        //     title: 'seven Item',
        //     picturelink:require('./jpg/shutterstock_578702251_(1)_35.png'),
        // },
        // {
        //     id: '58694a0f-3da1-471f-bd96-145571e29d74',
        //     title: 'Eight Item',
        //     picturelink:require('./jpg/shutterstock_578702251_(1)_34.png'),
        // },
      ];

      async function getData() {
        try {
          const data = await getSosData();
          const arr = data.data.resp
          console.log('main sos', arr)
          setContent(arr)
        } catch (error) {
          console.log(error)
        }
      }

      useEffect(() => {
        getData()
      }, [])

  return (
    <SafeAreaView style={{width:wp(100),height:hp(100)}}>
    <View>
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={()=>{navigation.goBack()}}>
              <LoginArrow style={{
                marginTop:hp(5),
                marginLeft:wp(5)
                }}
                />
            </TouchableOpacity>
            <Text style={[styles.sosText]}>SOS</Text>
        </View>
        <View style={{flexDirection:'row',marginTop:hp(5)}}>
            <TouchableOpacity>
              <ChatLogo style={{marginLeft:wp(5),position:'absolute'}}/>
              <Text style={[styles.logotext,{marginTop:hp(5.5),marginLeft:wp(5)}]}>Chatline</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <CallLogo style={{marginLeft:wp(30),position:'absolute'}}/>
              <Text style={[styles.logotext,{marginTop:hp(5.5),marginLeft:wp(26)}]}>iCall helpline</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <MessageLogo style={{marginLeft:wp(55),position:'absolute'}}/>
              <Text style={[styles.logotext,{marginTop:hp(5.5),marginLeft:wp(56.2)}]}>Email</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <HelplineLogo style={{marginLeft:wp(77),position:'absolute'}}/>
            </TouchableOpacity>
        </View>
        <View style={{marginTop:hp(9),marginBottom:hp(26)}}>
                <FlatList
                    data={content}
                    numColumns={2}
                    renderItem={({item}:any) => {
                      const name=item.topic;
                      if(Index==Array.length){
                        Index=0;
                      }
                      const id=item._id;
                      var imageURI =item.uploadImage;
                    return (
                        <View>
                            <TouchableOpacity onPress={()=>{navigation.navigate('Anxiety',{name,id})}}>
                                <View style={[styles.item,{backgroundColor:Array[Index++]}]}>
                                   <Text style={styles.title}>{item.topic}</Text>
                                   <Image
                                     style={{ position:'absolute',width: 71,height: 71,bottom:2,right:2}}
                                     source={{uri:imageURI}}
                                    // style={{position:'absolute',bottom:0,right:0}}
                                    />
                                </View>
                            </TouchableOpacity>
                       </View>
                    )
                    }}
                    keyExtractor={(item:any) => item.id}
                />
        </View>
    </View>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
      item: {
        backgroundColor: '#E6672D',
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
    logotext:{
        fontFamily:'Lato',
        fontSize:wp(3.5),
        fontWeight:'600',
        fontStyle:'normal',
        color:'#353D6C',
        position:'absolute',
    }
})
export default Sos