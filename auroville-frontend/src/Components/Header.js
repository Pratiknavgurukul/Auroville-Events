import React, { Component } from "react";
import {
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdown
} from "mdbreact";
import { Navbar } from "react-bootstrap";
class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div>
        <Navbar fixed="top" expand="lg" bg="primary">
          <MDBNavbarBrand>
            <strong className="white-text">Auroville Events</strong>
          </MDBNavbarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <span className="mr-2 white-text">Category</span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    {this.props.List.map((item, index) => {
                      return (
                        <MDBDropdownItem key={index} href={"#" + item}>
                          {item}
                        </MDBDropdownItem>
                      );
                    })}
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
                <a href="/contact">
                  <MDBNavLink to="/contact">
                    <b className="white-text">Contact Us</b>
                  </MDBNavLink>
                </a>
              </MDBNavItem>
            </MDBNavbarNav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarPage;
