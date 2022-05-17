import {StyleSheet, Text, View, Button, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Explore = () => {
  useEffect(() => {
    // getApiData();
  }, []);
  const [data, setData] = useState();
  const getApiData = async () => {
    await axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(function (response) {
        console.log('<=>', response.data[0].title, 'apiData');
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const renderItem = ({item}) => {
    console.log(item);
    return <Text>{item.userId}</Text>;
  };

  return (
    <View style={styles.container}>
      <Text>Explore Screen</Text>

      <Button title="get-Data" onPress={getApiData} />
      {/* <Text>{data}</Text> */}
      {data && <FlatList data={data} renderItem={renderItem} />}
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#a3bbe6',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
