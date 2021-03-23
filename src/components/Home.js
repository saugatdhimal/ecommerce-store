import React from 'react'
import './Home.css'
import MuiImageSlider from 'mui-image-slider';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    arrowWrapper: {
        height: '35vh'
    }
  });

function Home() {
    const classes = useStyles();
    const images = [
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg',

    ];

    return (
        <div className="home">
            <div className="home__imageContainer">
                <MuiImageSlider images={images} classes={classes} fitToImageHeight arrowsBgHoverColor='transparent' />
            </div>
            <img 
            className="home__image"
            src='https://m.media-amazon.com/images/I/518xqgZYh2L._SR1242,450_.jpg'
            alt=""
            />
            <div className="home__container">
                <div className="home__row">
                    <div className="home__product">
                        <h3>Computers & Accessories</h3>
                        <div className="home__productImg">
                            <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg'/>
                        </div>
                        <p>shop now</p>
                    </div>
                    <div className="home__product">
                        <h3>Get fit at home</h3>
                        <div className="home__productImg">
                            <img src='https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg'/>
                        </div>
                        <p>shop now</p>
                    </div>
                    <div className="home__product">
                        <h3>Beauty Picks</h3>
                        <div className="home__productImg">
                            <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg'/>
                        </div>
                        <p>shop now</p>
                    </div>
                    <div className="home__product">
                        <h3>Shop Laptops & Tablets</h3>
                        <div className="home__productImg">
                            <img src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg'/>
                        </div>
                        <p>shop now</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
