import React from 'react';
import { TouchableOpacity, View, Text, Alert } from 'react-native';

const MyButton = () => {
  return (
    <TouchableOpacity onPress={() => Alert.alert('button click')}>
      <View style={{ backgroundColor: 'green', padding: 10 }}>
        <Text style={{ fontSize: 20, color: 'white' }}>MyButton</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MyButton;
