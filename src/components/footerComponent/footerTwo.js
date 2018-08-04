import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap'

class FooterTwo extends Component {
    render() {
        return (<footer className="footer-wrapper">

            <Navbar className="footer" fluid="fluid" staticBottom="staticBottom">
                <Navbar.Header>
                    <Navbar.Collapse>
                        <Navbar.Brand>
                            <i class="far fa-copyright"></i>
                            2018 Andrew Thompson
                        </Navbar.Brand>
                    </Navbar.Collapse>
                </Navbar.Header>
                <Nav className="footer-nav" pullRight="pullRight">
                    <NavItem className="github" href="https://github.com/andrewdt23/my-site">
                        Check out the Github repo for this site
                    </NavItem>
                </Nav>
            </Navbar>
        </footer>);
    }
}

export default FooterTwo;
