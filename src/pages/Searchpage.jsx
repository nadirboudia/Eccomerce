import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import Pagetransition from '../components/Pagetransition';
import Product from '../components/slideproducts/Product';

function Searchpage() {
  const query = new URLSearchParams(useLocation().search).get('query');

  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`
        );
        const result = await response.json();
        setData(result.products || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (query?.trim()) {
      fetchData();
    }
  }, [query]);

  return (
    <Pagetransition key={query}>
      <div className="Category_products">
        {loading  ? (
          "Loading..."
        ) : data.length > 0 ? (
          <div className="container">
            <div className="topslide">
             <h2>All About {query} </h2>
            </div>

            <div className="products">
              {data.map((item) => (
                <div key={item.id} className="product-card">
                  <Product New={item} />
                </div>
              ))}
            </div>
          </div>
        ):   <div
  style={{
    textAlign: "center",
    fontWeight: 100,
    fontSize: "30px",
    padding: "20px",
    color: "#555"
  }}
  className="container"
>
  No products found.
</div>}
      </div>
    
    </Pagetransition>
  )
}

export default Searchpage;
