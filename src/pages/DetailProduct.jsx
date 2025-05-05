import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/Data';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id == id);

  product.views += 1;

  return (
    <div className="ProductDetailContainer">
      <img src={product.image} alt={product.name} className="ProductDetailImage" />
      <h2 className="ProductDetailTitle">{product.name}</h2>
      <p className="ProductDetailPrice"><b>Price: {product.price} DZ</b></p>
      <p className="ProductDetailStats">Views: {product.views}</p>
      <p className="ProductDetailStats">Sold: {product.sold}</p>

      <h3 className="ProductDetailReviewTitle">Customer Review</h3>

      {product.reviews.length > 0 ? (
        product.reviews.map((rev, index) => (
          <div key={index} className="ProductReview">
            <p>Rating: {'⭐'.repeat(rev.rating)}</p>
            <p>Comment: {rev.comment}</p>
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
};

export default ProductDetail;

