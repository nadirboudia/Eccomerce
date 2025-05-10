import Buttomheader from "./components/header/Buttomheader"
import Header from "./components/header/Header"
import Home from "./pages/Home"
import Slideproduct from "./components/slideproducts/Slideproduct"
import { Route , Routes} from "react-router"
import Productdetails from "./pages/Productdetails"
function App() {
 

  return (
  <>
<Header/>
<Buttomheader/>

  <Slideproduct/>

  <Routes>
 
 <Route path="/" element={<Home/>} />
 <Route path="/products/:id" element={<Productdetails/>} />
  </Routes>


  </>
  )
}

export default App
