import React from 'react';
import { useParams } from 'react-router-dom';
import BookDetails from './bookdetails'; 

const BookDetailPage = () => {
  const { id } = useParams(); // Get the book ID from the URL parameter

  // Logic to fetch book details based on the ID or use it directly in rendering BookDetails component
  // For example:
  const selectedBook = {
    id: id, // Assuming book ID is passed through the URL
    // Other book details fetched based on the ID
    // title, author, etc.
  };

  return (
    <div>
      <h2>Book Details</h2>
      <BookDetails book={selectedBook} /> {/* Render BookDetails component with the selected book */}
    </div>
  );
};

export default BookDetailPage;
