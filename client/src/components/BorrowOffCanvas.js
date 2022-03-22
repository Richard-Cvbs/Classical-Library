import React, {useState, useEffect} from 'react'
import {Offcanvas, Button, Form} from 'react-bootstrap'

import '/node_modules/bootstrap/dist/css/bootstrap.min.css'


function BorrowOffCanvas({ show, handleClose, ...props }) {
  const [available, setAvaliable] = useState(null)
  
  useEffect(() =>{
    fetch('/api/bookinstances/')
    .then(res => {
      return res.json()
    })
    .then(
      (result) => {
        setAvaliable(result)
      }
    )
  },[])
    return (
      <>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Borrow Book</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <Form>
            <Form.Group className="mb-3" controlId="pickGenre">
            <Form.Label className='ms-2 lead'>Which Title would you like to borrow?</Form.Label>
            <Form.Select aria-label="Default">
              {available !== null &&
              available.map( item=>{
                return ( 
                  <option value={item._id._id} key={item._id._id}>
                  {item._id.title}
                  </option>
                  )
                }
              )
              }
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

export default BorrowOffCanvas