import Buttomheader from "./components/header/Buttomheader"
import Header from "./components/header/Header"
import Home from "./pages/Home"
import Slideproduct from "./components/slideproducts/Slideproduct"
import { Route , Routes} from "react-router"
import Productdetails from "./pages/Productdetails"
import Cart from "./pages/Cart"
import {Toaster} from 'react-hot-toast';
function App() {
 

  return (
  <>
<Header/>
<Buttomheader/>

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


  <Routes>
 <Route path="/cart" element={<Cart/>}/>
 <Route path="/" element={<Home/>} />
 <Route path="/products/:id" element={<Productdetails/>} />
  </Routes>


  </>
  )
}

export default App
