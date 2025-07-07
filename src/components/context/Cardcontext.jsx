import { createContext, useEffect, useState } from 'react';

export const CardContext = createContext();




export default function CardProvider({ children }) 
{
// Favorites //
  
const [Favorites, setFavorites] = useState(() => {
const savedFavorites = localStorage.getItem('favorites');
return savedFavorites ? JSON.parse(savedFavorites) : [];
});

//remove from favorites function
function removeFromFavorites(itemId) {
setFavorites((prev) => prev.filter((item) => item.id !== itemId));

}



function addToFavorites(item) {
  setFavorites((prev)=>{
if(prev.some((i) => i.id === item.id)) return prev;
return [...prev , item ];
})}

useEffect(() => {
localStorage.setItem("favorites" , JSON.stringify(Favorites));
}
, [Favorites]);

  const [cartItems, setCartItems] = useState(()=>{
    const SavedCart = localStorage.getItem ('cartItems')
    return SavedCart ? JSON.parse(SavedCart) : [];
  });

  // increase and decrease quantity functions
  // increase quantity function
  function IncreaseQuantity(IID) {
 setCartItems(p => p.map(item =>
  item.id ===IID ? {...item , quantity: item.quantity + 1} : item
 ))
}
  // decrease quantity function
   function DicreaseQuantity(IID){
    setCartItems(p => p.map(item =>
         item.id === IID ? {...item , quantity : item.quantity > 1 ? item.quantity- 1 : 1 } : item
        )
   )
  }
  // add to cart function
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

  // remove item function
  function Removelitem (IID){
    const newcartItem = cartItems.filter((item)=>{
      return item.id !== IID
    })
    setCartItems(newcartItem)
  }


  return (
    <CardContext.Provider value={{ cartItems, addToCart ,  IncreaseQuantity , DicreaseQuantity, Removelitem, Favorites , addToFavorites ,  removeFromFavorites }}>
      {children}
    </CardContext.Provider>
  );
}