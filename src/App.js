import react, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';

const Container = styled.View`
  flex: 1;
  background-color: ${theme.background};
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Text>ToDo</Text>
        <StatusBar style="auto" />
      </Container>
    </ThemeProvider>
  );
}
