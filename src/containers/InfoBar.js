import React from 'react';
import {connect} from 'react-redux';
import {deleteAllProducts} from "../actions/products";
import InfoBar from '../components/InfoBar';

const mapStateToProps = state => ({
    products: state.products.products,
    isAdmin: state.currentUser.currentUser === 'admin',
});

const mapDispatchToProps = dispatch => ({
    deleteAllProducts: () => dispatch(deleteAllProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoBar);