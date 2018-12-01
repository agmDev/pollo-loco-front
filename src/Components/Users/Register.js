import React, { Component } from 'react';
import {
  Button, FormGroup, FormControl, ControlLabel,
} from 'react-bootstrap';
import * as Api from '../../actions/Api';
import './Login.css';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      pass: '',
      validPass: '',
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
      const ret = await Api.post('subscription', param);
      if (ret !== false) {
        userHasAuthenticated(true, user);
        history.push('/');
      }
    } catch (e) {
      //  alert(e.message);
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  validateForm() {
    const { validPass, user, pass } = this.state;
    return user.length > 0 && pass.length > 0 && validPass.length > 0 && (pass === validPass);
  }

  render() {
    const { validPass, user, pass } = this.state;
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
          <FormGroup controlId="validPass" bsSize="large">
            <ControlLabel>Validate Password</ControlLabel>
            <FormControl
              value={validPass}
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
