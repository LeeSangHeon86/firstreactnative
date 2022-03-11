
import React from 'react';
import styled from 'styled-components/native';
import User from './components/User';
import { UserProvider } from './contexts/User';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.main};
  width: 100%;
  align-items: flex-end;
  padding: 0 20px;
`;

const List = styled.ScrollView`
  flex: 1;
  width: ${({ width }) => width - 40}px;
`;

const LoadingText = styled.Text`
  font-size: 30px;
  color: red;
`;

export default function App() {

  const URL = 'https://api.coinlore.net/api/tickers/?limit=3';
  const { data, error, inProgress } = useFetch(URL);
  console.log(data['data']);

  return (
    <UserProvider>
      <Container>
        <User />
      </Container>
    </UserProvider>
  );
}
