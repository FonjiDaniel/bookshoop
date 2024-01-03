import React from 'react';
import './cart.css';

const Cart = ({ cart, setCart }) => {
  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2> 
      <ul>
        {cart.map((item) => (
          <li className="cart-item" key={item.id}>
            {item.title} - ${item.price}
            <button className="remove-button" onClick={() => removeFromCart(item.id)}>Remove</button> {/* Use the remove-button class */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
