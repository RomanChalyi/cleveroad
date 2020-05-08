import React from 'react';
import { input, inputButton, label } from './input.module.scss';

const Input = ({ name, placeholder, type, value, onChange, clearInput }) => {
  return (
    <label htmlFor={name} className={label}>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        minLength="4"
        maxLength="30"
        value={value}
        onChange={onChange}
        className={input}
      />
      {value && <input onClick={clearInput} className={inputButton} type="reset" value="" />}
    </label>
  );
};

export default Input;
