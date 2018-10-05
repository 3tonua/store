import {SET_PRODUCTS} from "../constants";

import {initProducts} from "../constants/products";

export const fetchProducts = () => dispatch => {
    let products = [];
    products = JSON.parse(localStorage.getItem('products'));
    if (products && products.length === 0) {
        products = initProducts;
        localStorage.setItem("products", JSON.stringify(products));
    }
    return dispatch({type: SET_PRODUCTS, payload: products})
};

export const addProduct = data => dispatch => {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(data);
    localStorage.setItem('products', JSON.stringify(products));
    return dispatch({type: SET_PRODUCTS, payload: products})
};

export const deleteProduct = id => dispatch => {
    const products = JSON.parse(localStorage.getItem('products'));
    const newProducts = products.filter(f => f.id !== id);
    localStorage.setItem('products', JSON.stringify(newProducts));
    return dispatch({type: SET_PRODUCTS, payload: newProducts})
};

export const deleteAllProducts = () => dispatch => {
    localStorage.setItem('products', JSON.stringify([]));
    return dispatch({type: SET_PRODUCTS, payload: []})
};