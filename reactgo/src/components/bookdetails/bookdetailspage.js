import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookDetails from './bookdetails';

const BookDetailPage = () => {
  const { id } = useParams(); // Get the book ID from the URL parameter

  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/books/${id}/`);
        setSelectedBook(response.data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    if (id) {
      fetchBookDetails();
    }
  }, [id]);

  return (
    <div>
      <h2>Book Details</h2>
      {selectedBook ? (
        <BookDetails book={selectedBook} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BookDetailPage;
