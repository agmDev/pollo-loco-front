
import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { PropTypes } from 'prop-types';
import Routes from './Routes';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      IsAuth: false,
    };
  }

  userHasAuthenticated(authenticated) {
    this.setState({ IsAuth: authenticated });
  }

  handleLogout() {
    const { history } = this.props;
    // await Auth.signOut();
    this.userHasAuthenticated(false);
    history.push('/login');
  }

  render() {
    const { IsAuth } = this.state;
    const childProps = {
      isAuthenticated: IsAuth,
      userHasAuthenticated: this.userHasAuthenticated,
    };

    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Pollo Loco</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              {IsAuth
                ? <NavItem onClick={this.handleLogout}>Logout</NavItem>
                : (
                  <Fragment>
                    <LinkContainer to="/signup">
                      <NavItem>Signup</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/login">
                      <NavItem>Login</NavItem>
                    </LinkContainer>
                  </Fragment>
                )
            }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes childProps={childProps} />
      </div>
    );
  }
}

App.propTypes = {
  history: PropTypes.arrayOf(
    String,
  ).isRequired,
};

export default withRouter(App);
