import { FaSearch } from "react-icons/fa";
import {  useState , useEffect, use} from 'react'
import { Link, useNavigate , useLocation } from "react-router";


function Searchbox() {
  
  const [searchTerm, setSearchTerm] = useState("");
  const Navigate = useNavigate();
const [suggestions, setSuggestions] = useState([]);

const location = useLocation();



  function Handlesubmit(event) {
      event.preventDefault();
      if (searchTerm.trim()) {
         Navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
    }
    setSuggestions([])
  } 




  useEffect(() => {

    if (!searchTerm.trim()) {
      setSuggestions([]);
      return; 
    }

  
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`);
        const result = await response.json();
        setSuggestions(result.products.slice(0,5) || []); 
      } catch (error) {
        console.error("Error fetching data:", error);
      } 
    };
 


 const debounuce= setTimeout(() => { 
     fetchData();


} , 300 )

return () => {
      clearTimeout(debounuce);
    };

  }, [searchTerm]);
  console.log(suggestions);

useEffect(() => { 
  setSuggestions([]);
}, [location.pathname]);

  return (
   <div className="searchbox">
      <form  onSubmit={Handlesubmit} action="" className="search_box">
        <input autoComplete="off" type="text" name='search' id='search' placeholder='Search for products' onChange={(e)=>{
          setSearchTerm(e.target.value);
        }}/> 
        <button type='submit'><FaSearch  className='iconss'/></button>
         </form>
     <div className="sugesstions">
   {

suggestions.length > 0 && (
<ul className="suggestions-list">
{suggestions.map((item)=>{
return (
  <Link to={`/product/${item.id}`}>
        <li key={item.id}>
      <img src={item.images[0]}  />
  <span>{item.title }</span>
  </li>

    </Link>
)
})}

</ul>
   

   


)}

</div>
    </div>
    )
  }

export default Searchbox
