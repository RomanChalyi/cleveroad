import React from 'react';
import { Box, CircularProgress } from '@material-ui/core';
import { spinner } from './spinner.module.scss';

const Spinner = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }

  return (
    <Box className={spinner}>
      <CircularProgress />
    </Box>
  );
};

export default Spinner;
