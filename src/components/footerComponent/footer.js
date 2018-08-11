import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap'

class Footer extends Component {

    renderFullFooter() {
        return (
            <div className="full-footer">
                <Navbar className="footer" fluid="fluid" fixedBottom="fixedBottom">
                    <Navbar.Header>
                        <Navbar.Collapse>
                            <Navbar.Brand>
                                <i class="far fa-copyright"></i>
                                2018 Andrew Thompson
                            </Navbar.Brand>
                        </Navbar.Collapse>
                    </Navbar.Header>
                    <Nav className="footer-nav" pullRight="pullRight">
                        <NavItem className="github" href="https://github.com/andrewdt23/my-site" target="__blank">
                            Check out the Github repo for this site
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }

    renderMobileFooter() {
        return (
            <div className="mobile-footer">
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
                        <NavItem className="github" href="https://github.com/andrewdt23/my-site" target="__blank">
                            Check out the Github repo for this site
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }

    render() {
        return (<footer className="footer-wrapper">
            {this.renderFullFooter()}
            {this.renderMobileFooter()}
        </footer>);
    }
}

export default Footer;
