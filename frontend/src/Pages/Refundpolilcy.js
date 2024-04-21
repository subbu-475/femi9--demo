import React from 'react';
import { Container, Typography } from '@mui/material';

function RefundPolicy() {
  return (
    <Container maxWidth="md">
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
      <Typography variant="h3" gutterBottom sx={{color:'darkgreen'}}>Refund Policy</Typography>
      <Typography variant="body1" paragraph>
        Thank you for shopping at [Your Company Name]. If you are not entirely satisfied with your purchase, we're here to help.
      </Typography>
      <Typography variant="body1" paragraph>
        We offer a full refund within [number of days] calendar days of your purchase. If [number of days] calendar days have gone by since your purchase, unfortunately, we can’t offer you a refund.
      </Typography>
      <Typography variant="body1" paragraph>
        To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.
      </Typography>
      <Typography variant="body1" paragraph>
        To initiate a return, please contact us at [Your Contact Email] to obtain a Return Merchandise Authorization (RMA) number. Once you have obtained the RMA number, mail your product to:
      </Typography>
      <Typography variant="body1" paragraph>
        [Your Company Name]
        [Address Line 1]
        [Address Line 2]
        [City, State, Zip Code]
      </Typography>
      <Typography variant="body1" paragraph>
        You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non­refundable.
      </Typography>
      <Typography variant="body1" paragraph>
        Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you on the status of your refund after inspecting the item.
      </Typography>
      <Typography variant="body1" paragraph>
        If your return is approved, we will initiate a refund to your credit card (or original method of payment). You will receive the credit within a certain amount of days, depending on your card issuer's policies.
      </Typography>
      <Typography variant="body1" paragraph>
        If you have any questions on how to return your item to us, contact us at [Your Contact Email].
      </Typography>
    </Container>
  );
}

export default RefundPolicy;
