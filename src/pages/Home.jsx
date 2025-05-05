import React from 'react';
import products from '../data/Data';
import ItemCard from '../components/ItemCard';

const Home = ({ addToCart, searchQuery }) => {
  
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="AllProduct "  >

      {filteredProducts.length > 0 ? (
        filteredProducts.map(product => (
          <ItemCard key={product.id} product={product} addToCart={addToCart} />
        ))
      ) : (
        <p>No products found.</p> 
      )}
    </div>
  );
};

export default Home;
