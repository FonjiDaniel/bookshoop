import React, { useState } from 'react';
import './booklist.css';
import booksData from '../booksdata';
import BookDetails from '../bookdetails/bookdetails';
import Cart from '../cart/cart';

const BookList = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [cart, setCart] = useState([]);


  const handleBookDetails = (book) => {
    setSelectedBook(book);
  };

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  return (
    <div className='books-container'>
      <h2 className='title'>Popular Books</h2>
      <ul className="book-card">
        {booksData.map(book => (
          <div key={book.id} className="book-details">
            <h3 className="book-title">{book.title}</h3>
            <p className="book-author">{book.author}</p>
            <button className="button-1" onClick={() => handleBookDetails(book)}>Book Details</button>
            <button className="buy-button" onClick={() => addToCart(book)}>Add to Cart</button>
          </div>
        ))}
      </ul>
      {/* {selectedBook && <BookDetails book={selectedBook} />}
      <Cart cart={cart} setCart={setCart} /> */}
    </div>
  );
};

export default BookList;

