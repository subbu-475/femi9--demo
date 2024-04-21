import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

function ShippingPolicy() {
  return (
    <Container maxWidth="md">
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h3" gutterBottom sx={{color:'darkgreen'}}>Shipping Policy</Typography>
        <Typography variant="body1" paragraph>
          Thank you for visiting and shopping at [Your Company Name]. The following are the terms and conditions that constitute our Shipping Policy.
        </Typography>
        <Typography variant="h5" gutterBottom sx={{color:'darkgreen'}}>Domestic Shipping Policy</Typography>
        <Typography variant="body1" paragraph>
          Shipment processing time
        </Typography>
        <Typography variant="body1" paragraph>
          All orders are processed within <strong>7-8 days</strong>. Orders are not shipped or delivered on weekends or holidays.
        </Typography>
        <Typography variant="body1" paragraph>
          If we are experiencing a high volume of orders, shipments may be delayed by a few days. Please allow additional days in transit for delivery. If there will be a significant delay in shipment of your order, we will contact you via email or telephone.
        </Typography>
        <Typography variant="h5" gutterBottom sx={{color:'darkgreen'}}>International Shipping Policy</Typography>
        <Typography variant="body1" paragraph>
          We currently do not ship outside the India.
        </Typography>
        <Typography variant="h5" gutterBottom sx={{color:'darkgreen'}}>Shipment Confirmation & Order Tracking</Typography>
        <Typography variant="body1" paragraph>
          You will receive a Shipment Confirmation email once your order has shipped containing your tracking number(s). The tracking number will be active within 24 hours.
        </Typography>
        <Typography variant="h5" gutterBottom sx={{color:'darkgreen'}}>Customs, Duties, and Taxes</Typography>
        <Typography variant="body1" paragraph>
          [Your Company Name] is not responsible for any customs and taxes applied to your order. All fees imposed during or after shipping are the responsibility of the customer (tariffs, taxes, etc.).
        </Typography>
        {/* Add more sections as needed */}
      </Paper>
    </Container>
  );
}

export default ShippingPolicy;
