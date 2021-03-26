import React from 'react'
import './CheckoutProduct.css'
import { removeFromCart } from "../actions/action";
import { useDispatch } from "react-redux";

function CheckoutProduct({ id, image, description, price, rating }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(removeFromCart(id))
  }
    return (
        <div className="checkoutProduct">
          <div className="checkoutProduct__item">
            <div className="checkoutProduct__itemImg">
              <img src={image} alt="" />
            </div>
            <p>{description}</p>
            <h4>${price}</h4>
            <div className="checkoutProduct__rating">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <>⭐</>
                ))}
            </div>
            <button onClick={handleClick}>Remove from cart</button>
          </div>
        </div>
    )
}

export default CheckoutProduct
