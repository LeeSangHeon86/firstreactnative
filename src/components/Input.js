import react, { useState } from 'react';
import styled from 'styled-components/native';
import { Dimensions, useWindowDimensions } from 'react-native';
import propTypes from 'prop-types';

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
  color: white;
`;

const Input = ({
  placeholder,
  value,
  onChangeText,
  onSubmitEditing,
  onBlur,
}) => {
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
      keyboardAppearance="dark" // 자판 색상
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing} // 제출 토글시 작동 함수
      onBlur={onBlur}
    ></StyledInput>
  );
};

// props 속성 설정
Input.propTypes = {
  placeholder: propTypes.string,
  value: propTypes.string.isRequired,
  onChangeText: propTypes.func.isRequired,
  onSubmitEditing: propTypes.func.isRequired,
  onBlur: propTypes.func.isRequired,
};

export default Input;
