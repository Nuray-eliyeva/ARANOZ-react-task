import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { TiShoppingCart } from "react-icons/ti";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";
import { IoMdMenu } from "react-icons/io";
function Navbar() {
    const [isOpen, setisOpen] = useState(false)


    return (
        <nav>
            <div className='navbar'>
                <div className="logo">
                    <IoMdMenu onClick={()=>setisOpen(!isOpen)} className='menu-icon' />
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
            </div>
            {
                isOpen && <menu>
                    <ul className='nav-ul-little'>
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
                </menu>
            }
        </nav>
    )
}

export default Navbar