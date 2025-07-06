import React, { useEffect, useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { Link, useLocation } from 'react-router';
import { FaSignInAlt } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
const Navlinks =[
{id:1 , title:"Home" , link:"/"},
{id:2, title:"About" , link:"/about"},
{id:3 , title:"Accessoiries" , link:"/accessoiries"},
{id:4, title:"Blog" , link:"/blog"},
{id:5 , title:"Contact" , link:"/contact"},



] 

function Buttomheader() {
  const location =useLocation()
  const[categories , setCategories]=useState([])
  const[showlist , setShowlist] =useState(false)

useEffect(()=>{
setShowlist(false) 
},[location])

  useEffect(()=>{
    fetch('https://dummyjson.com/products/categories')
    .then((res)=>res.json())
    .then((data)=>setCategories(data))
  },[])

 

  const Category = categories.map((t)=>{
    return <Link key={t.slug} to={`/category/${t.slug}`}>{t.name} </Link>
    
  })
  const Links = Navlinks.map((t)=>{
    return <li key={t.id}  className={location.pathname === t.link ? "active" : ""} ><Link to={t.link} >{t.title}</Link></li>
    
  })
  return (
    <div className='btm_header'>
      <div className="container">


        <nav className='nav'>

          <div className="category_nave">
            
            <div className="category_button" onClick={()=>{
              setShowlist(!showlist)
            }}>
            <IoMenu className='text-white text-2xl'/>
            <p >Browse Category</p>
            <  IoIosArrowDropdownCircle  className='text-white text-2xl  '/>
            </div>

             <div className={`category_navelist ${showlist ? "active" : "inactive"}`}>
          { Category}
            </div>

          </div>

        <div className="nav_links">
      <ul> 
         <li>  {Links}</li> 
         
      </ul>
        </div>
        </nav>
        




        <div className="header_icon">
       
          <Link to='/'><FaSignInAlt /></Link>
          <Link to='/'><FaUserPlus /></Link>
     


        </div>
      </div>
  
    </div>
  )
}

export default Buttomheader
