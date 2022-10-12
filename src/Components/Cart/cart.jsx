import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './cart.css'
import { useEffect, useContext } from 'react';
import { AppContext } from '../../Context/context';

export default function Basic() {

  let { cart, cartlength, setCart, setCartlength } = useContext(AppContext)


  useEffect(() => {
    console.log(cart)
  })




  return (cart.length == 0 ? <div style={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center" }}>
    <h4>Your Cart is Empty</h4>
  </div> : <div style={{ marginTop: "70px" }} className="container main-cart-box">
    <h4>Shopping cart ({cart.length} Item)</h4>
    {cart.map((value, key) => {
      return <div className='col-12  main-card-container ' key={key}>
        <div className='row single-card' style={{ margin: "auto" }}>
          <div className='col-lg-2 col-md-2 align-center' style={{ display: "inline-block", textAlign: "left" }}>
            <img
              width={80}
              src={value.ImagePath}
            />
          </div>
          <div className='col-sm-12 col-md-4 col-lg-4 align-center' style={{ display: "inline-block" }}>
            <p style={{ textAlign: "left" }}>{value.ProductName}</p>
          </div>
          <div className='col-lg-2 col-md-2 col-sm-12 align-center' style={{ display: "inline-block" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <b>
                <p className='singlecart-price'>Rs{value.NewPrice}</p>
              </b>
              <p>x</p>
              <b>
                <p>{value.Quantity}</p>
              </b>

            </div>
          </div>

          <div className='col-lg-3 col-md-3 col-sm-12 align-center' style={{ display: "inline-block" }}>
            <b>
              <p className='cart-total-ptice'>Rs{value.TotalPrice}</p>
            </b>
          </div>
          <div className='col-lg-1 col-md-1 align-center' style={{ display: "inline-block", textAlign: "right" }}>
            <i class="fa-solid fa-trash cart-remove" onClick={() => {
              // console.log(value._id)
              let totalcart = JSON.parse(localStorage.getItem("emart_user_cart"))
              for (let cart of totalcart) {
                if (value._id == cart._id) {
                  cartlength -= cart.Quantity
                  setCartlength(cartlength)
                  totalcart.splice(totalcart.indexOf(cart), 1)
                  localStorage.setItem("emart_user_cart", JSON.stringify(totalcart));
                  setCart(totalcart)
                }
              }
              // console.log(totalcart)
            }}></i>
          </div>
        </div>

      </div>

    })}

    <div className='col-12  subtotal-container'>
      <div >
        <h6>Total</h6>
        <h6>Delivery Charges</h6>
        <h6>Tax</h6>
        <h6>Subtotal</h6>

        <button onClick={() => {
          localStorage.removeItem("emart_user_cart")
          setCart([])
          setCartlength(0)
        }}>Delete All</button>
        <button>Check out</button>
      </div>
    </div>
  </div>
  );
}