import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import React from 'react';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}





function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={MyTabs} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>

  );
}



function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Home'
    activeColor='#ffffff'
    inactiveColor='#595959'
    backBehavior='history'
    barStyle={{ backgroundColor: 'orange'  }}>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }} />
    </Tab.Navigator>
  );
}


export default Navigation