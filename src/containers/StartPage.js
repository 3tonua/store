import React from 'react';
import {connect} from 'react-redux';
import {logIn} from "../actions/user";

import StartPage from '../components/StartPage';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    logIn: (userType) => dispatch(logIn(userType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);