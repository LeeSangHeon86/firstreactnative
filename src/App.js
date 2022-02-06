import react, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import MyButton from './MyButton';

export default function App() {
  const [add, setAdd] = useState(0);
  const [multi, setMulti] = useState(1);

  return (
    <View style={styles.container}>
      <TextInput
        // onChange={event => console.log(event.nativeEvent)}
        onChangeText={text => console.log(text)}
        style={{ borderWidth: 1, borderColor: 'black', fontSize: 20 }}
      ></TextInput>
      {/* <Text style={{ fontSize: 20 }}>{add}</Text>
      <Text style={{ fontSize: 20 }}>{multi}</Text>
      <MyButton
        title="Add"
        onPress={() => {
          setAdd(add + 2);
        }}
      />
      <MyButton
        title="Multi"
        onPress={() => {
          setMulti(multi * 2);
        }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
