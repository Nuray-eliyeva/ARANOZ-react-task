import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TiShoppingCart } from "react-icons/ti";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";
import axios from 'axios';
const Home = () => {
  const [data, setdata] = useState([])
  useEffect(() => {
   axios.get("http://localhost:8000/users")
   .then(res=>setdata(res.data))
  }, [data])
  
  return (
    <>
      <div className="head">
        <div className="container">
          <nav>
            <div className="logo">
              <img src="https://preview.colorlib.com/theme/aranoz/img/logo.png.webp" alt="" />
            </div>
            <ul className='nav-ul'>
              <li>Home</li>
              <li className='dropdown'  >Shop <GoChevronDown />
              <ul className='dropdown-item'>
                  <li>Shop Catagory</li>
                  <li>Product Details</li>
                </ul>
              </li>
              <li className='dropdown'  >Pages <GoChevronDown />
                <ul className='dropdown-item'>
                  <li>Login</li>
                  <li>Tracking</li>
                  <li>Product</li>
                  <li>Shopping Card</li>
                  <li>Confirmation</li>
                  <li>Element</li>
                </ul>
              </li>
              <li className='dropdown'>Blog <GoChevronDown />
                <ul className='dropdown-item'>
                  <li>Blog</li>
                  <li>Single Blog</li>
                </ul>
              </li>
              <li>Contact</li>
            </ul>
            <div className="nav-icons">
              <CiSearch /><CiHeart /><TiShoppingCart />
            </div>
            <Link to={'/admin'} className='admin'>Admin</Link>
          </nav>
          <header>
            <div className="row">
              <div className="col-lg-4"><h1>WOOD & CLOTH SOFA</h1><p className='mb-5 mt-5'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et rem quos fugit? Quos iste ipsum quis praesentium, repellendus officiis maxime.</p>
                <button className='btn'>BUY NOW</button></div>
              <div className="col-lg-8 sofa-img"><img src="https://preview.colorlib.com/theme/aranoz/img/banner_img.png.webp" alt="" /></div>
            </div>
          </header>
        </div>
      </div>

      <div className="featured">
        <div className="container">
          <h3 className='mb-5'> Featured Catagory</h3>
          <div className="row">
            <div className="col-lg-7 feature-card">
              <div className='row'>

                <div className="feature-txt col-lg-6">
                  <span>Premium Qualty</span>
                  <h4>Latest Foam Sofa</h4>
                </div>
                <div className="feature-img col-lg-6">
                  <img src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_1.png.webp" alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-5  feature-card">
              <div className='row'>
                <div className="feature-txt col-lg-6">
                  <span>Premium Qualty</span>
                  <h4>Latest Foam Sofa</h4>
                </div>
                <div className="feature-img col-lg-6">
                  <img src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_2.png.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5  feature-card">
              <div className='row'>
                <div className="feature-txt col-lg-6">
                  <span>Premium Qualty</span>
                  <h4>Latest Foam Sofa</h4>
                </div>
                <div className="feature-img col-lg-6">
                  <img src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_3.png.webp" alt="" />
                </div>
              </div>

            </div>
            <div className="col-lg-7 feature-card">

              <div className="feature-txt col-lg-6">
                <span>Premium Qualty</span>
                <h4>Latest Foam Sofa</h4>
              </div>
              <div className="feature-img col-lg-6 ">
                <img src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_4.png.webp" alt="" />
              </div>
            </div>


          </div>
        </div>
      </div>
      <div className="awasome">
        <div className="container">
          <div className="awasome-ctr">
          <h3 className='awasome-head'>Awasome</h3><span >Shop</span>
            <div className="row">
            {/*----MAP-----*/
              data.map(item => {
                return (
                  <div className="col-lg-3 col-md-4 col-sm-6 awasome-card" key={item.id}>
                    <div className='photo'> <img src={item.file} alt="" /></div>
                    <h4 className='mb-3 mt-3 '>{item.name}</h4>
                    <span className='awasome-span'>${item.cost}</span>
                  </div>
                )
              }
              )}
          </div>
        </div>
      </div>
      </div>
       <div className="subscribe">
        <div className="subs-center">
          <span>JOIN OUR NEW SELLETLER</span>
          <h1 className='mb-4 mt-4'>Subscribe to get Updated width new offer</h1>
          <div className="subs"><input type="email" placeholder='Enter Email Address'  /> <button className='btn'>SUBSCRIBE NOW</button></div>
        </div>
       </div>
       <div className="logos">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 logo-item "><img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_1.png.webp" alt="" /></div>
            <div className="col-lg-2 logo-item "><img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_2.png.webp" alt="" /></div>
            <div className="col-lg-2 logo-item "><img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_3.png.webp" alt="" /></div>
            <div className="col-lg-2 logo-item "><img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_1.png.webp" alt="" /></div>
            <div className="col-lg-2 logo-item "><img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_5.png.webp" alt="" /></div>
            <div className="col-lg-2 logo-item "><img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_3.png.webp" alt="" /></div>
         </div>
          <div className="row">
            <div className="col-lg-2 logo-item "><img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_1.png.webp" alt="" /></div>
            <div className="col-lg-2 logo-item "><img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_2.png.webp" alt="" /></div>
            <div className="col-lg-2 logo-item "><img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_3.png.webp" alt="" /></div>
            <div className="col-lg-2 logo-item "><img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_1.png.webp" alt="" /></div>
            <div className="col-lg-2 logo-item "><img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_5.png.webp" alt="" /></div>
            <div className="col-lg-2 logo-item "><img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_3.png.webp" alt="" /></div>
          </div>
        </div>
       </div>

       <div className="last">
         <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-3">
                  <span>Top Products</span>
                  <ul>
                    <li>Managed Website</li>
                    <li>Manage Reputation</li>
                    <li>Power Tools</li>
                    <li>Marketing Service</li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <span>Quick Links</span>
                  <ul>
                    <li>Jobs</li>
                    <li>Brand Assets</li>
                    <li>Investor Relations</li>
                    <li>Terms of Service</li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <span>Features</span>
                  <ul>
                  <li>Jobs</li>
                    <li>Brand Assets</li>
                    <li>Investor Relations</li>
                    <li>Terms of Service</li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <span>Resources</span>
                  <ul>
                    <li>Managed Website</li>
                    <li>Manage Reputation</li>
                    <li>Power Tools</li>
                    <li>Marketing Service</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <span>Newsletter</span>
              <p>Heaven fruitful doesn't over lesser in days. Appear creeping</p>
              <div className="subs"><input type="email" placeholder='Enter Email Address'  /> <button className='btn'>SUBSCRIBE NOW</button></div>
            </div>
          </div>
         </div>
       </div>
       <footer>
        <p>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</p>
       </footer>
    </>

  )
}

export default Home