import React from "react";
import '../../App.css';
import { Navbar,Nav } from 'react-bootstrap';
import {
    // BrowserRouter as Router,
    Link
  }  from "react-router-dom";

const NavBar=()=> {
  
  return(
    <div className="App">
 <Navbar className='header1' variant="dark">
    <Navbar.Brand href="#home">Dairy App</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav > <Link to="/Home">Home</Link></Nav>
      <Nav><Link to="/Registeration">Registeration</Link></Nav>
      <Nav><Link to="/Login">Login</Link> </Nav>
      <Nav><Link to="/Cart">Cart</Link></Nav>
    </Nav>
    
  </Navbar>
    </div>
)
 
}
export default NavBar;
