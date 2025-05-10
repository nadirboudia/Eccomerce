import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import './productdetails.css'
import { TiShoppingCart } from "react-icons/ti";
import { CiHeart } from "react-icons/ci";
import { FaShare } from "react-icons/fa";

function Productdetails() {
    const {id} =useParams()
    console.log(id);
    const[product , setProduct]= useState(null)
    const[loading, setLoading]=useState(true)
    
useEffect(()=>{
    const fetchProduct=async()=>{
        try{
            const res =await fetch(`https://dummyjson.com/products/${id}`)
            const data = await res.json()
            setProduct(data)
            setLoading(false)
        }catch(error)
        {console.error('error fetching',error)}
        
    }
    fetchProduct()
},[id])

console.log(product)



if(loading) return <p>Loading... </p>
if(!product) return <p>Product Not found </p>


  return (

    <div className='itemdetails'>
     <div className="container">
           <div className="imagesitem">
        <div className="bigimage">
        <img  id="big_img" src={product.images[0]} alt={product.title} />
        </div>
        <div className="smalimage">
           {product.images.map((t , index)=>{
            return <img src={t} key={index} alt={product.title} onClick={()=>{
              document.getElementById("big_img").src=t 
            }}></img>
           })}
        </div>
            </div>



         <div className="detailsitem">
              <h1 className='name'>{product.title}</h1>
              <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStarHalfStroke />
                  </div>
               <p className='price'>{product.price}$</p>
               <h5> Availability :  <span>{product.availabilityStatus}</span> </h5>
               <h5> Brand :  <span>{product.brand}</span> </h5>
              <p className='para'>{product.description}</p>
               <h5 className='stock'> <span> Hurry Up ! Only {product.stock}  Products left in stock . </span></h5>

              <button className='btn'>Add to cart <TiShoppingCart /></button>
              <div className='icon'>
                    <CiHeart />
                    <FaShare />
               </div>
        </div>

     </div>
    </div>
  )
}

export default Productdetails
