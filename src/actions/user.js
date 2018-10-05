import {CURRENT_USER} from '../constants';

export const logIn = userType => dispatch => {
    sessionStorage.setItem('userType', userType);
    const currentUser = sessionStorage.getItem('userType');
    return dispatch({type: CURRENT_USER, payload: currentUser});
};

export const getCurrentUser = () => dispatch => {
    const currentUser = sessionStorage.getItem('userType');
    return dispatch({type: CURRENT_USER, payload: currentUser});
};