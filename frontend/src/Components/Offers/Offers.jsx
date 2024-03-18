import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/midimage.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>You Deserve The Best</h1>
        <p>Femi9’s products include high quality, ultra-thin daily wear pads for women. The natural, comfortable, and breathable pads are made by women for women, and offer complete period protection, under any circumstance.</p>
        <a href='/shop'><button>Check Now</button></a>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
