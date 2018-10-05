import {combineReducers} from 'redux';

import currentUser from './User';
import products from './Products';

export default combineReducers({
    currentUser,
    products,
});