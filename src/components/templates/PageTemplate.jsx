// PageTemplate.jsx
import React from 'react';
import { Container, Box, Paper, Typography } from '@mui/material';
import themeUI from '../../theme';

function PageTemplate({ children, backgroundImage }) {
  return (
    <Container>
      <Box my={2} >
        <Paper 
          elevation={3}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            backgroundImage: `url(${backgroundImage})`,
            backgroundColor: themeUI.palette.background.secondary,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '80vh', // This makes the Paper component take up the full height of the viewport
          }}
        >
          <Box p={2}>
          {children}
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default PageTemplate;
