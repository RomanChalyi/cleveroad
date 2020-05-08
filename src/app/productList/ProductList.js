import React from 'react';
import { connect } from 'react-redux';

const ProductList = ({}) => {
  return <div className="content">ProductList</div>;
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
