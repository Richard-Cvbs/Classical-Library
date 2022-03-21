import React, {useState} from 'react'
import {Offcanvas, Button, FormControl, Form} from 'react-bootstrap'

import '/node_modules/bootstrap/dist/css/bootstrap.min.css'


function AddBookOffCanvas({ show, handleClose, ...props }) {

  
    return (
      <>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Add New Book</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <Form>
            <Form.Group className="mb-3" controlId="newBookTitle">
              <Form.Label className='ms-2 lead'>Title</Form.Label>
              <Form.Control type="text" placeholder="Around the World in 80 Days" />
              <Form.Text className="ms-2 text-muted">
                  Enter the title for the book you want to add.
               </Form.Text>
             </Form.Group>
             <Form.Group className="mb-3" controlId="newAuthor">
              <Form.Label className='ms-2 lead'>Author</Form.Label>
              <Form.Control type="text" placeholder="Jules Verne" />
              <Form.Text className="ms-2 text-muted">
                  Enter the author for the book you want to add.
               </Form.Text>
             </Form.Group>
             <Form.Group className="mb-3" controlId="newSummary">
              <Form.Label className='ms-2 lead'>Summary</Form.Label>
              <Form.Control as="textarea" rows="3" placeholder="In the story, Phileas Fogg attempt to circumnavigate the world in 80 days..." />
              <Form.Text className="ms-2 text-muted">
                  Please enter a quick summary.
               </Form.Text>
             </Form.Group>
          </Form>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

export default AddBookOffCanvas