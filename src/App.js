import React from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import Table from './components/Table';

const appHeader = 'Привет react';

const data = [
    { id: 2123534253213, name: 'Vanya', age: '28', date: '13.04', car: 'yes' },
    { id: 8767564356446, name: 'Pasha', age: '32', date: '07.09', car: 'no' },
    { id: 5465786745645, name: 'Leha', age: '41', date: '27.08', car: 'no' },
    { id: 4734878748546, name: 'Vitya', age: '13', date: '11.01', car: 'yes' },
];

function App() {
    return (
        <div className="App">
            <AppHeader value={appHeader} />
            <Table value={data} />
        </div>
    );
}

export default App;
