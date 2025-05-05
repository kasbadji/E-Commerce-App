import React from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = ({ cartItems , removeCart }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Cart</h2>

      <ul className="cart-list">

      {cartItems.map((item) => (
        <li className="cart-item" key={item.cartItemId}>
          {item.name}

          <span className="item-price">
            {item.price} DZ
            <IconButton
              aria-label="delete"
              size="large"
              style={{ color: 'rgb(57, 56, 56)' }}
              onClick={() => removeCart(item.cartItemId)}
            >
              <DeleteIcon />
            </IconButton>
          </span>
          
        </li>
      ))}

      </ul>

      <h3 className="cart-total">Total: {total} DZ</h3>
    </div>
  );
};

export default Cart;
