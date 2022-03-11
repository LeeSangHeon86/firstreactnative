import react from 'react';
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components/native';
import Button from './Button';

const StyledInput = styled.TextInput`
  border: 1px solid #111111;
  padding: 10px;
  margin: 10px 0;
  width: 200px;
  font-size: 24px;
`;

const StyledText = styled.Text`
  font-size: 24px;
  margin: 10px;
`;

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const refName = useRef(null);
  const refEmail = useRef(null);

  useEffect(() => {
    console.log('mount');
    refName.current.focus();
    return console.log('unmount');
  }, []);

  // useEffect(() => {
  //   console.log(`name: ${name}, email: ${email}`);
  // }, [email]);

  const onSubmit = () => console.log('submit');

  return (
    <>
      <StyledText>Name : {name}</StyledText>
      <StyledText>Email : {email}</StyledText>
      <StyledInput
        value={name}
        onChangeText={text => setName(text)}
        placeholer="name"
        ref={refName}
        returnKeyType="next"
        onSubmitEditing={() => refEmail.current.focus()}
      />
      <StyledInput
        value={email}
        onChangeText={text => setEmail(text)}
        placeholer="email"
        ref={refEmail}
        returnKeyType="done"
        onSubmitEditing={onSubmit}
      />
    </>
  );
};

export default Form;
