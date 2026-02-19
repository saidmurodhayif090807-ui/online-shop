import React from 'react'
import './Navbar.scss'
import { NavLink } from 'react-router-dom'
import { CiCreditCard1, CiHeart, CiSearch, CiShoppingBasket, CiUser } from 'react-icons/ci'
function Navbar() {
    return (
        <div className='Navbar'>
            <h1 className='brand_name'><NavLink to={'/'}>Online-market</NavLink></h1>
            <div className="links">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'login_register'}>My account</NavLink>
                <a href="">Shop</a>
                <a href="">Products</a>
                <a href="">Block</a>
                <a href="">Page</a>
            </div>
            <div className="scrs">
                <button><CiSearch className='nav_icons'/></button>
                <button><CiUser className='nav_icons'/></button>
                <button><CiHeart className='nav_icons'/></button>
                <button><CiShoppingBasket className='nav_icons'/></button>
            </div>
        </div>
    )
}

export default Navbar
