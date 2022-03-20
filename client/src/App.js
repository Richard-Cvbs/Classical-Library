import React, {useEffect, useState} from 'react';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  const [titles, setTitles] = useState(0)
  const [authors, setAuthors] = useState(0)
  const [generes, setGeneres] = useState(0)
  const [individualBooks, setIndividualBooks] = useState(0)
  const [availableBooks, SetAvailableBooks] = useState(0)

  useEffect(() =>{
    fetch('/api/')
    .then(res => {
      console.log(res)
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
  }
  )
  return (
    <div className="container-fluid">
    <div className="row">
        <div className="col-sm-2">
            <ul className="sidebar-nav">
                <li><a href="/catalog">Home</a></li>
                <li><a href="/catalog/books">All books</a></li>
                <li><a href="/catalog/authors">All authors</a></li>
                <li><a href="/catalog/genres">All genres</a></li>
                <li><a href="/catalog/bookinstances">All book-instances</a></li>
                <li>
                    <hr/>
                </li>
                <li><a href="/catalog/author/create">Create new author</a></li>
                <li><a href="/catalog/genre/create">Create new genre</a></li>
                <li><a href="/catalog/book/create">Create new book</a></li>
                <li><a href="/catalog/bookinstance/create">Create new book instance (copy)</a></li>
            </ul>
        </div>
        <div className="col-sm-10">
          <p>There are {titles} titles in total</p>
          <p>From {authors} different authors</p>
          <p>Expanding {generes} different genres</p>
          <p>There are {individualBooks} individual books in total</p>
          <p>From which {availableBooks} are currently available</p>
        </div>
    </div>
</div>
  );
}

export default App;
