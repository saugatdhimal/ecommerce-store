import React from "react";
import "./CheckoutCart.css";
import CheckoutProduct from './CheckoutProduct'
import { useSelector } from 'react-redux'

function CheckoutCart() {
    const items = useSelector(state => state.cartItem.data)
  return (
    <div className="checkoutCart">
        <div className="checkoutCart__items">
            <div className="checkoutCart__yourCart">Your cart</div>
        {items.map((item) => {
            return(
          <CheckoutProduct 
          id={item.id}
          image={item.image}
          description={item.description}
          price={item.price}
          rating={item.rating}
          />
        )})}
        </div>
      <div className="checkoutCart__total">I am checkout total</div>
    </div>
  );
}

export default CheckoutCart;
