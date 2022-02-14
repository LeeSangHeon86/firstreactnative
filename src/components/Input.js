import react from 'react';
import styled from 'styled-components/native';
import { Dimensions, useWindowDimensions } from 'react-native';
import { useState } from 'react';
import PropTypes from 'prop-types';

const StyledInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.main,
}))`
  width: 100%;
  width: ${({ width }) => width - 40}px;
  height: 60px;
  margin: 3px 0;
  padding: 15px 20px;
  border-radius: 10px;
  font-size: 25px;
  background-color: ${({ theme }) => theme.itemBackground};
`;

const Input = ({ placeholder, value, onChangeText, onSubmitEditing }) => {
  // const width = Dimensions.get('window').width;
  const width = useWindowDimensions().width;
  return (
    <StyledInput
      width={width}
      placeholder={placeholder}
      maxLength={50}
      autoCapitalize="none" // 자동 대문자 기능
      autoCorrect={false} // 자동 수정 기능
      returnKeyType="done" // 완료(엔터) 버튼에 done 으로 표시
      keyboardAppearance="dark"
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
    ></StyledInput>
  );
};

Input.PropTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func.isRequired,
};

export default Input;
