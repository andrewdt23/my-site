import React, { Component } from 'react';
import{
    Link
}from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

class FooterTwo extends Component {
  render() {
    return (
      <footer>

      <Navbar className="footer" fluid staticBottom>
        <Navbar.Header>
            <Navbar.Collapse>
                <Navbar.Brand>
                <i class="far fa-copyright"></i>
                2018 Andrew Thompson
                </Navbar.Brand>
            </Navbar.Collapse>
        </Navbar.Header>
        <Nav className="header-nav" pullRight>
            <NavItem className="github" href="https://github.com/andrewdt23/my-site">
             Check out the Github repo for this site
             </NavItem>
        </Nav>
      </Navbar>

      </footer>
    );
  }
}

export default FooterTwo;
