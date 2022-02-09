import react, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import styled, { css } from 'styled-components/native';
import Input from './Input';

// styled-components 사용
const Container = styled.View`
  flex: 1;
  background-color: #e3e3e3;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <Container>
      <StatusBar style="auto" />
      <Input />
    </Container>
  );
}
