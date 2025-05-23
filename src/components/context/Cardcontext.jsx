import React, { createContext, useEffect, useState } from 'react';

export const CardContext = createContext();

export default function CardProvider({ children }) {
  const [cartItems, setCartItems] = useState(()=>{
    const SavedCart = localStorage.getItem ('cartItems')
    return SavedCart ? JSON.parse(SavedCart) : [];
  });

  function IncreaseQuantity(IID) {
 setCartItems(p => p.map(item =>
  item.id ===IID ? {...item , quantity: item.quantity + 1} : item
 ))
}
   function DicreaseQuantity(IID){
    setCartItems(p => p.map(item =>
         item.id === IID ? {...item , quantity : item.quantity > 1 ? item.quantity- 1 : 1 } : item
        )
   )
  }

  function addToCart(item) {
    
    setCartItems(p => {
      const exists = p.some(cartItems => cartItems.id === item.id);
      if(exists){
      return p ;
      } else{
        return [...p , {...item , quantity: 1}] 
      }
    });
  }

  useEffect(()=>{
    localStorage.setItem('cartitems' , JSON.stringify(cartItems))
  }, [cartItems])


  function Removelitem (IID){
    const newcartItem = cartItems.filter((item)=>{
      return item.id !== IID
    })
    setCartItems(newcartItem)
  }


  return (
    <CardContext.Provider value={{ cartItems, addToCart ,  IncreaseQuantity , DicreaseQuantity, Removelitem }}>
      {children}
    </CardContext.Provider>
  );
}
