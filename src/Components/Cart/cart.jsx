import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './cart.css'
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import { Image } from 'antd';
export default function Basic() {


  const Carts = [{
    Image: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp',
    ProductName: 'Iphone 11 pro',
    Details: '256GB, Navy Blue',
    Price: 900,
    Quantity: 2
  }]


  return (Carts.length == 0 ? <div>
    <h1>Your Cart is Empty</h1>
  </div> :
    < section className="h-100 h-custom" style={{ backgroundColor: "#eee" }
    }>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard>
              <MDBCardBody className="p-4">
                <MDBRow>
                  <MDBCol lg="7">
                    <MDBTypography tag="h5" className='text-left'>
                      <a href="#!" className="text-body ">
                        <MDBIcon fas icon="long-arrow-alt-left me-2" /> Continue
                        shopping
                      </a>
                    </MDBTypography>

                    <hr />

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1 text-left">Shopping cart</p>
                        <p className="mb-0">You have {Carts.length} items in your cart</p>
                      </div>

                    </div>
                    {Carts.map((value, key) => {
                      return <MDBCard className="mb-3">
                        <MDBCardBody>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <Image
                                  width={60}
                                  src={value.Image}
                                />
                                {/* <MDBCardImage
                                  src={value.Image}
                                  fluid className="rounded-3" style={{ width: "65px" }}
                                  alt="Shopping item" /> */}
                              </div>
                              <div className="ms-3 text-left" >
                                <MDBTypography tag="h6" style={{ fontWeight: 'bold' }}>
                                  {value.ProductName}
                                </MDBTypography>
                                <p className="small mb-0 text-left">{value.Details}</p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <i class="fa-solid fa-circle-minus"></i>
                              <span style={{ margin: '5px' }}>8</span>
                              <i class="fa-solid fa-circle-plus"></i>
                              <div style={{ width: "80px" }}>
                                <MDBTypography tag="h6" className="mb-0">
                                  ${value.Price}
                                </MDBTypography>
                              </div>
                              <a href="#!" style={{ color: "#cecece" }}>
                                <MDBIcon fas icon="trash-alt" />
                              </a>
                            </div>
                          </div>
                        </MDBCardBody>
                      </MDBCard>

                    })}

                  </MDBCol>

                  <MDBCol lg="5">
                    <MDBCard className="bg-primary text-white rounded-3">
                      <MDBCardBody>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <MDBTypography tag="h5" className="mb-0">
                            Card details
                          </MDBTypography>
                          <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                            fluid className="rounded-3" style={{ width: "45px" }} alt="Avatar" />
                        </div>

                        <p className="small">Card type</p>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-visa fa-2x me-2" />
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-amex fa-2x me-2" />
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-paypal fa-2x me-2" />
                        </a>

                        <form className="mt-4">
                          <MDBInput className="mb-4" label="Cardholder's Name" type="text" size="lg"
                            placeholder="Cardholder's Name" contrast />

                          <MDBInput className="mb-4" label="Card Number" type="text" size="lg"
                            minLength="19" maxLength="19" placeholder="1234 5678 9012 3457" contrast />

                          <MDBRow className="mb-4">
                            <MDBCol md="6">
                              <MDBInput className="mb-4" label="Expiration" type="text" size="lg"
                                minLength="7" maxLength="7" placeholder="MM/YYYY" contrast />
                            </MDBCol>
                            <MDBCol md="6">
                              <MDBInput className="mb-4" label="Cvv" type="text" size="lg" minLength="3"
                                maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast />
                            </MDBCol>
                          </MDBRow>
                        </form>

                        <hr />

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Subtotal</p>
                          <p className="mb-2">$4798.00</p>
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Shipping</p>
                          <p className="mb-2">$20.00</p>
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Total(Incl. taxes)</p>
                          <p className="mb-2">$4818.00</p>
                        </div>

                        <MDBBtn color="info" block size="lg">
                          <div className="d-flex justify-content-between">
                            <span>$4818.00</span>
                            <span>
                              Checkout{" "}
                              <i className="fas fa-long-arrow-alt-right ms-2"></i>
                            </span>
                          </div>
                        </MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section >
  );
}