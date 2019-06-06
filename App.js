/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";
import LoginScreen from './src/screens/LoginScreen';
import BlankScreen from './src/screens/BlankScreen';
import ListScreen from './src/screens/ListScreen.js/ListScreen';
import HomeScreen from './src/screens/HomeScreen';
import CustomDrawerComponent from './src/components/CustomDrawerComponent';
import Loader from './src/screens/Loader/Loader';

const Drawer = createDrawerNavigator({
  Home:  HomeScreen,
  Blank: BlankScreen,
},
{
  contentComponent : CustomDrawerComponent,
  drawerWidth:300,
})

const AppNavigator = createStackNavigator({
  Load: { screen: Loader,
    navigationOptions: () => ({
      header: null
    }),
  },
  Home: { screen: Drawer,
    navigationOptions: () => ({
      header: null
    }),
  },
  Login: { screen: LoginScreen,
    navigationOptions: () => ({
      header: null
    }),
  },
  Blank: { screen: BlankScreen },
  List: { screen: ListScreen,
    navigationOptions: () => ({
      header: null
    }),
  },
});

export default createAppContainer(AppNavigator)
