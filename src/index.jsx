import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import { createStore } from 'redux'
import chat from "./reducers"

import './index.css';

const store = createStore(chat)

render(
  <Router>
    <Provider store={store}>
        <App />
    </Provider>
    </Router>,
    document.getElementById('root')
);