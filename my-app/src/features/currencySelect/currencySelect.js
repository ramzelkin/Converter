import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './currencySelect.module.css';
import { selectFromCurrency, selectToCurrency, getCurrency } from './currencySelectSlice';

export function CurrencySelect() {
  const dispatch = useDispatch();
  const items = useSelector(getCurrency);

  return (
    <div className={styles.row}>
      <div>
        <span>From</span>
        <select onChange={(e) => dispatch(selectFromCurrency(e.target.value))}>
            {items.map((item) =>
                <option id={item} key={item}>{item}</option>
            )}
        </select>
      </div>
      <div>
        <span>To</span>
        <select onChange={(e) => dispatch(selectToCurrency(e.target.value))}>
            {items.map((item) =>
                <option id={item} key={item}>{item}</option>
            )}
        </select>
      </div>
    </div>
  );
}
