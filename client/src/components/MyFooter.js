import React from "react";
import { Container, } from "react-bootstrap";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import '/node_modules/bootstrap-icons/font/bootstrap-icons.css'

function MyFooter(){
 return (
    <Container className= 'fs-2 text-light text-center p-4 bg-secondary position-absolute bottom-0'>
        Made by Richard
    </Container>
 )
}

export default MyFooter;