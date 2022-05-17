import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Header = ({title, goback}) => {
  const navigation = useNavigation();

  return (
    <View style={{backgroundColor: 'white'}}>
      <TouchableOpacity onPress={goback}>
        <Text>Goback</Text>
      </TouchableOpacity>
      <Text>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
