import { Sidebar } from "../../Containers/Sidebar"
import { MessagesList } from "../../Containers/MessagesList"
import { AddMessage } from "../../Containers/AddMessage"
import React, { Component } from "react";
import {Grid, Row, Col} from "react-bootstrap";
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import setupSocket from "../../Sockets"
import reducers from "../../reducers"
import handleNewMessage from '../../Sagas'
import username from '../../Utils/name'

import "./Room.css";

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMiddleware))
const socket = setupSocket(store.dispatch, username)
sagaMiddleware.run(handleNewMessage, {socket, username})


export default class Room extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col md={12} mdPull={12} className="show-grid">
                            <div>
                                <Sidebar store={store}/>
                            </div>
                        </Col>
                    </Row>

                    <Row className="show-grid">
                        <Col md={6} mdPull={6} className="show-grid">
                            
                        </Col>
                        <Col md={6} mdPull={6} className="show-grid">
                            <MessagesList store={store}/>
                            <AddMessage store={store} />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}