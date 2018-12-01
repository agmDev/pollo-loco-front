import React, { Component } from 'react';
import {
  Button, FormGroup, FormControl, ControlLabel,
} from 'react-bootstrap';
import * as Api from '../../actions/Api';
import './Login.css';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      pass: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { userHasAuthenticated, history } = this.props;
    const { user, pass } = this.state;
    try {
      const param = {
        username: user,
        password: pass,
      };
      const ret = await Api.post('login', param);
      if (ret !== false) {
        userHasAuthenticated(true, user);
        history.push('/');
      }
    } catch (e) {
      //  console.log(e.message);
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  validateForm() {
    const { user, pass } = this.state;
    return user.length > 0 && pass.length > 0;
  }

  render() {
    const { user, pass } = this.state;
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="user" bsSize="large">
            <ControlLabel>Username</ControlLabel>
            <FormControl
              autoFocus
              type="user"
              value={user}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="pass" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={pass}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}
