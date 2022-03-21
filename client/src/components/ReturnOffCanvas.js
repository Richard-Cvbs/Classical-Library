import React, {useState} from 'react'
import {Offcanvas, Button, FormControl, Form} from 'react-bootstrap'

import '/node_modules/bootstrap/dist/css/bootstrap.min.css'


function ReturnOffCanvas({ show, handleClose, ...props }) {

  
    return (
      <>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Return Book</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <Form>
            <Form.Group className="mb-3" controlId="pickGenre">
            <Form.Label className='ms-2 lead'>Which Title are you returning?</Form.Label>
            <Form.Select aria-label="Default">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </Form.Select>
            </Form.Group>
            <Form.Group className='d-flex justify-content-center'>
            <Button variant="success" type="submit">
             Submit
            </Button>
            </Form.Group>
          </Form>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

export default ReturnOffCanvas