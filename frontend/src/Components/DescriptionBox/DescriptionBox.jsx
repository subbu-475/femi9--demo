import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        {/* <div className="descriptionbox-nav-box fade">Reviews (122)</div> */}
      </div>
      <div className="descriptionbox-description">
        <ul class="feature-list">
          <li>
            <p class="feature-title">Ultra-Thin Design:</p>
            <p>Daily wear mini pads featuring an anion strip with FAR-IR, Magnetic Nano Silver, and Chitin.</p>
          </li>
          <li>
            <p class="feature-title">Premium Soft Surface:</p>
            <p>Gentle on the skin, free from harmful chemicals.</p>
          </li>
          <li>
            <p class="feature-title">Innovative Materials:</p>
            <ul>
              <li>Soft air-laid paper for comfort.</li>
              <li>Innovative release film.</li>
              <li>Air-permeable bottom layer for breathability.</li>
            </ul>
          </li>
          <li>
            <p class="feature-title">High Absorbency:</p>
            <p>Holds twice the amount of discharge compared to regular pads.</p>
          </li>
          <li>
            <p class="feature-title">Eco-Friendly:</p>
            <p>Decomposes quicker than standard sanitary pads, reducing environmental impact.</p>
          </li>
        </ul>
      </div>
      <div class="technology-section descriptionbox-description">
        <h2 class="technology-title">Cutting-Edge Technology Behind Our Product</h2>
        <ul class="technology-list">
          <li class="technology-point">Anion Technology prevents bacterial buildup and relieves stress</li>
          <li class="technology-point">FAR-IR present in the pad promotes blood circulation</li>
          <li class="technology-point">Magnetic and can help relieve menstrual pain</li>
          <li class="technology-point">Nano-Silver revitalizes cells and supports immune system</li>
          <li class="technology-point">Chitin is an Anti-Microbial Agent</li>
        </ul>
      </div>
      <div class="technology-section descriptionbox-description">
        <img src='/description.jpg' alt='desc'/>
        <h2>More Information</h2>
        <div class="info-text">
            <p>The products we use for our body are as important as the food we eat. We need to make conscious choices and not settle for mediocre products with ingredients that might harm us in the long run.</p>
            <p>Femi9 is carefully created for you! It is everything one wants a sanitary napkin to be. It’s soft on the skin, ultra-thin, breathable, free from harmful chemicals, doesn’t let bacteria build-up so no bad odor letting you stay fresh all day! The absorbing leak-proof gel holds twice the amount of blood/discharge a regular pad does and is made of natural extracts unlike silicone which is used in most pads.</p>
            <p>AND THERE IS MORE! The anion strip in the pad can help relieve you from menstrual discomfort and reduce mood swings!</p>
            <p>Your search for the perfect pad is finally over now!</p>
            <p>PS: Femi9 sanitary napkins are not just kind to your body and skin but also to the environment! So make this sustainable switch now!</p>
        </div>
        
      </div>
    </div>
  )
}

export default DescriptionBox
