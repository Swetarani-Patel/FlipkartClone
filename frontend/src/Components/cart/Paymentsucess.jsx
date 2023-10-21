import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const CenteredContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});



const PaymentSuccess = () => {
const searchQuery = useSearchParams()[0]
  const referenceNum = searchQuery.get('reference');

  return (
    <Box>
      <CenteredContainer>
        <Typography variant="h4" style={{ textTransform: 'uppercase' }}>
          Order Successful
        </Typography>
        <Typography variant="body1">
          Reference No. {referenceNum}
        </Typography>
      </CenteredContainer>
    </Box>
  );
};

export default PaymentSuccess;
