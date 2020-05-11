import React from 'react';
import { input, inputButton, label } from './input.module.scss';

const Input = ({ name, placeholder, type, value, onChange }) => {
  return (
    <label htmlFor={name} className={label}>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={input}
      />
    </label>
  );
};

export default Input;
