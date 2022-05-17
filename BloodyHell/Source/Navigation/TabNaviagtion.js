import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screen/Home';
import Profile from '../Screen/Profile';
import Explore from '../Screen/Explore';
import Ionic from 'react-native-vector-icons/Ionicons';
import Search from '../Screen/Search';
import DrawerNavigaton from './DrawerNavigaton';

const TabNaviagtion = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'heart-sharp' : 'heart-outline';
          } else if (route.name === 'Explore') {
            iconName = focused ? 'globe' : 'globe-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          }
          return (
            <Ionic
              name={iconName}
              size={20}
              color={focused ? '#fff' : 'white'}
            />
          );
        },
        headerShown: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarLabel: () => {
          return null;
        },

        tabBarStyle: {
          backgroundColor: 'black',
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
};

export default TabNaviagtion;

const styles = StyleSheet.create({});
