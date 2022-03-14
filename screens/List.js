import React from 'react';
import styled from 'styled-components/native';
import Button from '../components/Button';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin: 10px;
`;

const items = [
  { id: 1, name: 'react Native' },
  { id: 2, name: 'expo' },
  { id: 3, name: 'react Navigation' },
];

const List = ({ navigation }) => {
  return (
    <Container>
      <StyledText>Home</StyledText>
      {items.map(({ id, name }) => (
        <Button
          key={id}
          title={name}
          onPress={() => {
            navigation.navigate('Chat', { id, name });
          }}
        />
      ))}
    </Container>
  );
};

export default List;
