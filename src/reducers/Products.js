import {combineReducers} from 'redux';
import {SET_PRODUCTS, ADD_PRODUCT_OPEN_MODAL} from "../constants";

function products(state = [], action) {
    switch (action.type) {
        case SET_PRODUCTS: {
            state = action.payload;
            break;
        }
    }
    return state;
}

function openModal(state = false, action) {
    switch (action.type) {
        case ADD_PRODUCT_OPEN_MODAL: {
            state = action.payload;
            break;
        }
    }
    return state;
}

export default combineReducers({
    products,
    openModal,
})