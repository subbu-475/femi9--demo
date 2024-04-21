import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

function TermsAndConditions() {
  return (
    <Container maxWidth="md">
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h3" gutterBottom sx={{color:"darkgreen"}}>Terms and Conditions</Typography>
        <Typography variant="body1" paragraph>
          Please read these terms and conditions carefully before using Our Service.
        </Typography>
        <Typography variant="h5" gutterBottom sx={{color:"darkgreen"}}>Interpretation and Definitions</Typography>
        <Typography variant="body1" paragraph>
          The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
        </Typography>
        <Typography variant="h5" gutterBottom sx={{color:"darkgreen"}}>Interpretation</Typography>
        <Typography variant="body1" paragraph>
          For the purposes of these Terms and Conditions:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">
              <strong sx={{color:"darkgreen"}}>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to [Your Company Name].
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <strong sx={{color:"darkgreen"}}>Service</strong> refers to the Website.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <strong sx={{color:"darkgreen"}}>Website</strong> refers to [Your Website Name], accessible from [Your Website URL].
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <strong sx={{color:"darkgreen"}}>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
            </Typography>
          </li>
        </ul>
        <Typography variant="h5" gutterBottom sx={{color:"darkgreen"}}>Acknowledgment</Typography>
        <Typography variant="body1" paragraph>
          These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
        </Typography>
        {/* Add more sections as needed */}
      </Paper>
    </Container>
  );
}

export default TermsAndConditions;
