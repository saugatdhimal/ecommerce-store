import React from "react";
import "./Products.css";
import SingleProduct from "./SingleProduct";
import Footer from './Footer'

function Products() {
  return (
    <div className="product">
      <div>
        <h2>Computers & Accessories</h2>
      </div>
      <hr />
      <div className="product__gridContainer">
        <SingleProduct
          id={1}
          image="https://images-na.ssl-images-amazon.com/images/I/81GBkzsHt6L._AC_SL1500_.jpg"
          price={799.99}
          description='MSI Modern 14 B4MW AMD-009 14" 60Hz Laptop AMD Ryzen R7-4700U UMA 8GB 256GB NVMe SSD Win10'
          rating={5}
        />
        <SingleProduct
          id={2}
          image="https://images-na.ssl-images-amazon.com/images/I/81ZmLjV8FFL._AC_SL1500_.jpg"
          price={550.5}
          description='HP 11.6" Stream11 Pro G3 N3060 4G'
          rating={4}
        />
        <SingleProduct
          id={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71RvVNtznrL._AC_SL1500_.jpg"
          price={75.99}
          description='Rosewill ATX Mid Tower Gaming PC Computer Case with 2 x 120mm Fans (Supports up to 6)'
          rating={5}
        />
        <SingleProduct
          id={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81QCmsVCz5L._AC_SL1500_.jpg"
          price={105.50}
          description='
          Fractal Design Node 804 No Power Supply MicroATX Cube Case FD-CA-NODE-804-BL, Black'
          rating={5}
        />
        <SingleProduct
          id={6}
          image="https://images-na.ssl-images-amazon.com/images/I/61LtuGzXeaL._AC_SL1465_.jpg"
          price={20}
          description='Amazon Basics Wireless Computer Mouse with USB Nano Receiver - Black'
          rating={3}
        />
        <SingleProduct
          id={2}
          image="https://images-na.ssl-images-amazon.com/images/I/81ZmLjV8FFL._AC_SL1500_.jpg"
          price={550.5}
          description='HP 11.6" Stream11 Pro G3 N3060 4G'
          rating={4}
        />
        <SingleProduct
          id={1}
          image="https://images-na.ssl-images-amazon.com/images/I/81GBkzsHt6L._AC_SL1500_.jpg"
          price={799.99}
          description='MSI Modern 14 B4MW AMD-009 14" 60Hz Laptop AMD Ryzen R7-4700U UMA 8GB 256GB NVMe SSD Win10'
          rating={5}
        />
        <SingleProduct
          id={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71G6hhEH7DL._AC_SL1500_.jpg"
          price={125.50}
          description='Power Supply 850W Fully Modular 80+ Gold Certified with Addressable RGB Light - GAMEMAX RGB850-Rainbow'
          rating={4}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Products;
