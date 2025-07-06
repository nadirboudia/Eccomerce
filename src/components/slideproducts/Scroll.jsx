import  { useEffect } from 'react'
import { useLocation } from 'react-router'

function Scroll() {
    const {pathname} =useLocation();

    useEffect(()=>{
        window.scrollTo({
            top: 230, 
            behavior:"smooth"
        })
    },[pathname])
  return null;
}

export default Scroll

