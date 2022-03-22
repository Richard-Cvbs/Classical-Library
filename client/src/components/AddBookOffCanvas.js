import React, {useState} from 'react'
import {Offcanvas, Button, FormControl, Form} from 'react-bootstrap'

import '/node_modules/bootstrap/dist/css/bootstrap.min.css'


function AddBookOffCanvas({ show, handleClose, ...props }) {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [summary, setSummary] = useState('')
  const [genre, setGenre] = useState('622b6a3b99106c4228f021d9')


  function handleTitle(e){
    console.log(e.target.value)
    setTitle(e.target.value)
  }
  function handleAuthor(e){
    console.log(e.target.value)
    setAuthor(e.target.value)
  }
  function handleSummary(e){
    console.log(e.target.value)
    setSummary(e.target.value)
  }
  function handleGenre(e){
    console.log(e.target.value)
    setGenre(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    fetch(('/api/addbook'),{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({title, author, summary, genre}),
    })}

    return (
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Add New Book</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="newBookTitle">
              <Form.Label className='ms-2 lead'>Title</Form.Label>
              <Form.Control required value={title} onChange={handleTitle} type="text" placeholder="Around the World in 80 Days" />
              <Form.Text  className="ms-2 text-muted">
                  Enter the title for the book you want to add.
               </Form.Text>
             </Form.Group>
             <Form.Group className="mb-3" controlId="newAuthor">
              <Form.Label className='ms-2 lead'>Author</Form.Label>
              <Form.Control required value={author} onChange={handleAuthor} type="text" placeholder="Jules Verne" />
              <Form.Text className="ms-2 text-muted">
                  Enter the author for the book you want to add.
               </Form.Text>
             </Form.Group>
             <Form.Group className="mb-3" controlId="newSummary">
              <Form.Label className='ms-2 lead'>Summary</Form.Label>
              <Form.Control required value={summary} onChange={handleSummary} as="textarea" rows="3" placeholder="In the story, Phileas Fogg attempt to circumnavigate the world in 80 days..." />
              <Form.Text className="ms-2 text-muted">
                  Please enter a quick summary.
               </Form.Text>
             </Form.Group>
            <Form.Group className="mb-3" controlId="pickGenre">
            <Form.Label className='ms-2 lead'>Pick Genre</Form.Label>
            <Form.Select value={genre} onChange={handleGenre} aria-label="Default">
                <option value="622b6a3b99106c4228f021d9">Fantasy</option>
                <option value="622b6a3c99106c4228f021db">Science Fiction</option>
                <option value="622b6a3c99106c4228f021dd">French Poetry</option>
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
    );
  }

export default AddBookOffCanvas