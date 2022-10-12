import { Image } from 'antd';
import { useEffect, useState, useContext } from 'react'
import './productdetails.css'
import { useSearchParams } from 'react-router-dom';
import { AppContext } from '../../Context/context';
import Spinner from '../../Spinner/spinner';
function ViewProduct() {

    let { loader, setLoader, products, setProducts, cart, setCart, cartlength, setCartlength, } = useContext(AppContext)
    let [searchParams] = useSearchParams();
    const id = [...searchParams][0][1]
    const HTTP = "https://emart-server-1.herokuapp.com/"

    const [productView, setProductView] = useState(null)

    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");


        var raw = JSON.stringify({
            id
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${HTTP}viewproduct`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setProductView(result)
            })
            .catch(error => console.log('error', error));

    }, [])

    return <>
        {productView == null ? <Spinner /> :
            <div>
                <div class="card">
                    <div class="container-fliud preview-container">
                        <div class="wrapper row">
                            <div class="preview col-md-6">

                                <div class="preview-pic tab-content">


                                    <Image
                                        class="tab-pane active" id="pic-1"
                                        src={productView.ImagePath}
                                        max-width="330px"
                                        height="330px"
                                    />


                                </div>

                            </div>
                            <div class="details col-md-6">
                                <h3 class="product-title">{productView.ProductName}</h3>
                                <div class="rating">
                                    <div class="stars">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                    </div>
                                    <span class="review-no">41 reviews</span>
                                </div>
                                <p class="product-description"> {productView.ProductDetails} </p>
                                {productView.OldPrice ? <del> <p>Rs {productView.OldPrice}</p></del> : <p></p>}
                                <h5 class="price">Rs {productView.NewPrice}</h5>
                                <p class="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
                                <div class="action">
                                    <button class="add-to-cart btn btn-default" type="button"
                                        onClick={() => {
                                            // setCartlength()
                                            cartlength++
                                            setCartlength(cartlength)

                                            let match = false
                                            for (let value of cart) {
                                                if (productView._id == value._id) {
                                                    match = true
                                                    value.Quantity = value.Quantity + 1
                                                    value.TotalPrice = value.NewPrice * value.Quantity
                                                    setCart(cart)
                                                    localStorage.setItem("emart_user_cart", JSON.stringify(cart))
                                                }
                                            }

                                            if (!match) {
                                                productView.Quantity = 1
                                                productView.TotalPrice = productView.NewPrice * productView.Quantity
                                                setCart((list => [...list, productView]))

                                                // localStorage.setItem("emart_user_cart", JSON.stringify(cart))
                                                let getCart = JSON.parse(localStorage.getItem("emart_user_cart")) || []
                                                console.log(getCart)
                                                getCart.push(productView)
                                                localStorage.setItem("emart_user_cart", JSON.stringify(getCart))
                                            }


                                        }}
                                    >add to cart</button>
                                    <button class="like btn btn-default" type="button">
                                        {/* <span class="fa fa-heart"></span> */}
                                        buy now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        }
    </>
}

export default ViewProduct;