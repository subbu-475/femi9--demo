import React from 'react';
import { Container, Typography, Grid, TextField, Button, Link, Avatar,Box } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './CSS/about.css'

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
  return (
    <Container maxWidth="lg" marginTop='0'>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
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
            <EmailIcon /> Email: <Link href="mailto:nirmalaagencies@gmail.com" className='about-contact1'>nirmalaagencies@gmail.com</Link>
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
                <TextField label="Your Name" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Your Email" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Message" variant="outlined" fullWidth multiline rows={4} required />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    background: 'linear-gradient(90deg, rgba(28, 173, 6, 0.715), rgba(2, 58, 15, 0.83))',
                  }}
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
