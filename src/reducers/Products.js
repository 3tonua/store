import {combineReducers} from 'redux';
import {SET_PRODUCTS} from "../constants";

function products(state = [], action) {
    switch (action.type) {
        case SET_PRODUCTS: {
            state = action.payload;
            break;
        }
    }
    return state;
}

export default combineReducers({
    products,
})
