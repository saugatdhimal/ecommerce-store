import React from "react";
import "./Products.css";
import SingleProduct from "./SingleProduct";
import Footer from './Footer'

function CameraProducts() {
  return (
    <div className="product">
      <div>
        <h2>Cameras</h2>
      </div>
      <hr />
      <div className="product__gridContainer">
        <SingleProduct
          id={23}
          image="https://images-na.ssl-images-amazon.com/images/I/71W1KvLH3sL._AC_SL1500_.jpg"
          price={750}
          description='
          Canon EOS REBEL T7 DSLR Camera|2 Lens Kit with EF18-55mm + EF 75-300mm Lens, Black'
          rating={5}
        />
        <SingleProduct
          id={24}
          image="https://images-na.ssl-images-amazon.com/images/I/71bhwjBNaqL._AC_SL1500_.jpg"
          price={599.99}
          description='
          KODAK PIXPRO Astro Zoom AZ421-WH 16MP Digital Camera with 42X Optical Zoom and 3" LCD Screen (White)'
          rating={5}
        />
        <SingleProduct
          id={25}
          image="https://images-na.ssl-images-amazon.com/images/I/71c211GncKL._AC_SL1500_.jpg"
          price={500.75}
          description='
          KODAK PIXPRO WPZ2 Rugged Waterproof Digital Camera 16MP 4X Optical Zoom 2.7" LCD Full HD Video, Yellow'
          rating={4}
        />
        <SingleProduct
          id={26}
          image="https://images-na.ssl-images-amazon.com/images/I/81M6reOCxTL._AC_SL1500_.jpg"
          price={259.50}
          description='
          Canon PowerShot SX620 Digital Camera w/25x Optical Zoom - Wi-Fi & NFC Enabled (Silver)'
          rating={5}
        />
      </div>
      <Footer />
    </div>
  );
}

export default CameraProducts;