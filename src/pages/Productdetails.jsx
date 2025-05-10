import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

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

    <div>
      jj
    </div>
  )
}

export default Productdetails
