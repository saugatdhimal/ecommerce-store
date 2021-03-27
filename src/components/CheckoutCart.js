import React from "react";
import "./CheckoutCart.css";
import CheckoutProduct from './CheckoutProduct'
import { useSelector } from 'react-redux'
import Footer from './Footer'
import CurrencyFormat from 'react-currency-format';

function CheckoutCart() {
    const items = useSelector(state => state.cartItem.data)
    const user = useSelector((state) => state.userName.data[0]?.firstname)
    const count = items.length;
    const subTotal = items.reduce((amount,item) => amount + item.price,0)
  return (
    <>
    <div className="checkoutCart">
        <div className="checkoutCart__items">
            <div className="checkoutCart__yourCart"><h3>Hello, {user} Welcome To Your Cart</h3></div>
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
      <div className="checkoutCart__total">
      <CurrencyFormat 
      value={subTotal} 
      displayType={'text'} 
      thousandSeparator={true} 
      prefix={'$'} 
      renderText={
        value => 
        <div>
        <h3>{`Subtotal( ${count} items) : ${value}`}</h3>
      </div>
        } />
        <button>Proceed to Checkout</button>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default CheckoutCart;
