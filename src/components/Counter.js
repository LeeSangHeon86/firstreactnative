import react from 'react';
import { useState } from 'react';
import styled from 'styled-components/native';
import Button from './Button';

const StyledText = styled.Text`
  font-size: 24px;
  margin: 10px;
`;

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <StyledText> count : {count}</StyledText>
      {/* <Button title="+" onPress={() => setCount(count + 1)}></Button> */}
      <Button
        title="+"
        onPress={() => {
          setCount(count => {
            console.log('prev 1', count); // 0
            return count + 1;
          });
          setCount(count => {
            console.log('prev 2', count); // 1
            return count + 1; // 함수 종료시 count 는 2
          });
          console.log(count); // 0
        }}
      ></Button>
      <Button title="-" onPress={() => setCount(count - 1)}></Button>
    </>
  );
};

export default Counter;
