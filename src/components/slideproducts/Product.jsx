import React from 'react'
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaShare } from "react-icons/fa";
import Productdetails from '../../pages/Productdetails';
import { Link } from 'react-router';
import "./slidproduct.css"
import { useContext } from 'react';
import { CardContext } from '../context/cardcontext';
import { FaCheck } from "react-icons/fa"; 

function product({New}) {

const { addToCart ,cartItems }=useContext(CardContext);

  const isIncart = cartItems.some(i => i.id === New.id);

  return (
    
    <div className={`product ${isIncart ? "incart" : ""}`} >
      <Link to={`/products/${New.id}`}>
    <span className='status'> In cart <FaCheck /></span>

      <div className="img_product">
    <img src={New.images[0]}  />
      </div>
      <div className="name_product">
        <p>{New.title}</p>
      </div>
      <div className="stars">
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaRegStarHalfStroke />
      </div>
      
  <p className='price'><span>{New.price}$</span></p>
  <div className="icons">
  <span className='btn_cart' onClick={()=>{
    addToCart(New)
  }}><FaCartArrowDown /></span>
 <span> <CiHeart /></span>
  <span><FaShare /></span>
  </div>
    </Link>
    </div>
  )
}

export default product
