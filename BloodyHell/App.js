import 'react-native-gesture-handler';
import {View, Text} from 'react-native';

import React from 'react';

import TabNaviagtion from './Source/Navigation/TabNaviagtion';
import RootNavigation from './Source/Navigation/RootNavigation';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <RootNavigation />
    </View>
  );
}
