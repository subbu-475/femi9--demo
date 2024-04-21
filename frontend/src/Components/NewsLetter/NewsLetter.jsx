import React, { useState } from 'react';
import './NewsLetter.css';
import { Button } from '@mui/material';
import validator from 'validator';
import axios from "axios";
import API_URL from '../../config/global';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setError('');
  };

  const notifySuccess = () => {
    alert('Email sent successfully!');
    setEmail("")
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
      let res = await axios.post(`${API_URL}/checkout/orders/subscriptionConfirmation`, {
        email: email
      });
      notifySuccess();
    } catch (error) {
      notifyError('Failed to subscribe. Please try again later.');
    }
  };

  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our Femi9 for new Updates</p>
      <div>
        <input
          type="email"
          placeholder='Your Email id'
          value={email}
          onChange={handleInputChange}
        />
        <Button onClick={getMail} className="subscribe-btn" sx={{ color: "orange" }}>Subscribe</Button>
      </div>
      {error && <p className="error-message" style={{ color: "red", }}>{error}</p>}
    </div>
  );
};

export default NewsLetter;
