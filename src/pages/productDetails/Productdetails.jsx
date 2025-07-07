import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import "../productDetails/productdetails.css";
import Slideproduct from "../../components/slideproducts/Slideproduct";
import { CardContext } from "../../components/context/Cardcontext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import Productimages from "./productimages";
import Productinfo from "./Productinfo";
import Pagetransition from "../../components/pagetransition";

function Productdetails() {
  const naavigate = useNavigate();
  const { addToCart } = useContext(CardContext);
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [looading, setLoading] = useState(true);
  const [relating, setRelating] = useState([]);
  const [lloading, setLloading] = useState(true);

  const [clickedProductId, setClickedProductId] = useState(null);

  const playSound = () => {
    const audio = new Audio("/notification.mp3");
    audio.play();
  };

  const handleClick = () => {
    playSound();
  };

  const HandleAddtoCart = () => {
    addToCart(product);

    if (clickedProductId === product.id) {
      return null;
    } else {
      toast.success(
        <div className="toastcontent">
          <div className="toastimg">
            <img src={product.images[0]} />
          </div>
          <div className="toastdetails">
            <h3>{product.title}</h3>
            <h5>Added To Cart</h5>
            <button
              className="btn"
              onClick={() => {
                naavigate("/cart");
              }}
            >
              View Cart
            </button>
            {handleClick()}
          </div>
        </div>,
        {
          duration: 3500,
        }
      );
    }

    setClickedProductId(product.id);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("error fetching", error);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (!product) return;

    const controller = new AbortController();
    const signal = controller.signal;

    fetch(`https://dummyjson.com/products/category/${product.category}`, {
      signal,
    })
      .then((res) => res.json())
      .then((data) => {
        setRelating(data.products);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("error fetching", error);
        }
      })
      .finally(() => {
        setLloading(false);
      });

    return () => {
      controller.abort();
    };
  }, [product?.category]);

  if (looading) return <p>Loading... </p>;
  if (!product) return <p>Product Not found </p>;

  return (
    <Pagetransition key={id}>
      <div>
        <div className="itemdetails">
          <div className="container">
            <Productimages Product={product} />

            <Productinfo
              product={product}
              HandleAddtoCart={HandleAddtoCart}
              clickedProductId={clickedProductId}
            />
          </div>
        </div>

        {lloading ? (
          <p>isLoading...</p>
        ) : (
          <Slideproduct
            key={product.category}
            data={relating}
            title={product.category.replace("-", "")}
          />
        )}
      </div>
    </Pagetransition>
  );
}

export default Productdetails;
