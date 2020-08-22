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
 <Navbar className='header1'>
   
 <Navbar.Brand  className="dairy">
      <img
        alt=""
        src="/images/istockphoto.jpg" 
        width="40"
        height="40"
        className="d-inline-block align-top"
        
      />{' '}
     Dairy App
    </Navbar.Brand>
    {/* <Navbar.Brand  className="dairy">Dairy App</Navbar.Brand> */}
  
    <Nav className="mr-auto">
      <Nav className="home"> <Link to="/Home">Home</Link></Nav>
      <Nav className="registeration"><Link to="/Registeration">Registeration</Link></Nav>
      <Nav className="registeration"><Link to="/Login">Login</Link> </Nav>
      <Nav className="registeration"><Link to="/Cart">Cart</Link></Nav>
    </Nav>
    
  </Navbar>
    </div>
)
 
}
export default NavBar;
//