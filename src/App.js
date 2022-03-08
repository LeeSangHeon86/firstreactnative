import React from 'react';
import styled from 'styled-components/native';
import User from './components/User';
import { UserProvider } from './contexts/User';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <UserProvider>
      <Container>
        <User />
      </Container>
    </UserProvider>
  );
}
