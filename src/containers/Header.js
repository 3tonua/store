import React, {Component} from 'react';
import {connect} from 'react-redux';

import Header from '../components/Header';

import {getCurrentUser} from '../actions/user';

const mapStateToProps = state => ({
    userType: state.currentUser.currentUser,
});

const mapDispatchToProps = dispatch => ({
    getCurrentUser: () => dispatch(getCurrentUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);