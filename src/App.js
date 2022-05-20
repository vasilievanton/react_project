import React from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import UsersForm from './components/UsersForm';
import UsersTable from './components/UsersTable';

const appHeader = 'Привет react';

function App() {
  return (
    <div className="App">
      <AppHeader value={appHeader} />
      <UsersTable />
      <UsersForm />
    </div>
  );
}

export default App;
