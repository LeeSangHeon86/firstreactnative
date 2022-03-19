import React, { createContext, useState } from 'react';

const UserContext = createContext({
  name: '',
  setName: () => {},
});

const UserProvider = ({ children }) => {
  const [name, setName] = useState('dfasfsf');
  const value = { name, setName };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };

export default UserContext;
