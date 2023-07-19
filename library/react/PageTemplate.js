import React from 'react';
import { Container, Box, Paper, Typography } from '@mui/material';

const PageTemplate = ({ children }) => {
  return (
    <Container>
      <Box my={2}>
        <Paper 
          elevation={3}
          sx={{
            backgroundImage: 'url(/path/to/your/background/image.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Box p={2}>
            <Typography variant="h4">Header</Typography>
          </Box>
          {children}
          <Box p={2}>
            <Typography variant="body1">Footer</Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default PageTemplate;
