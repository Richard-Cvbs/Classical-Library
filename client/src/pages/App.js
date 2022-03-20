import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {ListGroup, Container} from 'react-bootstrap';

import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../App.css';

import MyNavBar from '../components/MyNav';
import MyFooter from '../components/MyFooter';

function App() {
  const [titles, setTitles] = useState(0)
  const [authors, setAuthors] = useState(0)
  const [generes, setGeneres] = useState(0)
  const [individualBooks, setIndividualBooks] = useState(0)
  const [availableBooks, SetAvailableBooks] = useState(0)

  useEffect(() =>{
    fetch('/api/')
    .then(res => {
      return res.json()
    })
    .then(
      (result) => {
        setTitles(result.book_count);
        setAuthors(result.author_count);
        setGeneres(result.genre_count);
        setIndividualBooks(result.book_instance_count);
        SetAvailableBooks(result.book_instance_available_count);
      }
    )
  },[])
  return (
  <Container>
       <MyNavBar/>
    <Container>
        <ListGroup>
        <ListGroup.Item className='text-center p-3 lead' variant="primary">There are {titles} titles in total</ListGroup.Item>
        <ListGroup.Item className='text-center p-3 lead' variant="secondary">From {authors} different authors</ListGroup.Item>
        <ListGroup.Item className='text-center p-3 lead' variant="success"> Expanding {generes} different genres</ListGroup.Item>
        <ListGroup.Item className='text-center p-3 lead' variant="danger">There are {individualBooks} individual books in total</ListGroup.Item>
        <ListGroup.Item className='text-center p-3 lead' variant="warning">From which {availableBooks} are currently available</ListGroup.Item>
        </ListGroup>
    </Container>
    <MyFooter />
</Container>
  );
}

export default App;
