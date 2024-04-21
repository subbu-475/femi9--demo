import React from 'react';
import './Footer.css'; // Import Footer CSS styles
import footer_logo from '../Assets/logo.png';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box } from '@mui/material';


const styles = {
  iconContainer: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Align icons vertically at the center
  },
};

const Footer = () => {
  return (
    <>


      <div className='footer'>
        {/* Footer logo */}
        <div className="footer-logo">
          <img src={footer_logo} alt="Footer Logo" />
        </div>
        {/* Footer links */}
        <ul className="footer-links">
          <a href='/shop'><li>Products</li></a>
          <a href='/about'><li>About</li></a>
          <a href='/contact'><li>Contact</li></a>
          <a href='/privacypolicy'><li>Privacy Policy</li></a>
          <a href='/termsandconditions'><li>Terms and Condition</li></a>
          <a href='/refundpolicy'><li>Refund Policy</li></a>
          <a href='/shippingpolicy'><li>Shipping Policy</li></a>
        </ul>
        {/* Footer copyright */}
        <div className="footer-copyright">
          <hr />
          <p>Copyright @ 2024 - All Right Reserved.</p>
        </div>
        {/* WhatsApp Icons */}
        <Box sx={styles.iconContainer}>
          <a href="https://wa.link/uo10yz" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon sx={{ fontSize: '3rem', color: 'green', marginBottom: '1rem' }} />
          </a>
          <a href="https://wa.link/mkylj2" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon sx={{ fontSize: '3rem', color: 'green' }} />
          </a>
        </Box>
      </div>
    </>
  );
};

export default Footer;
