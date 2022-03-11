import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  width: 100%;
  padding: 10px 20px;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledText = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: black;
`;

const CoinInfo = ({ symbol, name, price }) => {
  return (
    <Container>
      <StyledText>
        {symbol} ({name})
      </StyledText>
      <StyledText> ${price.toLocaleString()}</StyledText>
    </Container>
  );
};

export default CoinInfo;
