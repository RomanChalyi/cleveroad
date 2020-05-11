import React from 'react';
import { connect } from 'react-redux';
import Router from './Router';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Spinner from '../components/spinner/Spinner';
import ErrorMessage from '../components/ErrorMessage';
import Message from '../components/Message';
import { loadingStart, hideErrorMessage, hideMessage } from './action';
import { content } from './app.module.scss';
import Box from '@material-ui/core/Box';

function App({
  isLoading,
  userEmail,
  isError,
  message,
  hideErrorMessage,
  showMessage,
  hideMessage,
}) {
  return (
    <>
      <Header userEmail={userEmail} />
      <Box className={content}>
        <Router />
      </Box>
      <ErrorMessage isError={isError} message={message} hideErrorMessage={hideErrorMessage} />
      <Message isOpen={showMessage} message={message} hideMessage={hideMessage} />
      <Spinner isLoading={isLoading} />
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({
  isLoading: state.statuses.isLoading,
  userEmail: state.statuses.userEmail,
  isError: state.statuses.isError,
  message: state.statuses.message,
  showMessage: state.statuses.showMessage,
  hideMessage: state.statuses.hideMessage,
});
const mapDispatchToProps = { loadingStart, hideErrorMessage, hideMessage };

export default connect(mapStateToProps, mapDispatchToProps)(App);
