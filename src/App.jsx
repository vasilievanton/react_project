import { Container } from '@mui/material';
import React, { useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import UsersForm from './components/UsersForm';
import UsersTable from './components/UsersTable';
import { InputContext } from './Context/Context';

const appHeader = 'Список пользователей';

export const initialInputValue = {
  id: '',
  index: '',
  name: '',
  lastName: '',
  phone: '',
  email: '',
};

function App() {
  const [user, setUser] = useState(initialInputValue);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <Container>
      <AppHeader value={appHeader} />
      <InputContext.Provider value={{ user, setUser, isEdit, setIsEdit }}>
        <UsersTable />
        <UsersForm />
      </InputContext.Provider>
    </Container>
  );
}

export default App;
