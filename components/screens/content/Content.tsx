import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity,FlatList} from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';
import LoginArrow from '../../assests/svg/LoginArrow';


const Content = ({navigation}:any) => {
    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d712',
            title: 'fourth Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d777',
            title: 'fifth Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d78',
            title: 'six Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d799',
            title: 'seven Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d74',
            title: 'Eight Item',
        },
      ];

      type ItemProps = {title: string};

      const Item = ({title}: ItemProps) => (
          <View style={styles.item}>
                <Text style={styles.title}>{title}</Text>
          </View>
      ); 


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
        <View style={{marginTop:hp(4),marginBottom:hp(35)}}>
                <FlatList
                    data={DATA}
                    numColumns={2}
                    renderItem={({item}) => {
                    return (
                        <View>
                            <TouchableOpacity>
                                <Item title={item.title} />
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
        backgroundColor: '#f9c2ff',
        padding:wp(2.5),
        width:wp(42),
        height:hp(20),
        marginLeft:wp(5.5),
        marginVertical:wp(3),
      },
      title: {
        fontSize: 32,
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