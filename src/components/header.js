import React from 'react';
import logo from '../assets/logo.png'
import pixel from '../assets/pixel.png'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import '../style/header.css';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <div style={{backgroundImage: `url(${pixel})`, backgroundSize: "64px"}} className="header-pixels">
          <img style={{height:"64px"}} src={logo} alt="Logo" className="header-logo"/>
        </div>
        <Navbar
          color="warning"
          dark
          expand="sm"
        >
          <NavbarBrand href="/" className="navbar-brand-dark">MEDLEMSSYSTEM</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/overview/" className="navbar-link-dark">Oversigt</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/logout" className="navbar-link-style">Log Ud</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
