import Buttomheader from "./components/header/Buttomheader"
import Header from "./components/header/Header"
import Home from "./pages/Home"
import Slideproduct from "./components/slideproducts/Slideproduct"
import { Route , Routes} from "react-router"
import Productdetails from "../src/pages/productDetails/Productdetails"
import Cart from "./pages/Cart"
import {Toaster} from 'react-hot-toast';
import Scroll from "./components/slideproducts/Scroll"
import { AnimatePresence } from "framer-motion"
import Categorypage from "./pages/Categorypage/Categorypage"
import Searchpage from "./pages/Searchpage"
import Fav from "./pages/Fav"
function App() {
 

  return (
  <>
<Header/>
<Buttomheader/>
<Scroll/>
  <Slideproduct/>
<Toaster
  position="bottom-right"
  reverseOrder={false}
 toastOptions={{
    style: {
      background: '#e9e9e9',
      borderRadius: '5px',
      color: '#000', // لا تنسى تحديد لون النص
      padding: '12px',
    },
  }}
  
/>

 <AnimatePresence mode="wait ">
  <Routes>
   
    <Route path="/product/:id" element={<Productdetails />} />
 <Route path="/cart" element={<Cart/>}/>
 <Route path="/favorites" element={<Fav/>}/>
 <Route path="/" element={<Home/>} />
 <Route path="/products/:id" element={<Productdetails/>} />
  <Route path="/search" element={<Searchpage/>} />
 <Route path="/Category/:Category" element={<Categorypage/>} />

  </Routes>
 </AnimatePresence>

  </>
  
  )
}

export default App
