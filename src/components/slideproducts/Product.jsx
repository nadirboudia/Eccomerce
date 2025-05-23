import React from 'react'
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaShare } from "react-icons/fa";
import { Link } from 'react-router';
import "./slidproduct.css"
import { useContext } from 'react';
import { CardContext } from '../context/Cardcontext';
import { FaCheck } from "react-icons/fa"; 
import toast from 'react-hot-toast';

function product({New}) {

const { addToCart ,cartItems }= useContext(CardContext);


const playSound = () => {
    const audio = new Audio('/notification.mp3'); // تأكد من وضع الملف في public
    audio.play();
  };

  const handleClick = () => {
    playSound(); // شغل الصوت
    
  };

  function HandleAddtoCart(){
    addToCart(New)
 handleClick ()
    toast.success(
      <div className='toastcontent'>
       <div className="toastimg">
         <img src={New.images[0]}  />
       </div>
       <div className="toastdetails">
        <h3>{New.title}</h3>
        <h5>Added To cart </h5>
        <button className='btn'>View Cart</button>
       </div>
      </div>
      
,{duration : 3500}
    )
  }
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
   HandleAddtoCart()
  }}><FaCartArrowDown /></span>
 <span> <CiHeart /></span>
  <span><FaShare /></span>
  </div>
    </Link>
    </div>
  )
}

export default product
