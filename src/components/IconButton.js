import react, { useState } from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, View } from 'react-native';
import propTypes from 'prop-types';
import { icons } from './icons';

const Icon = styled.Image`
  width: 30px;
  height: 30px;
  margin: 10px;
  tint-color: ${({ theme }) => theme.text};
`;

const IconButton = ({ icon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Icon source={icon}></Icon>
      </View>
    </TouchableOpacity>
  );
};

IconButton.proptype = {
  icon: propTypes.oneOf(Object.values(icons)).isRequired,
  onPress: propTypes.func,
};

export default IconButton;
