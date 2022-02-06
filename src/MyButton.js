import React from 'react';
import { TouchableOpacity, View, Text, Alert } from 'react-native';
import PropTypes from 'prop-types';

const MyButton = ({ title, onPress, children }) => {
  return (
    <TouchableOpacity
      onPress={() => console.log('press')}
      onPressIn={() => console.log('pressIn')}
      onPressOut={() => console.log('pressOut')}
      onLongPress={() => console.log('Long')}
      delayLongPress={3000}
    >
      <View style={{ backgroundColor: 'green', padding: 10, margin: 10 }}>
        <Text style={{ fontSize: 20, color: 'white' }}>
          {children || title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

MyButton.defaultProps = {
  title: 'default',
  onPress: () => Alert.alert('default'),
};

// MyButton.PropTypes = {
//   title: PropTypes.string.isRequired, // 반드시 string 이여야 하며 데이터가 항상 있어야 한다.
//   onPress: PropTypes.func,
// };

export default MyButton;
