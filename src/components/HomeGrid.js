import React from "react";
import "./HomeGrid.css";
import ImageSlider from "./ImageSlider";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function HomeGrid() {
  return (
    <div className="homeGrid">
      <div className="homeGrid__imageSlider">
        <ImageSlider />
      </div>
      <img
        className="homeGrid__image"
        src="https://m.media-amazon.com/images/I/518xqgZYh2L._SR1242,450_.jpg"
        alt=""
      />
      <div className="homeGrid__container">
      <Link to="/basicsproducts">
        <div className="homeGrid__item1">
          <h3>Amazon Basics</h3>
          <div className="homeGrid__itemImage">
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
              alt=""
            />
          </div>
          <p>shop now</p>
        </div>
        </Link>
        <Link to="/exerciseproducts">
        <div className="homeGrid__item1">
          <h3>Get fit at home</h3>
          <div className="homeGrid__itemImage">
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"
              alt=""
            />
          </div>
          <p>shop now</p>
        </div>
        </Link>
        <Link to="/products">
          <div className="homeGrid__item1">
            <h3>Computers & Accessories</h3>
            <div className="homeGrid__itemImage">
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
                alt=""
              />
            </div>
            <p>shop now</p>
          </div>
        </Link>
        <div className="homeGrid__signInCont">
          <div className="homeGrid__signIn">
            <h3>Sign in for the best experience</h3>
            <button>Sign in securely</button>
          </div>
          <div className="homeGrid__signInImg">
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg"
              alt=""
            />
          </div>
        </div>
        <Link to="/laptopproducts">
        <div className="homeGrid__item1">
          <h3>Shop Laptops & Tablets</h3>
          <div className="homeGrid__itemImage">
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg"
              alt=""
            />
          </div>
          <p>shop now</p>
        </div>
        </Link>
        <Link to="/toyproducts">
        <div className="homeGrid__item1">
          <h3>Toys</h3>
          <div className="homeGrid__itemImage">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/71qeNzidkkL._AC_SL1500_.jpg"
              alt=""
            />
          </div>
          <p>shop now</p>
        </div>
        </Link>
        <Link to="/cameraproducts">
        <div className="homeGrid__item1">
          <h3>Cameras</h3>
          <div className="homeGrid__itemImage">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/510tzcJmyeL._AC_SY1000_.jpg"
              alt=""
            />
          </div>
          <p>shop now</p>
        </div>
        </Link>
        <Link to="/beautyproducts">
        <div className="homeGrid__item1">
          <h3>Beauty Picks</h3>
          <div className="homeGrid__itemImage">
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg"
              alt=""
            />
          </div>
          <p>shop now</p>
        </div>
        </Link>
        <div className="homeGrid__item1">
          <h3>Find your ideal TV</h3>
          <div className="homeGrid__itemImage">
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
              alt=""
            />
          </div>
          <p>shop now</p>
        </div>
        <div className="homeGrid__item1">
          <h3>Explore home bedding</h3>
          <div className="homeGrid__itemImage">
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_HomeBedding_Single_Cat_1x._SY304_CB418596953_.jpg"
              alt=""
            />
          </div>
          <p>shop now</p>
        </div>
        <div className="homeGrid__item1">
          <h3>Create with strip lights</h3>
          <div className="homeGrid__itemImage">
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_StripLighting_379x304_1X_en_US._SY304_CB418597476_.jpg"
              alt=""
            />
          </div>
          <p>shop now</p>
        </div>
        <div className="homeGrid__item1">
          <h3>Shop Top Categories</h3>
          <div className="homeGrid__itemImage">
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"
              alt=""
            />
          </div>
          <p>shop now</p>
        </div>
        <div className="homeGrid__discoverAmazon">
          <h3>Discover Amazon</h3>
          <div className="homeGrid__discoverAmazonImg">
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/HelpPage/BubbleShoveler/English/Fuji_Bubble_8Languages_en_US_updated_1x._CB445837675_.png"
              alt=""
            />
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_Currency_en_US_1X._CB451228332_.jpg"
              alt=""
            />
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_SecurePayment_en_US_1X._CB451228335_.jpg"
              alt=""
            />
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/October/BubbleShoveler/AIS_Bubble_247CS_en_US_1X._CB451228332_.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="homeGrid__footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default HomeGrid;
