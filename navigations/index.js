import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from '../navigations/Stack';

const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
};

export default Navigation;
