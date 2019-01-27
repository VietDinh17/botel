import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import AdminScreen from '../screens/AdminScreen';
//import CameraScreen from '../screens/CameraScreen';

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Admin: AdminScreen,
  //Camera: CameraScreen
},{
  initialRouteName: 'Home'
});

export default RootStack;
