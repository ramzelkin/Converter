import React from 'react';
import { Counter } from './features/counter/Counter';
import { CurrencySelect } from './features/currencySelect/currencySelect';
import './App.css';

function App() {
  return (
    <div className="App">
        <CurrencySelect />
        <Counter />
    </div>
  );
}

export default App;
