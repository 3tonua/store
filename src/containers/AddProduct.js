import React from 'react';
import {connect} from 'react-redux';

import AddProduct from '../components/AddProduct';
import {fetchProducts, addProduct} from "../actions/products";

const mapStateToProps = state => ({
    products: state.products.products,
    isAdmin: state.currentUser.currentUser === 'admin',
});

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts()),
    addProduct: data => dispatch(addProduct(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);