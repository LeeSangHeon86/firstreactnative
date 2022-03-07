import react, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';
import CoinInfo from './components/CoinInfo';
import { useFetch } from './hooks/useFetch';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
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
    <ThemeProvider theme={theme}>
      <Container>
        {inProgress && <LoadingText>Loading...</LoadingText>}
        {data['data'].map(({ symbol, name, price_usd }) => {
          return (
            <CoinInfo
              key={symbol}
              symbol={symbol}
              name={name}
              price={price_usd}
            />
          );
        })}
      </Container>
    </ThemeProvider>
  );
}
