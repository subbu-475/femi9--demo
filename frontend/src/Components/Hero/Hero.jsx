import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/pad.png';
import hero_image from '../Assets/hero_image.png';
import new01_image from '../Assets/new01.png';
import new02_image from '../Assets/new02.png';
import new03_image from '../Assets/new03.png';
import logo from '../Assets/logo.png';
import { Carousel } from 'react-bootstrap';
import Box from '@mui/material/Box';
import { useMediaQuery } from '@mui/material';

const Hero = () => {


  return (
    <div className="hero">
      <div className="hero-left">
        <img className='femi-logo' src={logo} alt='' />
        <div>
          <div className="hero-hand-icon">
            <p>Pads Designed</p>
            {/* <img src={hand_icon} alt="" /> */}
          </div>
          <p>by women,</p>
          <p>for women</p>
        </div>
        <a href='/shop' className="hero-latest-btn">
          <div><strong>Buy Now</strong></div>
        </a>
      </div>

      <div className="hero-right">
        <Carousel interval={1000} indicators={false} controls={false}>
          <Carousel.Item>
            <img className="d-block w-100" src={hero_image} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={new01_image} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={new02_image} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={new03_image} alt="Fourth slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
