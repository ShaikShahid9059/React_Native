import {StyleSheet, Text, Button, View, TextInput} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.navigate('Profile')}
        title="Go To Profile"
      />
      <Text>Home Screen</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    color: 'black',
    borderWidth: 1,
    width: '50%',
    borderBottomColor: 'black',
  },
});
