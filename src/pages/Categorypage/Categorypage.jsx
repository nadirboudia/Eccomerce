import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Product from "../../components/slideproducts/Product";
import "./category.css";
import Pagetransition from '../../components/Pagetransition';

function Categorypage() {
  const { Category } = useParams();
  const [categoryProduct, setCategoryProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${Category}`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryProduct(data)})
        .catch((error) => {
        console.error("Error fetching category products:", error);
      })
      .finally(() => setLoading(false)); 
      
  }
  
  
  , [Category]);

 console.log(categoryProduct);
  return (
   <Pagetransition key={Category}>
     <div className="Category_products">
   {loading ? "Loading..." : (
         <div className="container">
           <div className="topslide">
          <h2>{Category} : {categoryProduct.limit} </h2>
      <p>  {categoryProduct.products?.[0]?.description}  </p>
       
            
        
        </div>
        <div className="products">
          {categoryProduct.products.map((item) => (
          <div key={item.id} className="product-card">
         <Product New={item}/>
    
         </div>
          ))}
        </div>
      </div>
  
  )
  
}
</div>
   </Pagetransition>
  )}

export default Categorypage;
