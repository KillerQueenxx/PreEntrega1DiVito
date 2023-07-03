import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';

const CartWidget = () => {
  const [cartCount, setCartCount] = useState(0); 
  const increaseCount = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="cart-widget" onClick={increaseCount}>
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className="badge">{cartCount}</span>
    </div>
  );
};

export default CartWidget;
