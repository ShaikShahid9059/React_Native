import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../Screen/Home';
import Profile from '../Screen/Profile';
import Search from '../Screen/Search';
import Explore from '../Screen/Explore';
import TabNaviagtion from './TabNaviagtion';
import CustomDrawerContent from './CustomDrawerContent';
import {useWindowDimensions} from 'react-native';
import Setting from '../Screen/Setting';

import {createDrawerNavigator} from '@react-navigation/drawer';
import SplashScreen from '../Screen/SplashScreen';

const Drawer = createDrawerNavigator();
const DrawerNavigaton = () => {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="BottomTab" component={TabNaviagtion} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Explore" component={Explore} />
      <Drawer.Screen name="Search" component={Search} />
      <Drawer.Screen name="Setting" component={Setting} />
      <Drawer.Screen name="Splash" component={SplashScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigaton;

const styles = StyleSheet.create({});
