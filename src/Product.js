import React from 'react';
import './Product.css';

function Product() {
  return (
    <div className="product">
      <div className="product_info">
        <p>Lorem, ipsum dolor sit aSZS</p>
        <p className="product_price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product_rating">
          <p> ⭐</p>
          <p> ⭐</p>
          <p> ⭐</p>
        </div>
      </div>

      <img src="https://m.media-amazon.com/images/I/410K-S--pmL.jpg" alt="" />

      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
