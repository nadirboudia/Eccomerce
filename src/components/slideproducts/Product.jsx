import React, { useState, useContext } from 'react';
import { FaRegStarHalfStroke, FaStar, FaCartArrowDown, FaCheck, FaShare } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { Link, useNavigate } from 'react-router';
import "./slidproduct.css";
import { CardContext } from '../context/Cardcontext';
import toast from 'react-hot-toast';

function Product({ New }) {
  const navigate = useNavigate();
  const { addToCart, cartItems ,  addToFavorites , Favorites , removeFromFavorites} = useContext(CardContext);
  const [clicked, setClicked] = useState(false);


    const isInFav = Favorites.some(i => i.id === New.id);

function Handleaddtofav() {
    if(isInFav) {
      removeFromFavorites(New.id)
      toast.error("Removed from favorites");
      
    }
      else {
        addToFavorites(New);
      toast.success(` ${New.title} added to favorites`)
      handleClick();
    }
  }

  // Function to play sound//

  const playSound = () => {
    const audio = new Audio('/notification.mp3'); // Make sure the file exists in the public folder
    audio.play();
  };

  const handleClick = () => {
    playSound();
  };

  const HandleAddtoCart = () => {
    addToCart(New);

    if (clicked) return null;

    toast.success(
      <div className='toastcontent'>
        <div className="toastimg">
          <img src={New.images[0]} alt="Product" />
        </div>
        <div className="toastdetails">
          <h3>{New.title}</h3>
          <h5>Added To Cart</h5>
          <button
            className='btn'
            onClick={() => {
              navigate("/cart");
            }}
          >
            View Cart
          </button>
          {handleClick()}
        </div>
      </div>,
      {
        duration: 3500,
        onClose: () => setClicked(false)
      }
    );

    setClicked(true);
  };

  const isInCart = cartItems.some(i => i.id === New.id);

  if (!New) return null;

  return (
    <div className={`product ${isInCart ? "incart" : ""}`}>
      <Link to={`/products/${New.id}`}>
        {isInCart && (
          <span className='status'>
            In cart <FaCheck />
          </span>
        )}

        <div className="img_product">
          <img src={New.images[0]} alt={New.title} />
        </div>

        <div className="name_product">
          <p>{New.title}</p>
        </div>

        <div className="stars">
          <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke />
        </div>

        <p className='price'><span>{New.price}$</span></p>

        <div className="icons">
          <span className='btn_cart' onClick={HandleAddtoCart}><FaCartArrowDown /></span>
          <span className={`${isInFav ? "inFav" : ""   }`} onClick={Handleaddtofav}><CiHeart /></span>
          <span><FaShare /></span>
        </div>
      </Link>
    </div>
  );
}

export default Product;
