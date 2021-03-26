import React from "react";
import "./Products.css";
import SingleProduct from "./SingleProduct";
import Footer from "./Footer";

function LaptopProducts() {
  return (
    <div className="product">
      <div>
        <h2>Amazon Basics</h2>
      </div>
      <hr />
      <div className="product__gridContainer">
        <SingleProduct
          id={27}
          image="https://images-na.ssl-images-amazon.com/images/I/81skV7BufjL._AC_SL1500_.jpg"
          price={1500}
          description="
          HP 15 Laptop, 11th Gen Intel Core i5-1135G7 Processor, 8 GB RAM, 256 GB SSD Storage, 15.6” Full HD IPS Display, Windows 10 Home, HP Fast Charge,..."
          rating={5}
        />
        <SingleProduct
          id={28}
          image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
          price={1599.99}
          description="
          Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode,..."
          rating={5}
        />
        <SingleProduct
          id={29}
          image="https://images-na.ssl-images-amazon.com/images/I/71dqjxW8g5L._AC_SL1500_.jpg"
          price={1500.75}
          description='
          Lenovo IdeaPad 3 14" Laptop, 14.0" FHD 1920 x 1080 Display, AMD Ryzen 5 3500U Processor, 8GB DDR4 RAM, 256GB SSD, AMD Radeon Vega 8 Graphics,...'
          rating={4}
        />
        <SingleProduct
          id={30}
          image="https://images-na.ssl-images-amazon.com/images/I/41Aj5pzTMvL._AC_.jpg"
          price={1259.5}
          description="
          HP 17.3 Inch Laptop Computer 10th Gen Intel Core i5-1035G1 up to 3.6GHz, 12GB RAM, 1TB HDD, Intel Graphics, DVD, WiFi, Bluetooth, Windows 10 (Renewed)"
          rating={5}
        />
      </div>
      <Footer />
    </div>
  );
}

export default LaptopProducts;
