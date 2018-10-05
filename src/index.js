import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter, HashRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

import App from './app';

let store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);