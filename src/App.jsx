// App.js
// Here we're importing all necessary modules for our App.
// React and react-router-dom for routing, our page components, and also Material UI's Box for styling
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

//Import Templates
import PageTemplate from './components/templates/PageTemplate';

//Import UI Components
import NavBar from './components/ui/NavBar';
import FootBar from './components/ui/FootBar';

//Import Pages
import LandingPage from './components/pages/LandingPage';
import UserPage from './components/pages/UserPage';
import GamePage from './components/pages/GamePage'; 
import DevPage from './components/pages/DevPage'; //Dev Page
import VitePage from './components/pages/VitePage'; //Vite Page is a test page for vite

//Import Material UI Components
import { Box, CssBaseline, ThemeProvider, Container } from '@mui/material';

//Import App Styles
import './App.css';

function App() {
    // This is our main App component. Inside it, we set up routing and links to each page.
    return (
        // aBrowserRouter is a router implementation that uses HTML5 history API 
        // (pushState, replaceState, popState) to keep UI in sync with URL.
        <Router>
            <Container>
            <Box>

                {/* ------------------------------------------------------------------>*/}
                <NavBar />
                {/*  ------------------------------------------------------------------>*/}

                {/* ===================================================================>*/}
                {/*App*/}
                {/* Routes ------------------------------------------------------------->*/}
                <Routes>
                    {/* The Route component is a way to declare what component should be rendered for a given path.
                        Here, we're declaring that for the path '/form', the FormPage component should be rendered, and so on for the other routes. */}
                    <Route path="/" element={
                        <PageTemplate backgroundImage="library/assets/backgrounds/general/BlocksBack.jpg">
                            <LandingPage />
                        </PageTemplate>}
                    />
                    <Route path="/user" element={
                        <PageTemplate backgroundImage="library/assets/backgrounds/general/UserScreen.png">
                            <UserPage />
                        </PageTemplate>}
                    />
                    <Route path="/game" element={
                        <PageTemplate backgroundImage="library/assets/backgrounds/general/GameConsole.png">
                            <GamePage />
                        </PageTemplate>}
                    />
                    <Route path="/dev" element={
                        <PageTemplate backgroundImage="library/assets/backgrounds/general/Coffee.png">
                            <DevPage />
                        </PageTemplate>}
                    />
                     <Route path="/vite" element={
                            <VitePage />}
                    />
                </Routes>
                {/* ===================================================================>*/}
                
                {/*  ------------------------------------------------------------------>*/}
                <FootBar />
                {/*  ------------------------------------------------------------------>*/}
            </Box>
            </Container>
        </Router>
    );
}

export default App;
