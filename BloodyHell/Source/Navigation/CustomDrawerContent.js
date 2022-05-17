import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';

import DrawerLabel from '../Components/DrawerLabel';
import ImagePath from '../utils/ImagePath';
import {HEIGHT, WIDTH} from '../utils/StylesConstants';

const CustomDrawerContent = props => {
  const [currentTab, setCurrentTab] = useState('Home');
  //   console.log(props);
  const {searchIcon, settingIcon, homeIcon, profileIcon} = ImagePath;

  return (
    <DrawerContentScrollView
      {...props}
      style={{flex: 1, backgroundColor: '#212121'}}>
      <View style={{flex: 1, marginBottom: 30}}>
        <Image
          source={{uri: 'https://reactjs.org/logo-og.png'}}
          style={{
            width: WIDTH * 0.17,
            height: HEIGHT * 0.09,
            borderRadius: 30,
            resizeMode: 'contain',
          }}
        />
      </View>

      <DrawerLabel
        image={homeIcon}
        routeName={'BottomTab'}
        title={'Home'}
        setCurrentTab={setCurrentTab}
        DrawerStyles={{
          backgroundColor: currentTab === 'Home' ? '#98e3de' : 'transparent',
        }}
        DrawerImageStyles={{
          tintColor: currentTab === 'Home' ? '#1159cf' : '#98e3de',
        }}
      />
      <DrawerLabel
        image={profileIcon}
        routeName={'Profile'}
        title={'Profile'}
        setCurrentTab={setCurrentTab}
        DrawerStyles={{
          backgroundColor: currentTab === 'Profile' ? '#98e3de' : 'transparent',
        }}
      />
      <DrawerLabel
        image={searchIcon}
        routeName={'Search'}
        title={'Search'}
        setCurrentTab={setCurrentTab}
        DrawerStyles={{
          backgroundColor: currentTab === 'Search' ? '#98e3de' : 'transparent',
        }}
      />
      <DrawerLabel
        image={settingIcon}
        routeName={'Setting'}
        title={'Setting'}
        setCurrentTab={setCurrentTab}
        DrawerStyles={{
          backgroundColor: currentTab === 'Setting' ? '#98e3de' : 'transparent',
        }}
      />
      {/* <TouchableOpacity
        style={styles.Touchable}
        onPress={() => props.navigation.navigate('Explore')}>
        <Text>Explore</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Touchable}
        onPress={() => props.navigation.navigate('Setting')}>
        <Text>Setting</Text>
      </TouchableOpacity> */}
      {/* <DrawerItem
        label={Home}
        onPress={() => props.navigation.navigate('Home')}
      />
      <DrawerItem
        label={Profile}
        onPress={() => props.navigation.navigate('Profile')}
      />
      <DrawerItem
        label={Search}
        onPress={() => props.navigation.navigate('Search')}
      />
      <DrawerItem
        label={Explore}
        onPress={() => props.navigation.navigate('Explore')}
      />
      <DrawerItem
        label={Setting}
        onPress={() => props.navigation.navigate('Setting')}
      /> */}

      {/* <DrawerItemList {...props} /> */}
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  Image: {
    width: 20,
    height: 20,
    margin: 10,
  },
  Touchable: {
    width: '60%',
    backgroundColor: '#f8fc7c',
    padding: 10,
  },
});
