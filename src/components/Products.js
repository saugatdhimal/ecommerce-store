import React from "react";
import "./Products.css";
import SingleProduct from "./SingleProduct";

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
      </div>
    </div>
  );
}

export default Products;
