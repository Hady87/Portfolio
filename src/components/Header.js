
import React, {useState}from "react";
import { NavLink } from "react-router-dom";

import { FaHome,FaInfo ,FaAddressCard} from 'react-icons/fa';

import { Container, Navbar, Nav } from "react-bootstrap";

 function Header(){

 
    return (
      <>
       <div className="jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-">
                
              </div>
             
            

            </div>
          </div>
        </div>
        <Navbar  collapseOnSelect className="navbar sticky-top " variant="dark" expand="lg" >
          <Container >
            <Navbar.Brand href="/">
              
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"  >
              
              <NavLink className="mx-2 my-1"    to="about"><FaInfo />About</NavLink>
              <NavLink className="mx-2 my-1"    to="projects"> <FaHome  /> Projects</NavLink>
              <NavLink className="mx-2 my-1"   to="contact"><FaAddressCard  /> Contact </NavLink>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
export default Header
