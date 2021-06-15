import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { convert, selectInput, selectOutput } from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const dispatch = useDispatch();
  const input = useSelector(selectInput);
  const output = useSelector(selectOutput);

  return (
    <div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set value"
          value={input}
          onChange={(e) => dispatch(convert(e.target.value))}
        />
        <input className={styles.textbox}
        value={output}
        />
      </div>
    </div>
  );
}
