import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Input from './input/Input';
import { form, paddingTop, formWrapper, inputGroup, submit } from './authorizationForm.module.scss';

const AuthorizationForm = ({ isAuthorization }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeLogin = (e) => setLogin(e.target.value);
  const handleClearLogin = (e) => setLogin('');
  const handleChangePassword = (e) => setPassword(e.target.value);
  const handleClearPassword = (e) => setPassword('');

  if (isAuthorization) {
    return <Redirect to="/" />;
  }

  const handleSubmit = (e) => false;
  return (
    <div className={`content ${paddingTop}`}>
      <div className={formWrapper}>
        <form className={form}>
          <h2>Login Form</h2>
          <div className={inputGroup}>
            <Input
              name="login"
              placeholder="Login:"
              type="text"
              value={login}
              onChange={handleChangeLogin}
              clearInput={handleClearLogin}
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
          <input
            className={submit}
            type="submit"
            name="submit"
            onSubmit={handleSubmit}
            value="Login"
          />
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ isAuthorization: state.statuses.isAuthorization });
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationForm);
