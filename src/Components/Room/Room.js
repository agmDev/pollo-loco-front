import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { createStore, applyMiddleware } from 'redux';
import { PropTypes } from 'prop-types';
import createSagaMiddleware from 'redux-saga';
import AddMessage from '../../Containers/AddMessage';
import MessagesList from '../../Containers/MessagesList';
import Sidebar from '../../Containers/Sidebar';


import setupSocket from '../../Sockets';
import reducers from '../../reducers';
import handleNewMessage from '../../Sagas';

import './Room.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
let socket = null;

export default class Room extends Component {
  componentDidMount() {
    const { isAuthenticated, history, username } = this.props;
    if (isAuthenticated !== true) {
      history.push('/');
    }
    socket = setupSocket(store.dispatch, username);
    sagaMiddleware.run(handleNewMessage, { socket, username });
  }

  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col md={12} mdPull={12} className="show-grid">
              <div>
                <Sidebar store={store} />
              </div>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col md={6} mdPull={6} className="show-grid" />
            <Col md={6} mdPull={6} className="show-grid">
              <MessagesList store={store} />
              <AddMessage store={store} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

Room.propTypes = {
  history: PropTypes.objectOf(
    Object,
  ).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
};
