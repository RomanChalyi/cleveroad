import React from 'react';
import { Snackbar, SnackbarContent, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const Message = ({ isOpen, message, hideMessage }) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={isOpen}
      onClose={hideMessage}
      autoHideDuration={5000}
    >
      <SnackbarContent
        aria-describedby="client-snackbar"
        message={message}
        action={[
          <IconButton key="close" aria-label="close" color="inherit" onClick={hideMessage}>
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </Snackbar>
  );
};

export default Message;
