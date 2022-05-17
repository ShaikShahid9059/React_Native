import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screen/Home';
import Profile from '../Screen/Profile';
import Explore from '../Screen/Explore';
import TabNaviagtion from './TabNaviagtion';
import DrawerNavigation from './DrawerNavigaton';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{presentation: 'card', headerShown: false}}
        initialRouteName="Tab">
        <Stack.Screen name="DrawerTabs" component={DrawerNavigation} />

        {/* <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Explore" component={Explore} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default RootNavigation;
