import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
        <b> Welcome Here! At Ach-yuta LIFE, we are proud to offer you a seamless and convenient online shopping experience. Our  platform is designed to provide you with a wide range of products and services right at your fingertips.</b>
        <br /><br />
        <b>* Our Commitment </b>:  At Ach-yuta LIFE, we understand that the world is rapidly evolving, and so are the ways we shop. Our commitment is to embrace the digital age and provide our customers with a user-friendly, secure, and reliable online shopping platform. We strive to make your shopping journey as effortless and enjoyable as possible.
       <br />
        <b> * Secure Transactions </b>: Your trust and security are of utmost importance to us. Our E-Commerce platform employs advanced encryption and security measures to protect your personal and financial information. We partner with reputable payment gateways to ensure that your transactions are safe and secure. You can shop with confidence, knowing that your data is protected.
       <br />
       <b> * Convenient Delivery and Returns </b> : We understand the importance of prompt and reliable delivery. Our E-Commerce platform offers various shipping options to cater to your preferences, and we work diligently to ensure that your orders are delivered to your doorstep in a timely manner. We also have a hassle-free returns policy, allowing you to shop with peace of mind.
        <br /> <br />
       <b> We appreciate your trust and support as we continue to enhance our E-Commerce platform to meet your evolving needs. Thank you for choosing Ach-yuta LIFE as your online shopping destination. Happy shopping! </b>
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Mens's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelery</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage