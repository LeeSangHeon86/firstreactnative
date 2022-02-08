import react, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import { styles, orangeText } from './style';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, orangeText]}>Open up App.js</Text>
      <Text style={[styles.text, styles.error]}>Error Text</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     backgroundColor: 'black',
//     color: 'white',
//     fontSize: 20,
//   },
//   error: {
//     backgroundColor: 'pink',
//     color: 'red',
//     fontSize: 20,
//   },
// });
