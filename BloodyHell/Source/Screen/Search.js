import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';

const Search = () => {
  return (
    <View style={styles.container}>
      <Text>Search Screen</Text>
      <Ionic name="ios-home" />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c2951b',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
