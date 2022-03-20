import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {ListGroup, Container, Card} from 'react-bootstrap';

import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import MyNavBar from '../components/MyNav';
import MyFooter from '../components/MyFooter'

function Books() {
      const [titles, setTitles] = useState(0)
      const [allTitles, setAllTitles] = useState([])
    
      useEffect(() =>{
        fetch('/api/books/')
        .then(res => {
          return res.json()
        })
        .then(
          (result) => {
            setTitles(result.book_count);
            setAllTitles(result.all_book_details);
          }
        )
      },[])
      return (
      <Container>
           <MyNavBar/>
        <Container>
            <ListGroup>
            <ListGroup.Item className='text-center p-3 lead' variant="primary">There are {titles} titles in total</ListGroup.Item>
            </ListGroup>
            <Card>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
        </Container>
        <MyFooter />
    </Container>
      );
}

export default Books;
