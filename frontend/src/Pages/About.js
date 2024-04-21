import React from 'react';
import { Typography, Container, Link, Grid, Avatar, Box } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './CSS/about.css'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const styles = {
    iconContainer: {
        position: 'fixed',
        bottom: '20px', // adjust as needed
        right: '20px', // adjust as needed
        zIndex: 1000, // make sure it appears above other content
        display: 'flex',
        flexDirection: 'column',
    },
};

const AboutPage = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <>
            <Box sx={{ width: '100%', height: '50%', position: 'relative', overflow: 'hidden', marginBottom: 4 }} >

                <img src="/toshow.jpg" alt="About Us" style={{
                    width: '100%',
                    height: '50%',
                    display: 'block',
                    marginTop: '5%',
                    marginTop: isSmallScreen ? '25%' : '5%'
                }} className='about-mediascreen' />
            </Box>
            <Container maxWidth='lg' className='about-box'>


                <Box sx={{ marginBottom: 4 }} >

                    <Typography className='about-para'>
                        Menstruation represents the essence of life, not a cause for shame. A stain on a garment or holding sanitary products symbolizes this natural and vital cycle. Shaming her for a biological process is deeply unjust. If menstruation were an option, the very cycle of life would cease. It's important to recognize and respect women in this aspect. Menstruation, an integral part of human existence, should be acknowledged and respected, not hidden or regarded as disgraceful.
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold', fontSize: '1.2rem' }} className='about-heading'>We are Femi9. By women, for women</Typography>
                    <Typography variant="h1" gutterBottom className='aboutus'>
                        About Us
                    </Typography>
                    <Typography variant="h4" className='about-heading-new'>
                        Strongly Motivated By A Social Cause
                    </Typography>
                    <br />
                    <Typography variant="body1" paragraph className='about-para'>
                        Femi9 is deeply committed to social responsibility, focusing on women's empowerment through the employment of approximately 5000 women. By creating job opportunities, Femi9 not only contributes to individual well-being but also fosters a thriving community of self-sustained individuals. This initiative underlines Femi9's dedication to creating a positive impact in society, supporting women to become economically independent and empowered.
                    </Typography>
                    <Typography variant="h4" className='about-heading-new'>
                        Vision & Mission
                    </Typography>
                    <br />
                    <Typography variant="body1" paragraph className='about-para'>
                        We envision a world with no compromises when it comes to sanitation and women’s hygiene. Our mission is to provide clean and safe sanitary products for women. We also aim to inspire, include, and create employment opportunities for as many women as we can to help them lead a financially independent life.
                    </Typography>
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h2" gutterBottom className='about-contact'>
                            Our Team
                        </Typography>
                        <Avatar alt="Team Member 1" src="/team-member1.jpg" sx={{ width: 100, height: 100, marginRight: 2 }} />
                        <Avatar alt="Team Member 2" src="/team-member2.jpg" sx={{ width: 100, height: 100 }} />
                        {/* Add more team members as needed */}
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h2" gutterBottom className='about-contact'>
                            Contact Us
                        </Typography>
                        <Typography variant="body1" paragraph >
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
                            <LocationOnIcon /> Trichy.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12}>
                                <Grid container spacing={1}>
                                    <Grid item xs={12} md={6}>
                                        <img src='/firstlink.png' style={{ width: '100%', maxWidth: '8rem' }} alt="First Link" />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <img src='/secondlink.png' style={{ width: '100%', maxWidth: '8rem' }} alt="Second Link" />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>


                </Grid>
                {/* <div style={styles.iconContainer} >
                    <a href="https://wa.link/uo10yz" target="_blank" rel="noopener noreferrer">
                        <WhatsAppIcon sx={{ fontSize: '3rem', color: 'green' }} />
                    </a>
                    <a href="https://wa.link/mkylj2" target="_blank" rel="noopener noreferrer">
                        <WhatsAppIcon sx={{ fontSize: '3rem', color: 'green' }} />
                    </a>


                </div> */}
                {/* https://wa.link/uo10yz
                https://wa.link/mkylj2 */}
            </Container>
        </>

    );
};

export default AboutPage;

