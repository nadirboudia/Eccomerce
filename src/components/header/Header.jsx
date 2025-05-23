import React, { useContext } from 'react'
import { Link } from 'react-router'
import Logo from '../../images/React Ecommerce Reda Tech/img/logo.png'
import { FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import './header.css'
import { CardContext } from '../context/cardcontext';

function Header() {

const {cartItems} = useContext(CardContext)


  return (
    <div className='top_header'>
      <div className="container">
    <Link className='logo' to="/">
    <img src={Logo} alt="logo" />
     </Link>
     <form action="" className="search_box">
    <input type="text" name='search' id='search' placeholder='Search for products' />
    <button type='submit'><FaSearch  className='iconss'/></button>
     </form>
     <div className="header_icons">
      <div className='icon'>
      <CiHeart />
      <span className='count'>0</span>
      </div>
      <div className='icon'>
     <Link to='/cart'> <TiShoppingCart />
      <span className='count'>{cartItems.length}</span></Link>
      </div>
     </div>
      </div>
    </div>
  )
}

export default Header
