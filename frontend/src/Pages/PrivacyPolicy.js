import React from 'react';
import { Container, Typography } from '@mui/material';

function PrivacyPolicy() {
  return (
    <Container maxWidth="md">
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
      <Typography variant="h3" gutterBottom sx={{color:'darkgreen'}}>Privacy Policy</Typography>
      <Typography variant="body1" paragraph>
        Your privacy is important to us. It is [Your Company Name]'s policy to respect your privacy regarding any information we may collect from you across our website, [Your Website URL], and other sites we own and operate.
      </Typography>
      <Typography variant="h5" gutterBottom sx={{color:'darkgreen'}}>1. Information We Collect</Typography>
      <Typography variant="body1" paragraph>
        We only collect information about you if we have a reason to do so–for example, to provide our services, to communicate with you, or to make our services better.
      </Typography>
      <Typography variant="h6" gutterBottom sx={{color:'darkgreen'}}>1.1 Information You Provide to Us</Typography>
      <Typography variant="body1" paragraph>
        When you visit our website, we may ask for personal information, such as your name, email address, mailing address, phone number, and payment details. We collect this information when you:
      </Typography>
      <ul>
        <li>Register for an account</li>
        <li>Place an order</li>
        <li>Subscribe to our newsletter</li>
        <li>Contact us for support</li>
      </ul>
      <Typography variant="h6" gutterBottom sx={{color:'darkgreen'}}>1.2 Information We Collect Automatically</Typography>
      <Typography variant="body1" paragraph>
        We may also collect certain information automatically when you visit our website, including your IP address, browser type, operating system, referring URLs, device information, and other usage information.
      </Typography>
      <Typography variant="h5" gutterBottom sx={{color:'darkgreen'}}>2. How We Use Your Information</Typography>
      <Typography variant="body1" paragraph>
        We use the information we collect in various ways, including to:
      </Typography>
      <ul>
        <li>Provide, operate, and maintain our website</li>
        <li>Process and fulfill orders</li>
        <li>Send you marketing and promotional communications</li>
        <li>Respond to your comments, questions, and requests</li>
        <li>Improve our products and services</li>
        <li>Monitor and analyze trends, usage, and activities on our website</li>
      </ul>
      <Typography variant="h5" gutterBottom sx={{color:'darkgreen'}}>3. How We Share Your Information</Typography>
      <Typography variant="body1" paragraph>
        We may share your personal information with third parties only in the ways that are described in this Privacy Policy. We may disclose your personal information to:
      </Typography>
      <ul>
        <li>Service providers who perform services on our behalf (e.g., payment processing, order fulfillment, customer support)</li>
        <li>Business partners who provide services jointly with us</li>
        <li>Third parties who provide analytics or advertising services</li>
        <li>Comply with applicable laws, regulations, or legal process</li>
        <li>Protect our rights, property, and safety, or the rights, property, and safety of others</li>
      </ul>
      <Typography variant="h5" gutterBottom sx={{color:'darkgreen'}}>4. Your Rights and Choices</Typography>
      <Typography variant="body1" paragraph>
        You have certain rights with respect to your personal information, including the right to:
      </Typography>
      <ul>
        <li>Access, correct, or delete your personal information</li>
        <li>Object to or restrict processing of your personal information</li>
        <li>Withdraw your consent at any time</li>
        <li>Receive a copy of your personal information in a structured, machine-readable format</li>
      </ul>
      <Typography variant="h5" gutterBottom sx={{color:'darkgreen'}}>5. Data Retention</Typography>
      <Typography variant="body1" paragraph>
        We will retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.
      </Typography>
      <Typography variant="h5" gutterBottom sx={{color:'darkgreen'}}>6. Contact Us</Typography>
      <Typography variant="body1" paragraph>
        If you have any questions about this Privacy Policy, please contact us at <strong>femi9womens@gmail.com</strong>.
      </Typography>
    </Container>
  );
}

export default PrivacyPolicy;
