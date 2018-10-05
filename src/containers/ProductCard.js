import React, {Component} from 'react';
import {connect} from 'react-redux';

import ProductCard from '../components/ProductCard';
import {deleteProduct} from "../actions/products";

const mapStateToProps = state => ({
    isAdmin: state.currentUser.currentUser === 'admin',
});

const mapDispatchToProps = dispatch => ({
    deleteProduct: id => dispatch(deleteProduct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);