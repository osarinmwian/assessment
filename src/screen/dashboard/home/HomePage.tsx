import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

const HomePage: React.FC = () => {
  const [idData, setIddata] = useState<string | undefined>(undefined);

  const post = async () => {
    try {
      if (!idData) {
        Alert.alert('ID data not found')
        return;
      }

      const response = await axios.post(`https://jsonplaceholder.typicode.com/posts/${idData}`);
      console.log('Post successful', response.data);
    } catch (error) {
      console.error('Error posting data', error);
      Alert.alert('Error posting data')
    }
  };

  return (
    <SafeAreaView>
      <Text>LANDING</Text>
      <TextInput
        value={idData}
        onChangeText={(val: string) => setIddata(val)}
        placeholder="Enter ID"
      />
      <TouchableOpacity onPress={post} style={styles.button}>
        <Text style={styles.buttonText}>CLICK</Text>
      </TouchableOpacity>
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
