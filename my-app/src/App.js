import React from 'react';
import { Counter } from './features/counter/Counter';
import { CurrencySelect } from './features/currencySelect/currencySelect';
import { ResultButton } from './features/resultButton/resultButton';
import './App.css';

function App() {
  return (
    <div className="App">
        <CurrencySelect />
        <Counter />
        <ResultButton />
    </div>
  );
}

export default App;
