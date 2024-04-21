import React, { useState } from 'react';
import { Container, Typography, Grid, TextField, Button, Link, Avatar, Box } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './CSS/about.css'
import validator from 'validator';
import axios from "axios";
import API_URL from '../config/global';

const styles = {
  iconContainer: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
  },
};

const ContactPage = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState('');

  const notifySuccess = () => {
    alert('Email sent successfully!');
    setEmail("")
    setMessage("")
    setName("")
  };

  const notifyError = (errorMessage) => {
    alert(errorMessage);
  };

  const getMail = async () => {
    if (!validator.isEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    try {
      let res = await axios.post(`${API_URL}/checkout/orders/sendcontact`, {
        email: email,name:name,message:message
      });
      notifySuccess();
    } catch (error) {
      notifyError('Failed to subscribe. Please try again later.');
    }
  };

  return (
    <Container maxWidth="lg" marginTop='0'>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Grid container spacing={4}>
        {/* Our Team Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h2" gutterBottom className='about-contact'>
            Our Team
          </Typography>
          <Avatar alt="Team Member 1" src="/team-member1.jpg" sx={{ width: 100, height: 100, marginRight: 2 }} />
          <Avatar alt="Team Member 2" src="/team-member2.jpg" sx={{ width: 100, height: 100 }} />
          {/* Add more team members as needed */}
        </Grid>

        {/* Contact Us Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h2" gutterBottom className='about-contact'>
            Contact Us
          </Typography>
          <Typography variant="body1" paragraph>
            <PhoneIcon /> Phone: <Link href="tel:+918124337451" className='about-contact1'>+91-8124337451</Link>
          </Typography>
          <Typography variant="body1" paragraph>
            <PhoneIcon /> Phone: <Link href="tel:+918610418066" className='about-contact1'>+91-8610418066</Link>
          </Typography>
          <Typography variant="body1" paragraph>
            <EmailIcon /> Email: <Link href="mailto:
femi9womens@gmail.com" className='about-contact1'>
              femi9womens@gmail.com</Link>
          </Typography>
          <Typography variant="body1">
            <LocationOnIcon /> Chennai.
          </Typography>
        </Grid>

        {/* Links Section */}
        <Grid item xs={12} md={4}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <img src='/firstlink.png' style={{ width: '100%', maxWidth: '8rem' }} alt="First Link" />
            </Grid>
            <Grid item xs={6}>
              <img src='/secondlink.png' style={{ width: '100%', maxWidth: '8rem' }} alt="Second Link" />
            </Grid>
          </Grid>
        </Grid>

        {/* Send Message Section */}
        <Grid item xs={12}>
          <Typography variant="h5" align="center" gutterBottom>
            Send Us a Message
          </Typography>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField label="Your Name" variant="outlined" value={name} onChange={(e) => { setName(e.target.value) }} fullWidth required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Your Email" variant="outlined" value={email} onChange={(e) => { setEmail(e.target.value) }} fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Message" variant="outlined" value={message} onChange={(e) => { setMessage(e.target.value) }} fullWidth multiline rows={4} required />
                {error && <p className="error-message" style={{ color: "red", }}>{error}</p>}
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    background: 'linear-gradient(90deg, rgba(28, 173, 6, 0.715), rgba(2, 58, 15, 0.83))',
                  }}
                  onClick={getMail}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
      {/* 
      WhatsApp Icons
      <Box sx={styles.iconContainer}>
        <a href="https://wa.link/uo10yz" target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon sx={{ fontSize: '3rem', color: 'green', marginBottom: '1rem' }} />
        </a>
        <a href="https://wa.link/mkylj2" target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon sx={{ fontSize: '3rem', color: 'green' }} />
        </a>
      </Box> */}
    </Container >
  );
};

export default ContactPage;
