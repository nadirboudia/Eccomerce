
import { TiShoppingCart } from "react-icons/ti";
import { CiHeart } from "react-icons/ci";
import { FaShare } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
function Productinfo({ product, HandleAddtoCart, clickedProductId }) {
   
  return (
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
  )
}

export default Productinfo
