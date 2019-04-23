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
        <div style={{backgroundImage: `url(${pixel})`, backgroundSize: "64px"}}>
          <img style={{height:"64px"}} src={logo} alt="Logo"/>
        </div>
        <Navbar
          color="warning"
          dark
          expand="sm"
        >
          <NavbarBrand href="/">Medlemssystem</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/overview/">Oversigt</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/logout">Log Ud</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
