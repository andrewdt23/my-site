import React, { Component } from 'react';
import{
    Link
}from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <header>

      <Navbar className="header" collapseOnSelect fluid >
        <Navbar.Header>
            <Navbar.Brand>
                <Link to = "/">Andrew Thompson</Link>
            </Navbar.Brand>
        <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse className="collapse-toggle">
            <Nav className="header-nav" pullRight>
                <NavItem className="header-item">
                    <Link className='header-link' to = "/">Home</Link>
                </NavItem>
                <NavItem className="header-item">
                    <Link className='header-link' to = "/Projects">Projects</Link>
                </NavItem>
                <NavItem className="header-item">
                    <Link className='header-link' to = "/Photography">Photography</Link>
                </NavItem>
                <NavItem className="header-item">
                    <Link className='header-link' to = "/Videos">Videos</Link>
                </NavItem>
                <NavItem className="header-item">
                    <Link className='header-link' to = "/Contact">Contact</Link>
                </NavItem>
            </Nav>
          </Navbar.Collapse>
      </Navbar>

      </header>
    );
  }
}

export default Header;
