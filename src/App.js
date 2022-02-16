import react, { useState } from 'react';
import { Text, StatusBar, Dimensions, useWindowDimensions } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';
import Input from './components/Input';
import Task from './components/Task';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
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

export default function App() {
  const [newTask, setNewTask] = useState('');
  // const width = useWindowDimensions().width;
  const width = Dimensions.get('window').width;

  const tempData = {
    1: { id: '1', text: 'react native', completed: false },
    2: { id: '2', text: 'expo', completed: true },
    3: { id: '3', text: 'javascript', completed: false },
  };

  const [tasks, setTasks] = useState(tempData);

  const addTask = () => {
    // 빈 문자열 방지
    if (newTask.length < 1) {
      return;
    }

    // 현재 시간대로 ID 설정
    const ID = Date.now().toString();

    // 새로운 task 객체 생성
    const newTaskObject = {
      [ID]: { id: ID, text: newTask, completed: false },
    };

    // 기존 tasks 에 새로운 task 추가
    setTasks({ ...tasks, ...newTaskObject });

    alert('새로운 할일이 추가되었습니다.');
    setNewTask('');
  };

  const deleteTask = id => {
    const currentTasks = Object.assign({}, tasks);
    delete currentTasks[id];
    setTasks(currentTasks);
  };

  const toggleTask = id => {
    const currentTasks = Object.assign({}, tasks);
    currentTasks[id].completed = !currentTasks[id].completed;
    setTasks(currentTasks);
  };

  const updateTask = item => {
    const currentTasks = Object.assign({}, tasks);
    currentTasks[item.id] = item;
    setTasks(currentTasks);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar
          backgroundColor={theme.background}
          barStyle="light-content"
        />
        <Title>ToDo List</Title>
        <Input
          placeholder="+ Add a Task"
          value={newTask}
          onChangeText={text => setNewTask(text)}
          onSubmitEditing={addTask}
          onBlur={() => setNewTask('')}
        ></Input>
        <List width={width}>
          {Object.values(tasks)
            .reverse()
            .map(item => {
              return (
                <Task
                  key={item.id}
                  item={item}
                  deleteTask={deleteTask}
                  toggleTask={toggleTask}
                  updateTask={updateTask}
                />
              );
            })}
        </List>
      </Container>
    </ThemeProvider>
  );
}
