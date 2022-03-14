import react, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';
import Navigation from '../navigations';

const Container = styled.View`
  flex: 1;
  background-color: ${theme.background};
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return <Navigation />;
}
