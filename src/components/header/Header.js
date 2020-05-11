import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Box, Button, Avatar } from '@material-ui/core';
import { headerLink, linkBox, avatar } from './header.module.scss';

const Header = ({ userEmail }) => {
  const renderButton = userEmail ? (
    <Avatar className={avatar} alt="user">
      {userEmail[0]}
    </Avatar>
  ) : (
    <>
      <Button className={headerLink} component={Link} to="sign_in" variant="text" color="inherit">
        Sign In
      </Button>
      <Button className={headerLink} component={Link} to="sign_up" variant="text" color="inherit">
        Sign Up
      </Button>
    </>
  );
  return (
    <AppBar position="static">
      <Toolbar>
        <Box className={linkBox}>
          <Button className={headerLink} component={Link} to="/" variant="text" color="inherit">
            Home
          </Button>
          {renderButton}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
