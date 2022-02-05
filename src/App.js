import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import MyButton from './MyButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hi, React Native111</Text>
      <StatusBar style="auto" />
      <Button title="Button" onPress={() => Alert.alert('click, click')} />
      <MyButton />
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
