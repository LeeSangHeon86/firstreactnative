import React from 'react';
import { useState, useContext } from 'react';
import styled from 'styled-components/native';
import { UserConsumer } from '../contexts/User';

const StyledText = styled.Text`
  font-size: 30px;
  font-weight: 600;
  color: blueviolet;
`;

const StyledInput = styled.TextInput`
  border: 1px solid #111111;
  font-size: 26px;
  padding: 10px;
  width: 100%;
`;

const User = () => {
  const [text, setText] = useState('');

  return (
    <>
      <UserConsumer>
        {({ name }) => <StyledText>Name : {name}</StyledText>}
      </UserConsumer>
      <UserConsumer>
        {({ setName }) => (
          <StyledInput
            value={text}
            onChangeText={setText}
            onSubmitEditing={() => {
              setName(text);
              setText('');
            }}
          ></StyledInput>
        )}
      </UserConsumer>
    </>
  );
};

export default User;
