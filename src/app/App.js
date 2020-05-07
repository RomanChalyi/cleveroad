import React from 'react';
import { connect } from 'react-redux';
import Router from './Router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { loadingStart } from './action';

function App({ isLoading }) {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({
  isLoading: state,
});
const mapDispatchToProps = { loadingStart };

export default connect()(App);
