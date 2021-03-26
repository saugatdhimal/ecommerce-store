import React from "react";
import "./SingleProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/action";

function SingleProduct({ id, image, description, price, rating }) {
  const dispatch = useDispatch();
  const data = {
    id: id,
    image: image,
    description: description,
    price: price,
    rating: rating,
  };
  const handleClick = () => {
    dispatch(addToCart(data));
  };
  return (
    <div className="singleProduct">
      <div className="singleProduct__item">
        <div className="singleProduct__itemImg">
          <img src={image} alt="" />
        </div>
        <p>{description}</p>
        <h4>${price}</h4>
        <div className="singleProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <>⭐</>
            ))}
        </div>
        <button onClick={handleClick}>Add to cart</button>
      </div>
    </div>
  );
}

export default SingleProduct;
