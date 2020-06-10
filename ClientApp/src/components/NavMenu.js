import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
          <Container>
            <NavbarBrand tag={Link} to="/">elliotdematteis.com</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/Projects">Projects</NavLink>
                </NavItem>
                    <div className="d-flex flex-wrap align-items-center logo">
                        <a href="https://twitter.com/relliotd" target="_blank" rel="noopener noreferrer"><img src="/Images/Twitter_Social_Icon_Circle_Color.png" alt="Twitter logo" height="25px" width="25px" /></a>
                    </div>
                    <div className="d-flex flex-wrap align-items-center logo">
                        <a href="https://github.com/brasky" target="_blank" rel="noopener noreferrer"><img src="/Images/GitHub-Mark-32px.png" alt="GitHub logo" height="25px" width="25px" /></a>
                    </div>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
