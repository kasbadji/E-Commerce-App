import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const ItemCard = ({ product, addToCart }) => {
  return (
    <div className="boxProduct" id='products'>
      <img src={product.image} alt={product.name} className='ProductImage' width={'200px'} />

      <div className="bottom">
        <h2 className='NameOfProduct'>{product.name}</h2>
        <p className='PriceProduct'>Price : {product.price} DZ</p>

        <div className="button-group">
          <Link to={`/product/${product.id}`}>
            <Button variant="contained" id='About-Btn'>About</Button>
          </Link>
          <Button  variant="contained" id='Add-Btn' onClick={() => addToCart(product)}>Add</Button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
