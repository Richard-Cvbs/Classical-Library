import React, {useState} from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import {Link} from 'react-router-dom'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import '/node_modules/bootstrap-icons/font/bootstrap-icons.css'

import AddBookOffCanvas from './AddBookOffCanvas'
import ReturnOffCanvas from "./ReturnOffCanvas";
import BorrowOffCanvas from "./BorrowOffCanvas";

function MyNavBar(){
    const [showAdd, setShowAdd] = useState(false);
    const [showBorrow, setShowBorrow] = useState(false);
    const [showReturn, setShowReturn] = useState(false);

  
    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = () => setShowAdd(true);
    
    const handleCloseBorrow = () => setShowBorrow(false);
    const handleShowBorrow = () => setShowBorrow(true);

    const handleCloseReturn = () => setShowReturn(false);
    const handleShowReturn = () => setShowReturn(true);

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
        <NavDropdown.Item onClick={handleShowAdd} as={Button} className='text-center' href="#">Add a New Book</NavDropdown.Item>
        <NavDropdown.Item onClick={handleShowBorrow} as={Button} className='text-center' href="#">Borrow A Book</NavDropdown.Item>
        <NavDropdown.Item onClick={handleShowReturn} className='text-center' href="#action/3.3">Return A Book</NavDropdown.Item>
        </NavDropdown>
    </Nav>
    </Navbar.Collapse>
    <AddBookOffCanvas placement='end' show={showAdd} handleClose={handleCloseAdd}/>
    <ReturnOffCanvas placement='end' show={showReturn} handleClose={handleCloseReturn}/>
    <BorrowOffCanvas placement='end' show={showBorrow} handleClose={handleCloseBorrow}/>
</Container>
</Navbar>
)
}

export default MyNavBar;