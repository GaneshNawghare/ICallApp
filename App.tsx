/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './components/screens/SplashScreen';
import { enableScreens } from 'react-native-screens';
import LandingScreen from './components/screens/LandingScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import Login from './components/screens/Login';
import LoginVerified from './components/screens/LoginVerified';
import EditProfile from './components/screens/EditProfile';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './redux/Index';


enableScreens(true);

const Stack = createNativeStackNavigator();

const Routing = () =>{
  
  return (
  <NavigationContainer>
       <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LandingScreen" component={LandingScreen}/>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="LoginVerified" component={LoginVerified}/>
        <Stack.Screen name="EditProfile" component={EditProfile}/>
      </Stack.Navigator>
   </NavigationContainer>
  )
}

const App = () =>{
  return (
   <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routing />
      </PersistGate>
    </Provider>
  )
}

export default App;