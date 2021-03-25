import React from 'react'
import './CheckoutProduct.css'

function CheckoutProduct({ id, image, description, price, rating }) {
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
            <button >Remove from cart</button>
          </div>
        </div>
    )
}

export default CheckoutProduct
