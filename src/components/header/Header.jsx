import React, { useContext } from 'react'
import { Link } from 'react-router'
import Logo from '../../images/React Ecommerce Reda Tech/img/logo.png'

import { CiHeart } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import './header.css'
import { CardContext } from '../context/Cardcontext';
import Searchbox from './Searchbox';

function Header() {

const {cartItems , Favorites} = useContext(CardContext)


  return (
    <div className='top_header'>
      <div className="container">
    <Link className='logo' to="/">
    <img src={Logo} alt="logo" />
     </Link>
   <Searchbox/>
     <div className="header_icons">
      <Link to="/favorites">
      <div className='icon'>
      <CiHeart />
      <span className='count'>{Favorites.length}</span>
      </div>
      </Link>
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
