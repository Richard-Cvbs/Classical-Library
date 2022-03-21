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
            <Form.Group className="mb-3" controlId="pickGenre">
            <Form.Label className='ms-2 lead'>Pick Genre</Form.Label>
            <Form.Select aria-label="Default">
                <option value="Fantasy">Fantasy</option>
                <option value="Science Fiction">Science Fiction</option>
                <option value="French Poetry">French Poetry</option>
            </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="pickGenre">
            <Form.Label className='ms-2 lead'>How many will you Add?</Form.Label>
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

export default AddBookOffCanvas