import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrency, getCurrency, fetchCurrencyAsync } from './currencySelectSlice';

export function CurrencySelect() {
  const dispatch = useDispatch();
  const items = useSelector(getCurrency);

  console.log(items);
  fetchCurrencyAsync();
  return (
    <div>
      <div>
        <select >
            options={items.map((item) =>
                <option id={item["currency_code"]} key={item["currency_code"]}>{item.name}</option>
            )}
            onChange={(e) => dispatch(selectCurrency(e.target.value))}
        </select>
      </div>
    </div>
  );
}
