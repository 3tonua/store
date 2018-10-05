import React from 'react';
import {BrowserRouter as Router, Route, HashRouter, Switch, Redirect} from "react-router-dom";
import {MuiThemeProvider} from '@material-ui/core/styles';

import StartPage from './containers/StartPage';
import Header from './containers/Header';
import InfoBar from './containers/InfoBar';
import AddProduct from './containers/AddProduct';
import Products from './containers/Products';


const App = () => (
    <div>
        <Header/>
        <Switch>
            <Route exact path='/' component={StartPage}/>
            <Route exact path='/products' component={Products}/>
            <Route path='/add-product' component={AddProduct}/>
            <Redirect to={'/'} />
        </Switch>
        <InfoBar/>
    </div>
);

export default App;