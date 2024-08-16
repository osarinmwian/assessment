import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';

const DetailPage: React.FC = () => {
  const [fetchData, setFetchData] = useState();
  const fetchPost = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      );

      const data = response.data;
      setFetchData(data);
      return response;
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <SafeAreaView>
      <Text>DETAILS</Text>
      <FlatList
        data={fetchData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default DetailPage;
