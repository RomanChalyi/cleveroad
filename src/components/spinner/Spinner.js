import React from 'react';
import { spinner, spinnerBackground } from './spinner.module.scss';

const Spinner = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }
  return (
    <div className={spinner}>
      <div className={spinnerBackground}></div>
    </div>
  );
};

export default Spinner;
