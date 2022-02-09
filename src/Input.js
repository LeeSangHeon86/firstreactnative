import react, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import styled from 'styled-components/native';

const StyledInput = styled.TextInput.attrs({
  placeholder: 'Enter a text',
  placeholderTextColor: '#111111',
})`
  padding: 20px;
  font-size: 20px;
  border: 5px solid ${({ text }) => (text ? 'red' : '#111111')};
`;

const Input = () => {
  const [text, setText] = useState('');
  return <StyledInput onChageText={text => setText(text)} text={text} />;
};

export default Input;
