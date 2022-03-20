import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import MyNavBar from '../components/MyNav';

function Books() {
  return (
    <div className="container-fluid">
       <MyNavBar></MyNavBar>
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
          <p>There are {0} titles in total</p>
          <p>From {0} different authors</p>
          <p>Expanding {0} different genres</p>
          <p>There are {0} individual books in total</p>
          <p>From which {0} are currently available</p>
        </div>
    </div>
</div>
  );
}

export default Books;
