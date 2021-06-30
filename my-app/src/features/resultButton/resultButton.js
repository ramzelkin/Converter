import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCurrencyRateAsync } from './resultButtonSlice';
import { getFromCurrency, getToCurrency } from '../currencySelect/currencySelectSlice';
import styles from './resultButton.module.css';

export function ResultButton() {
  const dispatch = useDispatch();
  const fromCurrency = useSelector(getFromCurrency);
  const toCurrency = useSelector(getToCurrency);

  return (
    <div>
      <div className={styles.row}>
        <button onClick={() => dispatch(fetchCurrencyRateAsync({ from: fromCurrency, to: toCurrency }))}>Convert</button>
      </div>
    </div>
  );
}
