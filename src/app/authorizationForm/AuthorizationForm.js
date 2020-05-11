import React, { useState } from 'react';
import { connect } from 'react-redux';
import Input from '../../components/input/Input';
import { userSignUp, userSignIn } from '../action';
import { form, inputGroup } from './authorizationForm.module.scss';
import { Typography, Button, Container } from '@material-ui/core';

const AuthorizationForm = ({ isSignIn, userSignIn, userSignUp, history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleClearEmail = (e) => setEmail('');

  const handleChangePassword = (e) => setPassword(e.target.value);
  const handleClearPassword = (e) => setPassword('');

  const handleClick = (e) =>
    isSignIn ? userSignIn(email, password, history) : userSignUp(email, password);

  return (
    <Container className="content padding">
      <Container maxWidth="md" className={form}>
        <Typography variant="h4" align="center">
          Login Form
        </Typography>
        <div className={inputGroup}>
          <Input
            name="email"
            placeholder="Email:"
            type="text"
            value={email}
            onChange={handleChangeEmail}
            clearInput={handleClearEmail}
          />
          <Input
            name="password"
            placeholder="Password:"
            type="password"
            value={password}
            onChange={handleChangePassword}
            clearInput={handleClearPassword}
          />
        </div>
        <Button onClick={handleClick} size="large" variant="outlined" color="inherit">
          {isSignIn ? 'Sing in' : 'Sing up'}
        </Button>
      </Container>
    </Container>
  );
};

const mapStateToProps = (state) => ({ user: state.statuses.user });
const mapDispatchToProps = { userSignUp, userSignIn };

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationForm);
