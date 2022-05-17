import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import Explore from './Explore';
import Header from '../Components/Header';

const Profile = ({navigation}) => {
  const goback = () => {
    navigation.navigate('Explore');
  };
  return (
    <View style={{flex: 1}}>
      <Header goback={goback} title={'profile'} />

      <View style={styles.container}>
        <Text>Profile Screen</Text>
        <Button
          onPress={() => navigation.navigate(Explore)}
          title="Go To Explore"
        />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
