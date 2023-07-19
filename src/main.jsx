import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import themeUI from './theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={themeUI}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
