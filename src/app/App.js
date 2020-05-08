import React from 'react';
import { connect } from 'react-redux';
import Router from './Router';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Spinner from '../components/spinner/Spinner';
import { loadingStart } from './action';

function App({ isLoading, isAuthorization }) {
  return (
    <>
      <Header isAuthorization={isAuthorization} />
      <Router />
      <Spinner isLoading={isLoading} />
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({
  isLoading: state.statuses.isLoading,
  isAuthorization: state.statuses.isAuthorization,
});
const mapDispatchToProps = { loadingStart };

export default connect(mapStateToProps, mapDispatchToProps)(App);
