import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";

import './index.css';

import App from './App';
import { store } from './redux/store';

render(
  <Router>
    <Provider store={store}>
        <App />
    </Provider>
    </Router>,
    document.getElementById('root')
);