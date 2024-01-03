// Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://your-backend-api/login/', {
        email,
        password,
      });

      // Handle successful login (store token, redirect, etc.)
      console.log('Login successful', response.data);
    } catch (error) {
      // Handle login failure (display error message, etc.)
      console.error('Login failed', error.response.data);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;