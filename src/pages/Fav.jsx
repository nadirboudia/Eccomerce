import { useContext } from "react";
import "./Fav.css";
import { CardContext } from "../components/context/Cardcontext";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router";
import Pagetransition from "../components/Pagetransition";

function Cart() {
  const { Favorites, removeFromFavorites } = useContext(CardContext);

  return (
    <Pagetransition>
      <div className="checkout">
        <div className="ordersummary">
          <h1 className="ff"> Favorites</h1>

          <div className="Items">
            {Favorites.length === 0 ? (
              <p>Your Cart is empty </p>
            ) : (
              Favorites.map((item, index) => (
                <div className="cart" key={index}>
                  <div className="firstHalf">
                    <div className="imge">
                      <img src={item.images[0]} alt="" />
                    </div>
                    <div className="content">
                      <Link to={`/product/${item.id}`}> {item.title}</Link>

                      <p>${item.price}</p>
                    </div>
                  </div>
                  <div className="deleteitem">
                    <FaTrashAlt
                      onClick={() => {
                        removeFromFavorites(item.id);
                      }}
                    />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </Pagetransition>
  );
}

export default Cart;
