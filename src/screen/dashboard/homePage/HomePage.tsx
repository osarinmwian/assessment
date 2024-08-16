import { NavigationProp, useNavigation } from '@react-navigation/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { RouteParmaList } from '@/shared/navigations/paramsList/paramsList';

const HomePage: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RouteParmaList, 'HomePage'>>();
  const [fetchData, setFetchData] = useState<any[]>([]);

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
    <SafeAreaView style={{ marginTop: 10, marginHorizontal: 10 }}>
      <Text>DETAILS</Text>
      <FlatList
        data={fetchData}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }: { item: any }) => (
          <View style={{ marginHorizontal: 10 }}>
            <TouchableOpacity onPress={() => navigation.navigate("DetailPage", {
              id: item.id
            })}>
              <Text style={{ marginVertical: 10 }}>Title</Text>
              <Text>{item.id}</Text>
              <Text>{item.title}</Text>
              <Text>Body</Text>
              <Text>{item.body}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});