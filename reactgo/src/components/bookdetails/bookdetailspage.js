import React from 'react';
import { useParams } from 'react-router-dom';
import booksData from '../booksdata';
import BookDetails from './bookdetails';

const BookDetailPage = () => {
  const { id } = useParams(); // Get the book ID from the URL parameter

  // Find the book with the matching ID from the booksData array
  const selectedBook = booksData.find(book => book.id === parseInt(id, 10));

  if (!selectedBook) {
    return <div>Book not found</div>;
  }

  return (
    <div>
      <h2>Book Details</h2>
      <BookDetails book={selectedBook} /> {/* Render BookDetails component with the selected book */}
    </div>
  );
};

export default BookDetailPage;
