import React from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import Table from './components/Table';

function App() {
    const appHeader = 'Привет react';
    const fakeJson = [
        { name: 'Vanya', age: '28', date: '13.04', car: 'yes' },
        { name: 'Pasha', age: '32', date: '07.09', car: 'no' },
        { name: 'Leha', age: '41', date: '27.08', car: 'no' },
        { name: 'Vitya', age: '13', date: '11.01', car: 'yes' },
    ];

    return (
        <div className="App">
            <AppHeader value={appHeader} />
            <Table value={fakeJson} />
        </div>
    );
}

export default App;
