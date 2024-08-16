import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';

const DetailPage: React.FC = () => {
  const fetchPost = () => {
    // const response =  axios.
  };
  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <SafeAreaView>
      <Text>PROFILE</Text>
    </SafeAreaView>
  );
};

export default DetailPage;
