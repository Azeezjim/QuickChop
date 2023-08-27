import * as React from 'react'
import React from 'react'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {View, Text, StyleSheet,StatusBar} from 'react-native'
import  {SignInContextProvider}  from './src/contexts/authContext'
import {colors} from './src/global/styles'
import RootNavigator from './src/navigation/rootNavigation'
import Navigation from './src/navigation';




export default function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyB655gbDm6jiaIuFg08fdTVATqW2HmRkMY",
    authDomain: "quickchop-d8551.firebaseapp.com",
    projectId: "quickchop-d8551",
    storageBucket: "quickchop-d8551.appspot.com",
    messagingSenderId: "545907041030",
    appId: "1:545907041030:web:3ba9cadd5a7104c8f6b487",
    measurementId: "G-DFMTTFT72Q"
  };

  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  return (
    // <SignInContextProvider>
    // <View style = {styles.container}>
    //   <StatusBar 
    //     barStyle = "light-content"
    //     backgroundColor = {colors.statusbar}
    //   />
   
    //     <RootNavigator />
     
    // </View>
    // </SignInContextProvider> 
    <Navigation/>
  )
}

// const styles = StyleSheet.create({
//   container: { flex: 1 }
// })