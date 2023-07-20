// UserPage.jsx
import React from 'react';
import { Box, Button, Typography, FormControl, InputLabel, FilledInput, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import themeUI from '../../theme';


// import Background from "../assets/img/abstract-elegant-dark-blue-vector.png"
export function UserPage() {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    // A Box is a basic component in Material-UI. It's a blank container that can
    // have custom styles applied to it. Here we're giving it a height of 100vh
    // (which means 100% of the viewport height), a background color, and center-aligned text.
    
    return (
        <Box sx={{
            height: '85vh',
            width: '90vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: themeUI.palette.background.main,
            // backgroundImage: `url(${Background})`,
            color: themeUI.palette.secondary.main,
            overflow: 'clip', // Enable scrolling if content overflows
        }}>
            <Box sx={{
                height: '85vh',
                width: '90vw',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: themeUI.palette.background.main,
                // backgroundImage: `url(${Background})`,
                color: themeUI.palette.secondary.main,
                overflow: 'clip', // Enable scrolling if content overflows
            }}>
                <Typography variant="h6" component="div">
                    Login
                </Typography>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-username"
                        type={showPassword ? 'text' : 'username'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Username"
                    />
                </FormControl>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
            </Box>
            <Box sx={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: themeUI.palette.background.main,
                // backgroundImage: `url(${Background})`,
                color: themeUI.palette.secondary.main,
                overflow: 'clip', // Enable scrolling if content overflows
            }}>
                <Box sx={{
                    position: 'fixed',
                    bottom: '25%',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}></Box>
                <Button variant="outlined">Launch  🚀</Button>
            </Box>
        </Box>
    );
}

export default UserPage;