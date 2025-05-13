import React, { useEffect, useState } from 'react'
import Heroslider from '../components/Heroslider'
import Slideproduct from '../components/slideproducts/Slideproduct'
const categories =[
  "womens-watches",
  "laptops",
  "smartphones",
  "tablets",
  "mobile-accessories",
  "mens-watches",
]

function Home() {

const[products , setProducts]=useState({})
const[loading , setloading]=useState(true)

useEffect(() => {
  const controller = new AbortController();
  const signal = controller.signal;

  const fetchProducts = async () => {
    try {
      const results = await Promise.all(
        categories.map(async (category) => {
          const res = await fetch(`https://dummyjson.com/products/category/${category}`, { signal });
          const data = await res.json();
          return { [category]: data.products };
        })
      );

      const productsData = Object.assign({}, ...results);
      setProducts(productsData);
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Fetch aborted");
      } else {
        console.error("Error fetching", error);
      }
    } finally {
      setloading(false);
    }
  };

  fetchProducts();

  // ✅ Cleanup function
  return () => {
    controller.abort(); // cancels all fetch requests
  };
}, []);


console.log(products);

const macategories = categories.map((category)=>{
return(
  <Slideproduct description={category} title={category} key={category} data={products[category]} />
)
});
  return (

  

<div>
<Heroslider/> 
{loading ? (
      <p>Loading data, please wait...</p>
    ) : (
      <div>
        {macategories}
      </div>
    )}
</div>

  
  
  )
}

export default Home
