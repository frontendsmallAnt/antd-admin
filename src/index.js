import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from "./store"
import MyRouter from "./router"
ReactDOM.render(
    <Provider store={store}>
        <MyRouter />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
