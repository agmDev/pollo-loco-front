import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

import './index.css';


render(
  <Router>
    <Provider>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
);
