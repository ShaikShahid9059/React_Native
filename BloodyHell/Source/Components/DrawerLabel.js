import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const DrawerLabel = ({
  routeName,
  image,
  title,
  DrawerStyles,
  DrawerImageStyles,
  DrawerTextStyles,
  setCurrentTab,
}) => {
  const navigation = useNavigation();

  return (
    <View style={{}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(routeName);
          setCurrentTab(title);
        }}>
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            // backgroundColor: currentTab == title ? '#98e3de' : 'transparent',
            alignItems: 'center',
            ...DrawerStyles,
          }}>
          <Image
            source={image}
            style={{
              width: 20,
              height: 20,
              ...DrawerImageStyles,
              // tintColor: currentTab == title ? '#1159cf' : '#98e3de',
            }}
          />
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              paddingLeft: 10,
              color: 'white',
              ...DrawerTextStyles,
            }}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DrawerLabel;

const styles = StyleSheet.create({});
