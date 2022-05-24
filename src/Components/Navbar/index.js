import React from "react";
import { Nav, NavLink, NavMenu } from './NavbarElements.js';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
<NavLink to="/home" activeStyle>
	  Home
	  </NavLink>

          <NavLink to="/document" activeStyle>
            Documentation
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact Us
          </NavLink>
          <NavLink to="/privacypolicies" activeStyle>
            Privacy Policies
          </NavLink>
          <NavLink to="/tos" activeStyle>
            Term of Service
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
