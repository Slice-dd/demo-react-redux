import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import RouterConfig from './Router/Route'
import store from './store/index';

ReactDOM.render(
    <Provider store={store}>
        { RouterConfig }
    </Provider>,
    document.getElementById('root')
);