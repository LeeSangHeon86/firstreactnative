import react, { useState } from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, View } from 'react-native';
import propTypes from 'prop-types';
import { icons } from './icons';

const Icon = styled.Image`
  width: 30px;
  height: 30px;
  margin: 10px;
  tint-color: ${({ theme, completed }) =>
    completed ? theme.done : theme.text};
`;

const IconButton = ({ icon, onPress, item }) => {
  const _onPress = () => {
    onPress(item.id);
  };

  return (
    <TouchableOpacity onPress={_onPress}>
      <View>
        <Icon source={icon} completed={item.completed}></Icon>
      </View>
    </TouchableOpacity>
  );
};

IconButton.proptype = {
  icon: propTypes.oneOf(Object.values(icons)).isRequired,
  onPress: propTypes.func,
  item: propTypes.object,
};

// edit IconButton 의 경우 item props가 전달되지 않기에 추가
IconButton.defaultProps = {
  item: { completed: false },
};

export default IconButton;
