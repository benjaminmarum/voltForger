// App.js
// Here we're importing all necessary modules for our App.
// React and react-router-dom for routing, our page components, and also Material UI's Box for styling
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './LandingPage';
import FormPage from './FormsPage/FormsPage';
import CalcsPage from './CalcsPage';
import DrawingsPage from './DrawingsPage';
import { Box } from '@mui/material';
import NavBar from './NavBar';

function App() {
    // This is our main App component. Inside it, we set up routing and links to each page.
    return (
        // aBrowserRouter is a router implementation that uses HTML5 history API 
        // (pushState, replaceState, popState) to keep UI in sync with URL.
        <Router>
            <Box>
                {/* The navigation links are set up inside a nav element. 
            The Link component is used to create navigation links. 
            It's equivalent to using <a href='...'> in plain HTML, 
            but it works nicely with React Router's routing system. */}
                <NavBar />

                {/* The Switch component is used to render only the first Route or Redirect that matches the current location.
            It's not mandatory, but it improves performance because it renders only the first matching route instead of rendering all matching routes. */}
                <Routes>
                    {/* The Route component is a way to declare what component should be rendered for a given path.
                        Here, we're declaring that for the path '/form', the FormPage component should be rendered, and so on for the other routes. */}
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/form" element={<FormPage />} />
                    <Route path="/calcs" element={<CalcsPage />} />
                    <Route path="/drawings" element={<DrawingsPage />} />
                </Routes>
            </Box>
        </Router>
    );
}

export default App;
