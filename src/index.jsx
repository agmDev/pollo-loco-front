import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import reducers from './reducers';


import './index.css';

const st = createStore(reducers);
render(
  <Router>
    <Provider store={st}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
);
