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
            console.log(result.all_book_details)
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
        </Container>
        <Container>
          {allTitles.map((book)=>{
            return(
            <Card key={book._id}>
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Title>by {book.author.first_name + ' ' + book.author.family_name}</Card.Title>
                <Card.Text>
                {book.summary}
                </Card.Text>
                <Card.Text>{book.genre[0].name}</Card.Text>
              </Card.Body>
            </Card>
            )
          })}
        </Container>
        <MyFooter />
    </Container>
      );
}

export default Books;
