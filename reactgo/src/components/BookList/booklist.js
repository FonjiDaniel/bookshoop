import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './booklist.css';
import booksData from '../booksdata';

const BookList = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

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
        {booksData.map(book => (
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
