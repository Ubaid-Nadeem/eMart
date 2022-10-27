import 'antd/dist/antd.css'
import React, { useEffect, useState, useContext } from 'react';
import './home.css'
import { Container } from '@mui/material';
import { MDBRipple } from 'mdb-react-ui-kit';
import banner1 from './hoodie-2.jpg'
import Banner3 from './fullbanner3.jpg'
import { AppContext } from '../../Context/context';
import { Navigate, useNavigate } from "react-router-dom";
import Spinner from '../../Spinner/spinner';
import HoodieBack from './hoodie1.jpg'
import tshirtBack from './tshirt1.jpg'
import sweatsirtBack from './sweatshirt1.jpeg'
import womenHoodie from './womenhoodie2.jpg'
import womentshirt from './tshirt2.jpg'
import hoodie3 from './hoodie3.jpg'



const Home = () => {
  const { loader, setLoader, showproduct, setShowproduct, products, setProducts } = useContext(AppContext)

  const navigate = useNavigate()

  useEffect(() => {
  }, [])

  function Newproduct() {

    return products.map((value, id) => {

      if (id < 4) {
        return <div class="col-12 col-md-3 col-lg-3 col-xl-3" key={id}>
          <div id={`singleproduct`} class="single-product" >
            <div class="part-1" >
              <MDBRipple rippleTag='a'>
                <img
                  src={value.ImagePath}
                  className='img-fluid rounded'
                  alt='example'

                />
                {value.NewBadge ? <p className='newbadge'>New</p> : <></>}
              </MDBRipple>

            </div>
            <div class="part-2">
              <h3 class="product-title">{value.ProductName}</h3>
              {value.OldPrice ? <h4 class="product-old-price">RS {value.OldPrice}</h4> : <></>}
              <h4 class="product-price" >RS {value.NewPrice}</h4>
              <div>

                <ul className='product-tabs'>
                  {/* <li><i class="fas fa-shopping-cart"></i></li> */}
                  <li><i class="fas fa-heart"></i></li>
                  <li onClick={() => {
                    navigate({
                      pathname: '/view',
                      search: `?search=${value._id}`,
                    })
                    // setLoader(true)
                  }}><i style={{ cursor: "pointer" }} class="fas fa-eye" ></i></li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      }

    })
  }



  return (
    loader ? <Spinner /> :
      <div className='container'>
        {/* <div style={{ marginTop: '36px' }}>
          <img
            src={Banner3}
            class="img-fluid"
          />
        </div>
       */}
        <div className="top-offer-container row" style={{ marginTop: '60px' }}>
          <div className='col-12 col-md-6 col-lg-6 hero'>
            <h4>WINTER</h4>
            <h1>OFFER</h1>
            <h1>20% OFF</h1>
            <button className='hero-shopnow'>Shop Now</button>
          </div>
          <div className='col-12 col-md-6 col-lg-6 hero-2'>
            <img src={banner1} />
          </div>
        </div>
        <div >
        </div>

        {/* <div className=''>
          <div className='row '>
            <div className='col-sm-12 col-md-4 col-lg-4 content-2'>
              <img src={HoodieBack} />
              <h2>Hoodies</h2>
            </div>

            <div className='col-sm-12 col-md-4 col-lg-4 content-2'>
              <img src={tshirtBack} />
              <h2>T Shirt</h2>
            </div>
            <div className='col-sm-12 col-md-4 col-lg-4 content-2'>
              <img src={sweatsirtBack} />
              <h2>Sweatshirt</h2>
            </div>
          </div>
        </div> */}



        <div class="row">
          <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img
              // src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              src={HoodieBack}
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />

            <img
              // src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
              src={sweatsirtBack}
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Wintry Mountain Landscape"
            />
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0">
            <img
              // src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
              src={hoodie3}
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Mountains in the Clouds"
            />

            <img
              // src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              src={womentshirt}
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0">
            <img
              src={tshirtBack}
              // src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Waves at Sea"
            />

            <img
              // src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
              src={womenHoodie}
              class="w-100 shadow-1-strong rounded mb-4"
              alt="Yosemite National Park"
            />
          </div>
        </div>

        <div
          id="carouselMultiItemExample"
          class="carousel slide carousel-dark text-center"
          data-mdb-ride="carousel"
        >
          <div class="d-flex justify-content-center mb-4">
            <button
              class="carousel-control-prev position-relative"
              type="button"
              data-mdb-target="#carouselMultiItemExample"
              data-mdb-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden" >Previous</span>
            </button>
            <button
              class="carousel-control-next position-relative"
              type="button"
              data-mdb-target="#carouselMultiItemExample"
              data-mdb-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>


          <div class="carousel-inner py-4">
            <div class="carousel-item active">
              <div class="container">
                <div class="row">
                  {products.map((value, id) => {
                    if (id < 3) {

                      return <div key={id} class={id == 0 ? "col-lg-4" : "col-lg-4 d-none d-lg-block"}>
                        <div class="card">
                          <img
                            src={value.ImagePath}
                            class="card-img-top"
                            alt="Waterfall"
                          />
                          <div class="card-body">
                            <h5 class="card-title">{value.ProductName}</h5>
                            <p class="card-text">Rs {value.NewPrice}  </p>
                            <a href="#!" class="btn btn-primary">Shop Now</a>
                          </div>
                        </div>
                      </div>
                    }
                  })}
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="container">
                <div class="row">
                  {products.map((value, id) => {
                    if (id > 2 && id < 6) {
                      return <div key={id} className={id == 3 ? "col-lg-4 col-md-12" : "col-lg-4 d-none d-lg-block"}>
                        <div class="card">
                          <img
                            src={value.ImagePath}
                            class="card-img-top"
                            alt="Fissure in Sandstone"
                          />
                          <div class="card-body">
                            <h5 class="card-title">{value.ProductName}</h5>
                            <p class="card-text">{value.NewPrice}</p>
                            <a href="#!" class="btn btn-primary">Shop Now</a>
                          </div>
                        </div>
                      </div>


                    }
                  })}

                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="container">
                <div class="row">
                  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <div class="card">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/187.webp"
                        class="card-img-top"
                        alt="Peaks Against the Starry Sky"
                      />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and make up the bulk
                          of the card's content.
                        </p>
                        <a href="#!" class="btn btn-primary">Button</a>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                    <div class="card">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/188.webp"
                        class="card-img-top"
                        alt="Bridge Over Water"
                      />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and make up the bulk
                          of the card's content.
                        </p>
                        <a href="#!" class="btn btn-primary">Button</a>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                    <div class="card">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/189.webp"
                        class="card-img-top"
                        alt="Purbeck Heritage Coast"
                      />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and make up the bulk
                          of the card's content.
                        </p>
                        <a href="#!" class="btn btn-primary">Button</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div style={{ display: "block" }}>
          <div className='new-arrival-div' style={{ textAlign: "center" }}>
            <section class="section-products">
              <div class="container">
                <div class="row justify-content-center text-center">
                  <div class="col-md-8 col-lg-6">

                    <div class="header">
                      <h3>Popular Products</h3>
                    </div>
                  </div>
                </div>
                <div class="row">
                  {Newproduct()}
                </div>
              </div>
            </section>

          </div>
        </div>

      </div >
  )
};

export default Home;

