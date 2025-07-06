import { useEffect, useState } from 'react';
import Heroslider from '../components/Heroslider';
import Slideproduct from '../components/slideproducts/Slideproduct';
import Pagetransition from '../components/Pagetransition';

const categories = [
  "womens-watches",
  "laptops",
  "smartphones",
  "tablets",
  "mobile-accessories",
  "mens-watches",
];

function Home() {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchProducts = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            try {
              const res = await fetch(`https://dummyjson.com/products/category/${category}`, { signal });
              const data = await res.json();
              return { [category]: data.products };
            } catch (error) {
              if (error.name === "AbortError") {
                console.log(`✅ Fetch for ${category} was aborted.`);
              } else {
                console.error(`❌ Error fetching ${category}:`, error);
              }
              return { [category]: [] }; // نرجع قيمة فاضية بدل ما نوقف كل شيء
            }
          })
        );

        const productsData = Object.assign({}, ...results);
        setProducts(productsData);
      } catch (error) {
        console.error("🔥 Unexpected error in fetchProducts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    return () => {
      controller.abort(); // عند تغيير الصفحة نوقف كل الطلبات
    };
  }, []);

  const renderedCategories = categories.map((category) => (
    <Slideproduct
      key={category}
      title={category}
      description={category}
      data={products[category] || []} // نضمن أنه ما يعطي undefined
    />
  ));
console.log("✅ Home component rendered");
console.log("✅ Loading:", loading);
console.log("✅ Products:", products);
  return (
    <Pagetransition>
      <div>
        <Heroslider />
        {loading ? (
          <p style={{ textAlign: "center", padding: "20px" }}>Loading data, please wait...</p>
        ) : (
          <div>{renderedCategories}</div>
        )}
      </div>
    </Pagetransition>
  );
}

export default Home;
//       )}