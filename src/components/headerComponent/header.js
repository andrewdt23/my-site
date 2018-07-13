import React, { Component } from 'react';
import{
    Link
}from 'react-router-dom';
import { Navbar } from 'react-bootstrap'

class Header extends Component {
  render() {
    return (
      <header>

      <Navbar>
        <div className="container-fluid">
                <ul className="nav navbar-nav">
                    <li className = "first">
                        <Link to = "/">Home</Link>
                    </li>
                    <li>
                        <Link to = "/Photography">Photography</Link>
                    </li>
                    <li className = "last">
                        <Link to = "/Contact">Contact</Link>
                    </li>
                </ul>
        </div>
        </Navbar>

      </header>
    );
  }
}

export default Header;
