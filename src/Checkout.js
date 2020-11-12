import React from 'react';
import './Checkout.css';

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_add"
          src="https://www.webfx.com/amazon/img/types-of-amazon-ads__03.png"
          alt=""
        />

        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>
        </div>
      </div>

      <div className="checkoutright">
        <h2>Your Total</h2>
      </div>
    </div>
  );
}

export default Checkout;
