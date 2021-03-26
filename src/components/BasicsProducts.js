import React from "react";
import "./Products.css";
import SingleProduct from "./SingleProduct";
import Footer from './Footer'

function BasicsProducts() {
  return (
    <div className="product">
      <div>
        <h2>Amazon Basics</h2>
      </div>
      <hr />
      <div className="product__gridContainer">
        <SingleProduct
          id={15}
          image="https://images-na.ssl-images-amazon.com/images/I/71K7Q4FpguL._AC_SL1500_.jpg"
          price={60.50}
          description='Amazon Basics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon'
          rating={5}
        />
        <SingleProduct
          id={16}
          image="https://images-na.ssl-images-amazon.com/images/I/71i08qnZeDL._AC_SL1500_.jpg"
          price={120}
          description='
          Amazon Basics Classic Puresoft PU-Padded Mid-Back Office Computer Desk Chair with Armrest - Black'
          rating={5}
        />
        <SingleProduct
          id={17}
          image="https://images-na.ssl-images-amazon.com/images/I/71s7HbyqzEL._AC_SL1500_.jpg"
          price={200.75}
          description='
          Amazon Basics Hardside Carry-On Spinner Suitcase Luggage - Expandable with Wheels - 21 Inch, Black'
          rating={4}
        />
        <SingleProduct
          id={18}
          image="https://images-na.ssl-images-amazon.com/images/I/616P%2BrAGWqL._AC_SL1500_.jpg"
          price={98.50}
          description='
          Amazon Basics Self-Inking Date Stamp'
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
          id={15}
          image="https://images-na.ssl-images-amazon.com/images/I/71K7Q4FpguL._AC_SL1500_.jpg"
          price={60.50}
          description='Amazon Basics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon'
          rating={5}
        />
        <SingleProduct
          id={16}
          image="https://images-na.ssl-images-amazon.com/images/I/71i08qnZeDL._AC_SL1500_.jpg"
          price={120}
          description='
          Amazon Basics Classic Puresoft PU-Padded Mid-Back Office Computer Desk Chair with Armrest - Black'
          rating={5}
        />
        
      </div>
      <Footer />
    </div>
  );
}

export default BasicsProducts;