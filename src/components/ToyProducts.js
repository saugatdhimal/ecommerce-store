import React from "react";
import "./Products.css";
import SingleProduct from "./SingleProduct";
import Footer from './Footer'

function ToyProducts() {
  return (
    <div className="product">
      <div>
        <h2>Amazon Basics</h2>
      </div>
      <hr />
      <div className="product__gridContainer">
        <SingleProduct
          id={19}
          image="https://images-na.ssl-images-amazon.com/images/I/61Ijt64DUjL._AC_SL1500_.jpg"
          price={60.50}
          description='
          Super Mario 02497 Nintendo Super Mario Kart 8 Mario Anti-Gravity Mini RC Racer 2.4Ghz'
          rating={5}
        />
        <SingleProduct
          id={20}
          image="https://images-na.ssl-images-amazon.com/images/I/61uo7BA8JwL._AC_SL1500_.jpg"
          price={120}
          description='
          Gundam IBO Gundam Barbatos, Bandai Spirits MG 1/100'
          rating={5}
        />
        <SingleProduct
          id={21}
          image="https://images-na.ssl-images-amazon.com/images/I/818lim9VcCL._AC_SL1500_.jpg"
          price={30.75}
          description='
          Hog Wild Pug Popper Toy - Shoot Foam Balls Up to 20 Feet - 6 Balls Included - Age 4+'
          rating={4}
        />
        <SingleProduct
          id={22}
          image="https://images-na.ssl-images-amazon.com/images/I/718wLRXSjZL._AC_SL1500_.jpg"
          price={70.50}
          description='
          Atomic Power Popper 12X - Rapid Fire Foam Ball Blaster Gun - Shoots Up to 12 Foam Balls'
          rating={5}
        />
        <SingleProduct
          id={21}
          image="https://images-na.ssl-images-amazon.com/images/I/818lim9VcCL._AC_SL1500_.jpg"
          price={30.75}
          description='
          Hog Wild Pug Popper Toy - Shoot Foam Balls Up to 20 Feet - 6 Balls Included - Age 4+'
          rating={4}
        />
        <SingleProduct
          id={22}
          image="https://images-na.ssl-images-amazon.com/images/I/718wLRXSjZL._AC_SL1500_.jpg"
          price={70.50}
          description='
          Atomic Power Popper 12X - Rapid Fire Foam Ball Blaster Gun - Shoots Up to 12 Foam Balls'
          rating={5}
        />
        <SingleProduct
          id={19}
          image="https://images-na.ssl-images-amazon.com/images/I/61Ijt64DUjL._AC_SL1500_.jpg"
          price={60.50}
          description='
          Super Mario 02497 Nintendo Super Mario Kart 8 Mario Anti-Gravity Mini RC Racer 2.4Ghz'
          rating={5}
        />
        <SingleProduct
          id={20}
          image="https://images-na.ssl-images-amazon.com/images/I/61uo7BA8JwL._AC_SL1500_.jpg"
          price={120}
          description='
          Gundam IBO Gundam Barbatos, Bandai Spirits MG 1/100'
          rating={5}
        />
      </div>
      <Footer />
    </div>
  );
}

export default ToyProducts;