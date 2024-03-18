import React from 'react'
import { useEffect } from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import Animatedgif from '../Components/Assets/femi9.gif'

const Shop = () => {

  useEffect(()=>{
    let token = localStorage.getItem('token');
  },[]);
  return (
    <div>
      <Hero/>
      {/* <Animatedgif src={'femi9.gif'}/> */}
      
      <Popular/>

      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
