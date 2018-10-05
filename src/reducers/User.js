import {combineReducers} from 'redux';
import {CURRENT_USER} from "../constants";

function currentUser(state = '', action) {
    switch (action.type) {
        case CURRENT_USER:
            state = action.payload;
            break;
    }
    return state;
}

export default combineReducers({
    currentUser,
});