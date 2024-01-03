import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList/booklist';
import Navbar from './components/Navbar/Navbar.js';
import BookDetailPage from './components/bookdetails/bookdetailspage'; // Import the BookDetailPage component
import Login from './components/Login.js';
const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<BookList />} />
            <Route path="/bookdetail" element={<BookDetailPage />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
        {/* Footer Component */}
        {/* Add footer component here if applicable */}
    </Router>
  );
};

export default App;
