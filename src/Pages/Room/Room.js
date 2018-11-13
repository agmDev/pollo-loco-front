import MessageList from "./MessageList";
import SendForm from "./SendForm"
import React, { Component } from "react";
import Chatkit from "@pusher/chatkit";
import {Grid, Row, Col} from "react-bootstrap";
import "./Room.css";

const instanceLocator = "v1:us1:bc018369-37f6-43dc-b83d-416274255b11"
const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/bc018369-37f6-43dc-b83d-416274255b11/token"
const username = "charles"
const roomId = 19372796

export default class Room extends Component {
    constructor() {

        super();
        this.state = {
            users: [],
            messages: [],
            currentUser: [],
        }
        this.currentUser= [];
        this.sendMessage = this.sendMessage.bind(this);
    };
    async componentDidMount() {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator: instanceLocator,
            userId: username,
            tokenProvider: new Chatkit.TokenProvider({
              url: testToken
            })
        })
        this.currentUser = await chatManager.connect();
        this.currentUser.subscribeToRoom({
            roomId: roomId,
            hooks: {
                onNewMessage: message => {
                    this.setState({
                        messages: [...this.state.messages, message]
                    })
                }
            }
        });
        const responce = await fetch('https://randomuser.me/api/?results=10');
        const json = await responce.json();
        this.setState({ users: json.results});
    }

    sendMessage(text) {
        this.currentUser.sendMessage({
            text,
            roomId: roomId
        })
    }

    render() {
        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col md={12} mdPull={12} className="show-grid">
                            <div>
                                <ul className="roomUserContainer">
                                    {this.state.users.map(el => (
                                        <li className="roomUserItem" key={el.login.username}>
                                            <img src={el.picture.thumbnail} alt={el.login.username} />
                                            <p>{el.login.username}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                    </Row>

                    <Row className="show-grid">
                        <Col md={6} mdPull={6} className="show-grid">
                            azeazeaze
                        </Col>
                        <Col md={6} mdPull={6} className="show-grid">
                            <MessageList messages={this.state.messages} users={this.state.users} />
                            <SendForm sendMessage={this.sendMessage}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}