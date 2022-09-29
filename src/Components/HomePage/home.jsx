import 'antd/dist/antd.css'
import React, { useEffect, useState, useContext } from 'react';
import './home.css'
import background from './backimg2.jpg'
import { Container } from '@mui/material';
import Wedding from './wedding.jpg';
import WomenShopping from './WomenShopping.jpg'
import MenShopping from './Menshopping.jpg'
import { MDBRipple } from 'mdb-react-ui-kit';
import JomaSportShoe from './jomasportshoe.png'
import JomaStormViper from './jomastormviper.jpg'
import JomaviperMan from './jomaviperman.jpg'
import leatherShoe1 from './leathershoe1.jpg'
import NikeShoe1 from './nikeshoe.jpg'
import PlimSollShoe from './plimsollshoes.jpg'
import StormViper9 from './stormviper9.jpg'
import StormViper21 from './stormviper21.jpg'
import { Carousel } from 'antd';
import Banner1 from './fullbanner1.jpg'
import Banner2 from './fullbanner2.jpg'
import Banner3 from './fullbanner3.jpg'
import { Image } from 'antd';
import jordan1 from './jordan1.jpg'
import jordan2 from './jordan2.jpg'
import jordan3 from './jordan3.jpg'
import { AppContext } from '../../Context/context';





const Home = () => {
  const { showproduct, setShowproduct } = useContext(AppContext)

  useEffect(() => {
  }, [])

  function Newproduct() {

    const Products = [{
      ImagePath: JomaSportShoe,
      ProductName: "Joma Sport Shoes",
      Price: 18000,
      OldPrice: 20000

    }, {
      ImagePath: JomaStormViper,
      ProductName: "Joma Storm Viper",
      Price: 20000,
      OldPrice: 22000

    }, {
      ImagePath: JomaviperMan,
      ProductName: "Joma Viper Man",
      Price: 15000,
      OldPrice: 17000

    }, {
      ImagePath: leatherShoe1,
      ProductName: "Leather Shoes",
      Price: 3000,
      OldPrice: 4500

    }, {
      ImagePath: NikeShoe1,
      ProductName: "Nike Sports for man",
      Price: 28000,
      OldPrice: 32000

    }, {
      ImagePath: PlimSollShoe,
      ProductName: "Plim Soll shoe",
      Price: 6000,
      OldPrice: 8000

    }, {
      ImagePath: StormViper9,
      ProductName: "Storm Viper 09",
      Price: 19000,
      OldPrice: 21000

    }, {
      ImagePath: StormViper21,
      ProductName: "Storm Viper 21",
      Price: 18000,
      OldPrice: 20000

    }, {
      ImagePath: jordan1,
      ProductName: "Air Jodan 1 ",
      Price: 60000,
      OldPrice: 70000

    }, {
      ImagePath: jordan2,
      ProductName: "Air Jordan 1",
      Price: 50000,
      OldPrice: 60000

    }]

    return Products.map((value, id) => {
      return <div class="col-md-6 col-lg-4 col-xl-3" key={id}>
        <div id={`singleproduct`} class="single-product" >
          <div class="part-1">
            <MDBRipple rippleTag='a'>
              <img
                src={value.ImagePath}
                className='img-fluid rounded'
                alt='example'
              />
            </MDBRipple>

          </div>
          <div class="part-2">
            <h3 class="product-title">{value.ProductName}</h3>
            <h4 class="product-old-price">RS {value.OldPrice}</h4>
            <h4 class="product-price">RS {value.Price}</h4>
            <div>

              <ul className='product-tabs'>
                <li><i class="fas fa-shopping-cart"></i></li>
                <li><i class="fas fa-heart"></i></li>
                <li onClick={() => {  
                  // console.log(value)
                  setShowproduct(value)
                  console.log(showproduct)
                }}><i style={{ cursor: "pointer" }} class="fas fa-eye" ></i></li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    })

  }



  return (
    <>
      <div style={{ marginTop: '36px' }}>
        <img
          src={Banner3}
          // className="bannner-img"
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
  );
};

export default Home;

