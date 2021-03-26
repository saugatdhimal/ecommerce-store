import React from "react";
import "./Products.css";
import SingleProduct from "./SingleProduct";
import Footer from './Footer'

function BeautyProducts() {
  return (
    <div className="product">
      <div>
        <h2>Beauty Products</h2>
      </div>
      <hr />
      <div className="product__gridContainer">
        <SingleProduct
          id={7}
          image="https://images-na.ssl-images-amazon.com/images/I/81n7bUa2yFL._AC_SL1500_.jpg"
          price={100}
          description='
          L.A. Girl Beauty Brick Eyeshadow, Nudes, 0.42 Ounce'
          rating={5}
        />
        <SingleProduct
          id={8}
          image="https://images-na.ssl-images-amazon.com/images/I/71ApOvNiHXL._SL1250_.jpg"
          price={45.50}
          description='
          Coty Airspun Face Powder, Translucent Extra Coverage, 2.3 Oz, Pack of 1'
          rating={4}
        />
        <SingleProduct
          id={9}
          image="https://images-na.ssl-images-amazon.com/images/I/71L5%2B2YO2YL._SL1500_.jpg"
          price={29.99}
          description='
          Pack of 6 Crystal Flower Jelly Lipstick, FirstFly Long Lasting Nutritious Lip Balm Lips'
          rating={4}
        />
        <SingleProduct
          id={10}
          image="https://images-na.ssl-images-amazon.com/images/I/71oU85TcQDL._SL1500_.jpg"
          price={70.50}
          description='
          Rimmel, Stay Matte Primer, Pack of 2'
          rating={5}
        />
        <SingleProduct
          id={9}
          image="https://images-na.ssl-images-amazon.com/images/I/71L5%2B2YO2YL._SL1500_.jpg"
          price={29.99}
          description='
          Pack of 6 Crystal Flower Jelly Lipstick, FirstFly Long Lasting Nutritious Lip Balm Lips'
          rating={4}
        />
        <SingleProduct
          id={10}
          image="https://images-na.ssl-images-amazon.com/images/I/71oU85TcQDL._SL1500_.jpg"
          price={70.50}
          description='
          Rimmel, Stay Matte Primer, Pack of 2'
          rating={5}
        />
        <SingleProduct
          id={7}
          image="https://images-na.ssl-images-amazon.com/images/I/81n7bUa2yFL._AC_SL1500_.jpg"
          price={100}
          description='
          L.A. Girl Beauty Brick Eyeshadow, Nudes, 0.42 Ounce'
          rating={5}
        />
        <SingleProduct
          id={8}
          image="https://images-na.ssl-images-amazon.com/images/I/71ApOvNiHXL._SL1250_.jpg"
          price={45.50}
          description='
          Coty Airspun Face Powder, Translucent Extra Coverage, 2.3 Oz, Pack of 1'
          rating={4}
        />
        
      </div>
      <Footer />
    </div>
  );
}

export default BeautyProducts;