import 'materialize-css/dist/css/materialize.min.css'
import React from 'react';
import reactDom from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduuxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {} ,applyMiddleware(reduuxThunk))

reactDom.render(
    <Provider store = {store}><App/></Provider>, 
    document.querySelector('#root')
);