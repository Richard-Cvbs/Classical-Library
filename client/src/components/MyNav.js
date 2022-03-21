import React, {useState} from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import {Link} from 'react-router-dom'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import '/node_modules/bootstrap-icons/font/bootstrap-icons.css'

import AddBookOffCanvas from './AddBookOffCanvas'

function MyNavBar(){
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
return (
<Navbar bg="light" expand="lg">
<Container>
    <Navbar.Brand as={Link} to='/' className='fw-bold ms-3'>
    <i className="me-1 bi bi-book"></i>
    Classic Library</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse  id="basic-navbar-nav">
    <Nav className="flex-grow-1 justify-content-evenly">
        <Nav.Link as={Link} to='/' className='lead' href="#home">
        <i className="bi bi-book-half me-1"></i>
            Home</Nav.Link>
        <Nav.Link as={Link} to='/books' className='lead'>See All Titles</Nav.Link>
        <NavDropdown className='lead' title="Borrow and Return" id="basic-nav-dropdown">
        <NavDropdown.Item onClick={handleShow} as={Button} className='text-center' href="#">Add a New Book</NavDropdown.Item>
        <NavDropdown.Item as={Button} className='text-center' href="#action/3.2">Borrow A Book</NavDropdown.Item>
        <NavDropdown.Item className='text-center' href="#action/3.3">Return A Book</NavDropdown.Item>
        </NavDropdown>
    </Nav>
    </Navbar.Collapse>
    <AddBookOffCanvas placement='end' show={show} handleClose={handleClose}/>
</Container>
</Navbar>
)
}

export default MyNavBar;