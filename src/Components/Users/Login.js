import React, { Component } from 'react';
import {
  Button, FormGroup, FormControl, ControlLabel,
} from 'react-bootstrap';
import './Login.css';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { userHasAuthenticated, history } = this.props;
    try {
      // await Auth.signIn(this.state.email, this.state.password);
      alert('Logged in');
      userHasAuthenticated(true);
      history.push('/');
    } catch (e) {
      alert(e.message);
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  validateForm() {
    const { email, password } = this.state;
    return email.length > 0 && password.length > 0;
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={password}
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
