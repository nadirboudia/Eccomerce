import React, { createContext, useEffect, useState } from 'react';

export const CardContext = createContext();

export default function CardProvider({ children }) {
  const [cartItems, setCartItems] = useState(()=>{
    const SavedCart = localStorage.getItem ('cartItems')
    return SavedCart ? JSON.parse(SavedCart) : [];
  });

  function addToCart(item) {
    setCartItems((p) => [...p, item]);
  }

  useEffect(()=>{
    localStorage.setItem('cartItems' , JSON.stringify(cartItems))
  }, [cartItems])


  return (
    <CardContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CardContext.Provider>
  );
}
