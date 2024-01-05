import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './booklist.css';
import axios from 'axios';
import booksData from '../booksdata';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch books data from Django backend
    axios.get('http://localhost:8000/api/home/')
      .then(response => setBooks(response.data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  const getRandomStyle = () => {
    const styleNumber = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
    return `style${styleNumber}`;
  };

  const handleBookDetails = (book) => {
    const randomStyle = getRandomStyle();
    navigate(`/bookdetail/${book.id}`, { state: { coverStyle: randomStyle } });
  };

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  return (
    <div className='books-container'>
      <h2 className='title'>Popular Books</h2>
      <ul className="book-card">
        {books.map(book => (
          <div key={book.id} className={`book-details ${getRandomStyle()}`} onClick={() => handleBookDetails(book)}>
            <h3 className="book-title">{book.title}</h3>
            <p className="book-author">{book.author}</p>
            <button className="buy-button" onClick={() => addToCart(book)}>Add to Cart</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
