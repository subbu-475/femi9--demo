import React from 'react';
import './Popular.css';
import nayan from '../Assets/nayan.jpg';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import magnetic from '../Assets/magnetic.png'
import nano from '../Assets/nano.png'
import anion from '../Assets/anion.png'
import chitin from '../Assets/chitin.png'
import far from '../Assets/far.png'

const Popular = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <div className='popular'>
        <br />
        <h1 className='head'>About</h1>
        <div className='about-data'>
          <img src={nayan} alt="Nayan" className='about-image' />
          <div className='about-text'>
            <h2 className='about-heading'>Designed by Women, for Women.</h2>
            <p>
              To provide women with sustainable, comfortable, and reliable menstrual hygiene solutions. We are driven to promote empowerment, eco-consciousness to make women feel comfortable and confident each day.
            </p>
            <Button variant='contained' className='btn-get' color='success'><a href='/about'>Get More!</a></Button>
          </div>
        </div>
        <br />
        <br />
      </div>
      <br />
      <br />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={2.4}>
            <Item>
              <img src={magnetic} alt="Magnetic" />
              <p>It helps to relieve menstrual pain</p>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2.4}>
            <Item>
              <img src={anion} alt="Anion" />
              <p>This technology prevents bacterial buildup and relieves stress</p>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2.4}>
            <Item>
              <img src={far} alt="Far" />
              <p>It is present in the pad promotes blood circulation</p>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2.4}>
            <Item>
              <img src={nano} alt="Nano" />
              <p>It revitalizes cells and supports the immune system</p>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2.4}>
            <Item>
              <img src={chitin} alt="Chitin" />
              <p>It is an Anti-Microbial Agent & protects inner cell walls</p>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <br />
      <br />
    </>
  );
};

export default Popular;
