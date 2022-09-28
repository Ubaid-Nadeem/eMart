import { Image } from 'antd';
import './productdetails.css'

function ViewProduct() {


    return <>
        <div>
            <div class="card">
                <div class="container-fliud">
                    <div class="wrapper row">
                        <div class="preview col-md-6">

                            <div class="preview-pic tab-content">

                                <div >
                                    <Image
                                        class="tab-pane active" id="pic-1"
                                        src="https://www.kablewala.com.bd/images/detailed/186/168__1_.jpeg"
                                        style={{ textAlign: "right" }}
                                        width="330px"
                                        height="330px"
                                    />

                                </div>
                            </div>

                        </div>
                        <div class="details col-md-6">
                            <h3 class="product-title">men's shoes fashion</h3>
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
                            <p class="product-description">
                                Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem!
                                Repudiandae et! </p>
                            <del> <p>Rs250 </p></del>
                            <h5 class="price">Rs: 180</h5>
                            <p class="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
                            <div class="action">
                                <button class="add-to-cart btn btn-default" type="button">add to cart</button>
                                <button class="like btn btn-default" type="button"><span class="fa fa-heart"></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ViewProduct;