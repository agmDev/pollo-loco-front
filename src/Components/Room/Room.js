import { Sidebar } from "../../Containers/Sidebar"
import { MessagesList } from "../../Containers/MessagesList"
import { AddMessage } from "../../Containers/AddMessage"
import React, { Component } from "react";
import {Grid, Row, Col} from "react-bootstrap";
import "./Room.css";

export default class Room extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col md={12} mdPull={12} className="show-grid">
                            <div>
                                <Sidebar />
                            </div>
                        </Col>
                    </Row>

                    <Row className="show-grid">
                        <Col md={6} mdPull={6} className="show-grid">
                            ma super animation
                        </Col>
                        <Col md={6} mdPull={6} className="show-grid">
                            <MessagesList />
                            <AddMessage />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}