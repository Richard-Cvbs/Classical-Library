import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import '/node_modules/bootstrap-icons/font/bootstrap-icons.css'

function MyNavBar(){
return (
<Navbar bg="light" expand="lg">
<Container>
    <Navbar.Brand className='fw-bold ms-3' href="#home">
    <i class="me-1 bi bi-book"></i>
    Classic Library</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse  id="basic-navbar-nav">
    <Nav className="flex-grow-1 justify-content-evenly">
        <Nav.Link className='lead' href="#home">
        <i class="bi bi-book-half me-1"></i>
            Home</Nav.Link>
        <Nav.Link className='lead' href="#home">See All Titles</Nav.Link>
        <NavDropdown className='lead' title="Borrow and Return" id="basic-nav-dropdown">
        <NavDropdown.Item className='text-center' href="#action/3.1">Add a New Book</NavDropdown.Item>
        <NavDropdown.Item className='text-center' href="#action/3.2">Borrow A Book</NavDropdown.Item>
        <NavDropdown.Item className='text-center' href="#action/3.3">Return A Book</NavDropdown.Item>
        </NavDropdown>
    </Nav>
    </Navbar.Collapse>
</Container>
</Navbar>
)
}

export default MyNavBar;