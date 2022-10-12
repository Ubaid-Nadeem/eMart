import 'antd/dist/antd.css'
import React, { useEffect, useState, useContext } from 'react';
import './home.css'
import { Container } from '@mui/material';
import { MDBRipple } from 'mdb-react-ui-kit';

import Banner3 from './fullbanner3.jpg'
import { AppContext } from '../../Context/context';
import { Navigate, useNavigate } from "react-router-dom";
import Spinner from '../../Spinner/spinner';




const Home = () => {
  const { loader, setLoader, showproduct, setShowproduct, products, setProducts } = useContext(AppContext)

  const navigate = useNavigate()

  useEffect(() => {
  }, [])

  function Newproduct() {

    return products.map((value, id) => {

      return <div class="col-6 col-md-4 col-lg-4 col-xl-3" key={id}>
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
                <li><i class="fas fa-shopping-cart"></i></li>
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
    })

  }



  return (
    loader ? <Spinner /> :
      <>
        <div style={{ marginTop: '36px' }}>
          <img
            src={Banner3}
            class="img-fluid"
          />
        </div>
        <div >

        </div>
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
      </>
  )
};

export default Home;

