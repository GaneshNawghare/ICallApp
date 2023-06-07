/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import { Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './components/screens/SplashScreen';
import { enableScreens } from 'react-native-screens';


enableScreens(true);

const Stack = createNativeStackNavigator();

// const Routing = () =>{
  
//   return (
//   //  <NavigationContainer>
//   //      <Stack.Navigator
//   //       initialRouteName="SplashScreen">
//   //       <Stack.Screen name="SplashScreen" component={SplashScreen} />
//   //     </Stack.Navigator>
//   //  </NavigationContainer>
//   )
// }

const App = () =>{
  return (
   <NavigationContainer>
       <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
      </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App;