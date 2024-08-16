import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RouteParmaList } from '@/shared/navigations/paramsList/paramsList';

const DetailPage: React.FC = () => {
  const route = useRoute<RouteProp<RouteParmaList, 'DetailPage'>>();
  const { id } = route.params;
  const [fetchData, setFetchData] = useState<any | null>(null);

  const fetchPost = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
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
  }, [id]);

  return (
    <SafeAreaView style={{ marginTop: 10, marginHorizontal: 10 }}>
      <Text>DETAILS</Text>
      {fetchData ? (
        <View>
          <Text>User ID: {fetchData.userId}</Text>
          <Text>ID: {fetchData.id}</Text>
          <Text>Title: {fetchData.title}</Text>
          <Text>Body: {fetchData.body}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </SafeAreaView>
  );
};

export default DetailPage;