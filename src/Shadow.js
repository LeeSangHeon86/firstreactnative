import react from 'react';
import { StyleSheet, View, Platform, Text } from 'react-native';

const Shadow = () => {
  return (
    <View style={style.shadow}>
      <Text>{Platform.OS === 'ios' ? 'IOS' : 'ANDROID'}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  shadow: {
    backgroundColor: '#ffffff',
    width: 200,
    height: 200,
    ...Platform.select({
      android: {
        elevation: 20, // android 속성
      },
      ios: {
        shadowColor: '#000000',
        shadowOffset: {
          width: 10,
          height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
      },
    }),
  },
});

export default Shadow;
