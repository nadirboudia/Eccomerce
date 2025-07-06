  import  { useContext } from 'react'
  import './Cart.css'
  import { CardContext } from '../components/context/Cardcontext'
  import { FaTrashAlt } from "react-icons/fa";
  import { Link} from 'react-router';
  import Productdetails from '../pages/productDetails/Productdetails';
  import Pagetransition from '../components/pagetransition';




  function Cart() {


    
    const{ cartItems ,  IncreaseQuantity , DicreaseQuantity , Removelitem} = useContext(CardContext)
    

  let total = parseFloat(cartItems.reduce((prev, item) => prev + item.price*item.quantity, 0).toFixed(2));


    return (
  <Pagetransition>
        <div className='checkout'>
        <div className='ordersummary'>
        <h1 className='ff'> Order Summary</h1>

        <div className='Items'>
      {cartItems.length === 0 ? (
        <p>Your Cart is empty </p>
      ) : cartItems.map((item , index)=>(
        <div className="cart" key={index}>
          <div className="firstHalf">
            <div className="imge">
            <img src={item.images[0]} alt="" />
          </div>
          <div className="content">
      <Link to={`/product/${item.id}`}>  {item.title}</Link>
          
            <p>
              ${item.price}
            </p>
            <div className="quantitycontole">
              <button onClick={()=>{
                DicreaseQuantity(item.id)
              }}>-</button>
              <span>{item.quantity}</span>
              <button onClick={()=>{
                IncreaseQuantity(item.id)
              }}>
              +
              </button>
            </div>
          </div>
        

          </div>
            <div className="deleteitem">
          <FaTrashAlt onClick={()=>{
            Removelitem(item.id)
          }} />

            </div>
        </div>
      )) }

        </div>


      <div className="total">
          <p>Total</p>
          <span className='totalchekout'>${total} </span>
      </div>

      
        <div className="btn_div">
          <button type='submit' className='hh'> Place Order</button>

        </div>



        </div>
      
      </div>
  </Pagetransition>
    )
  }

  export default Cart
  