import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <>
        <div className="footer__top">
            <div className="footer__top1">
                <hr />
                <button>Sign In for better experience</button>
            </div>
            <div className="footer__top2">
                <p>Back to top</p>
            </div>
        </div>
        <div className="footer">
            <div className="footer__textContainer1">
                <div className="footer__text">
                    <h4>Get to Know Us</h4>
                    <p>About us</p>
                    <p>Careers</p>
                    <p>Get a Smile</p>
                </div>
                <div className="footer__text">
                    <h4>Connect with Us</h4>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
                <div className="footer__text">
                    <h4>Make Money with Us</h4>
                    <p>Sell on Amazon</p>
                    <p>Advertise Your Products</p>
                    <p>Become an Affiliate</p>
                </div>
                <div className="footer__text">
                    <h4>Let Us Help You</h4>
                    <p>Your Account</p>
                    <p>100% Purchase Protection</p>
                    <p>Help</p>
                </div>

            </div>
            <div className="footer__textContainer2">
                <div className="footer__text2">
                    <p>Amazon.com</p>
                    <p>Your Lists</p>
                    <p>Find a Gift</p>
                    <p>Browsing History</p>
                    <p>Customers Service</p>
                </div>
                <div className="footer__text2">
                    <p>Your Orders</p>
                    <p>Gift Cards</p>
                    <p>Your Account</p>
                    <p>Sell Products</p>
                </div>

            </div>
            <div className="footer__end">
                <img
                className="footer__logo"
                src="https://www.wtvq.com/wp-content/uploads/2020/02/Amazon.jpg"
                />
                <hr />
                <p>Conditions of Use & SalePrivacy NoticeInterest-Based Ads© 1996-2021, Amazon.com, Inc. or its affiliates</p>
            </div >
        </div>
        </>
    )
}

export default Footer
