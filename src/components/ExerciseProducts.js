import React from "react";
import "./Products.css";
import SingleProduct from "./SingleProduct";
import Footer from './Footer'

function ExerciseProducts() {
  return (
    <div className="product">
      <div>
        <h2>Get fit at home</h2>
      </div>
      <hr />
      <div className="product__gridContainer">
        <SingleProduct
          id={11}
          image="https://images-na.ssl-images-amazon.com/images/I/81YvGI3D0HL._AC_SL1500_.jpg"
          price={45.50}
          description='
          Amazon Basics Rubber Encased Hex Dumbbell Hand Weight'
          rating={5}
        />
        <SingleProduct
          id={12}
          image="https://images-na.ssl-images-amazon.com/images/I/51YYXSJ4T3L._AC_SL1001_.jpg"
          price={30.75}
          description='
          DEGOL Skipping Rope with Ball Bearings Rapid Speed Jump Rope Cable and 6”'
          rating={5}
        />
        <SingleProduct
          id={13}
          image="https://images-na.ssl-images-amazon.com/images/I/71JMoY8X6CL._AC_SL1500_.jpg"
          price={49.99}
          description='
          Amazon Basics 1/2-Inch Extra Thick Exercise Yoga Mat'
          rating={4}
        />
        <SingleProduct
          id={14}
          image="https://images-na.ssl-images-amazon.com/images/I/717x8YULMIL._AC_SL1500_.jpg"
          price={22.20}
          description='
          Amazon Basics Cast Iron Kettlebell Weight'
          rating={5}
        />
        <SingleProduct
          id={13}
          image="https://images-na.ssl-images-amazon.com/images/I/71JMoY8X6CL._AC_SL1500_.jpg"
          price={49.99}
          description='
          Amazon Basics 1/2-Inch Extra Thick Exercise Yoga Mat'
          rating={4}
        />
        <SingleProduct
          id={14}
          image="https://images-na.ssl-images-amazon.com/images/I/717x8YULMIL._AC_SL1500_.jpg"
          price={22.20}
          description='
          Amazon Basics Cast Iron Kettlebell Weight'
          rating={5}
        />
        <SingleProduct
          id={11}
          image="https://images-na.ssl-images-amazon.com/images/I/81YvGI3D0HL._AC_SL1500_.jpg"
          price={45.50}
          description='
          Amazon Basics Rubber Encased Hex Dumbbell Hand Weight'
          rating={5}
        />
        <SingleProduct
          id={12}
          image="https://images-na.ssl-images-amazon.com/images/I/51YYXSJ4T3L._AC_SL1001_.jpg"
          price={30.75}
          description='
          DEGOL Skipping Rope with Ball Bearings Rapid Speed Jump Rope Cable and 6”'
          rating={5}
        />
        
      </div>
      <Footer />
    </div>
  );
}

export default ExerciseProducts;