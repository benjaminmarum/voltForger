import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import customTheme from './theme';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Box
        sx={{
          backgroundColor: 'background.boxBackground',
          padding: '20px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
            padding: '10px',
            borderRadius: '4px',
          }}
        >
          Box Component 1
        </Box>
        <Box
          sx={{
            backgroundColor: 'secondary.main',
            color: 'secondary.contrastText',
            padding: '10px',
            borderRadius: '4px',
          }}
        >
          Box Component 2
        </Box>
        <Box
          sx={{
            backgroundColor: 'accent.main',
            color: 'accent.contrastText',
            padding: '10px',
            borderRadius: '4px',
          }}
        >
          Box Component 3
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
