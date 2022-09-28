import 'antd/dist/antd.css'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import React, { useState } from 'react';
import './home.css'
import NavBar from '../Navbar/navbar';
import background from './backimg2.jpg'
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import Wedding from './wedding.jpg';
import WomenShopping from './WomenShopping.jpg'
import MenShopping from './Menshopping.jpg'
const Home = () => {
  return (
    <>
      <div class=" main-top-offer-div">
        <img src={background} alt="Norway" style={{ width: "100%" }} />
        <div class="text-block">
          <Container>
            <p>SUMMER / WINTER COLLECTION 2022</p>
            <h2 >Get up to 30% Off</h2>
            <h2 >New Arrivals</h2>
            <button>SHOP NOW</button>
          </Container>
        </div>
      </div>


      <div class="container collection-shortcut">
        <div class="row ">
          <div className="col collection-link">
            <img src={WomenShopping} />
          </div>
          <div class="col">
            <img src={Wedding} />

          </div>
          <div class="col">
            <img src={MenShopping} />
            </div>
        </div>
      </div>


      <div className='new-arrival-div'>
        <h1>New Arrivals</h1>
        {/* <hr style={{width:"70px",margin:"auto",color:"#fe4c50",height:"5px",backgroundColor:"#fe4c50"}}/> */}
       
      </div>
    </>
  );
};

export default Home;

