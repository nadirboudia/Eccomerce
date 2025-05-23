import  { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import "./productdetails.css";
import { TiShoppingCart } from "react-icons/ti";
import { CiHeart } from "react-icons/ci";
import { FaShare } from "react-icons/fa";
import Slideproduct from "../components/slideproducts/Slideproduct";
import { CardContext } from "../components/context/Cardcontext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

function Productdetails() {
  const naavigate = useNavigate();
  const { addToCart } = useContext(CardContext);
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [looading, setLoading] = useState(true);
  const [relating, setRelating] = useState([]);
  const [lloading, setLloading] = useState(true);
  const [check, setCheck] = useState(false);

    
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
      return null ;
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
                naavigate("/cart")
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
      )
    }

    setClickedProductId(product.id)
    
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
    <div>
      <div className="itemdetails">
        <div className="container">
          <div className="imagesitem">
            <div className="bigimage">
              <img id="big_img" src={product.images[0]} alt={product.title} />
            </div>
            <div className="smalimage">
              {product.images.map((t, index) => {
                return (
                  <img
                    src={t}
                    key={index}
                    alt={product.title}
                    onClick={() => {
                      document.getElementById("big_img").src = t;
                    }}
                  ></img>
                );
              })}
            </div>
          </div>

          <div className="detailsitem">
            <h1 className="name">{product.title}</h1>
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStarHalfStroke />
            </div>
            <p className="price">{product.price}$</p>
            <h5>
              {" "}
              Availability : <span>{product.availabilityStatus}</span>{" "}
            </h5>
            <h5>
              {" "}
              Brand : <span>{product.brand}</span>{" "}
            </h5>
            <p className="para">{product.description}</p>
            <h5 className="stock">
              {" "}
              <span>
                {" "}
                Hurry Up ! Only {product.stock} Products left in stock .{" "}
              </span>
            </h5>

            <button
              className={`btn ${clickedProductId === product.id ? "incart" : "" }`}
              onClick={() => {  HandleAddtoCart()}}
               disabled={clickedProductId === product.id}>
            {clickedProductId === product.id  ? `item In cart` : "Add to cart"}   <TiShoppingCart />
            </button>
            <div className="icon">
              <CiHeart />
              <FaShare />
            </div>
          </div>
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
  );
}

export default Productdetails;
