import React from 'react'; //Using react for visualization

//Library with predefined MAterial UI themes, settings, usage, and boxes 
// more info https://m2.material.io/design/color/the-color-system.html#color-theme-creation
// https://m3.material.io/styles/color/dynamic-color/overview

//Import from mui/material/stylles / All you need to create theme
import { createTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

//Import from mui/material for playground/ 
import { useTheme, createTheme, ThemeProvider, Padding, responsiveFontSizes, Button, ButtonBase, Box, CssBaseline } from '@mui/material';


// Palette Theme
const paletteTheme = createTheme({
    palette: {
        mode: 'light', // Choose light or dark mode

        // Primary color settings
        primary: {
            main: '#011e3c', // Main color
            dark: '#0b1929', // Darker shade of the primary color
            light: '#d1e5f4', // Lighter shade of the primary color
            contrastText: '#ffffff', // Text color that contrasts with the primary color
        },

        // Secondary color settings
        secondary: {
            main: '#1b936d', // Main color
            contrastText: '#000000', // Text color that contrasts with the secondary color
        },

        // Error color settings
        error: {
            main: '#ff0000', // Main error color
        },

        // Add more palette settings as needed
        // For example:
        // background: {
        //   default: '#f5f5f5', // Default background color
        //   paper: '#ffffff', // Background color for paper surfaces
        // },

        // Available settings:
        // mode: 'light' | 'dark'
        // primary: { main, dark, light, contrastText }
        // secondary: { main, contrastText }
        // error: { main }
        // background: { default, paper }
        // text: { primary, secondary, disabled, hint }
        // action: { active, hover, selected, disabled, disabledBackground }
    },
});

const backgroundCommentCollapser = () => {

    // Add more concrete or roofing material colors as needed
    //Custom
    // background: {
    // concrete: '#808080', // Example concrete color
    // roofingMaterial: '#B87333', // Example roofing material color
    // waterBlue: '#0077be', // Example blue color representing water
    // waterGreen: '#00b894', // Example green color representing water
    // rose: '#ff007f', // Example color representing a rose
    // sunflower: '#ffc200', // Example color representing a sunflower
    // lavender: '#6c71c4', // Example color representing lavender
    //   },

    return null
};

// Typography Theme
const typographyTheme = createTheme({
    typography: {
        fontFamily: 'Arial, sans-serif', // Specify the default font family

        // Heading styles
        h1: {
            fontSize: '2rem', // Font size
            fontWeight: 'bold', // Font weight
            letterSpacing: '0.1em', // Letter spacing
        },

        // Body text styles
        body1: {
            fontSize: '1rem', // Font size
            lineHeight: 1.5, // Line height
        },

        // Add more typography settings as needed
        // Available settings:
        // fontFamily
        // fontSize
        // fontWeight
        // letterSpacing
        // lineHeight
        // h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, caption, button, overline
        // allVariants: { fontSize, fontWeight, letterSpacing, lineHeight }
    },
});

// Spacing Theme
const spacingTheme = createTheme({
    spacing: 8, // Define the base spacing value
});

// Shadows Theme
const shadowsTheme = createTheme({
    shadows: [
        'none', // No shadow
        '0px 2px 4px rgba(0, 0, 0, 0.2)', // Light shadow
        '0px 4px 8px rgba(0, 0, 0, 0.2)', // Medium shadow
        // Add more shadow settings as needed
    ],
});

// Shape Theme
const shapeTheme = createTheme({
    shape: {
        borderRadius: 4, // Border radius for components
    },

    // Available settings:
    // borderRadius
});

// Transitions Theme
const transitionsTheme = createTheme({
    transitions: {
        easing: {
            easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)', // Easing function for smooth transitions
        },
        duration: {
            short: '300ms', // Duration of short transitions
            // Add more transition duration settings as needed
        },
    },

    // Available settings:
    // easing
    // duration
});

// Breakpoints Theme
const breakpointsTheme = createTheme({
    breakpoints: {
        values: {
            xs: 0, // Extra small breakpoint value
            sm: 600, // Small breakpoint value
            md: 960, // Medium breakpoint value
            // Add more breakpoint values as needed
            // values: { xs, sm, md, lg, xl }

        },
    },
});

//---------------------------------------------------------------------------------------------------------------------------->


// Merge Themes
const combinedTheme = createTheme({
    ...theme1,
    ...theme2,
});

// Usage example
const App = () => {
    return (
        <ThemeProvider theme={combinedTheme}>
            {/* Your components */}
        </ThemeProvider>
    );
};


//---------------------------------------------------------------------------------------------------------------------------->

// Example Themes from Previous Projects
// Create a custom theme with desitgn principle / would be nice to build in color theroyu etc => generate off brand color and secondary
const MaterialTheme = createTheme({
    components: {
        MuiBox: {
            styleOverrides: {
                root: {
                    // Custom default styles for Box component
                    padding: '16px',
                    border: '1px solid #000',
                    borderRadius: '8px',
                },
            },
        },
    },
    palette: {
        primary: {
            main: '#191970', // Midnight Blue
            light: '#455A64', // Slate Grey
            dark: '#000080', // Dark Midnight Blue
            50: '#E8EAF6', // Primary Lightest Shade
            100: '#C5CAE9', // Primary Lighter Shade
            200: '#9FA8DA', // Primary Light Shade
            300: '#7986CB', // Primary Shade
            400: '#5C6BC0', // Primary Dark Shade
            500: '#3F51B5', // Primary Darkest Shade
        },
        secondary: {
            main: '#FFFFE0', // Light Yellow
            light: '#FFF9C4', // Lightest Yellow
            dark: '#FFEB3B', // Dark Yellow
            50: '#FFFDE7', // Secondary Lightest Shade
            100: '#FFF9C4', // Secondary Lighter Shade
            200: '#FFF59D', // Secondary Light Shade
            300: '#FFF176', // Secondary Shade
            400: '#FFEE58', // Secondary Dark Shade
            500: '#FFEB3B', // Secondary Darkest Shade
        },
        racingStripOrange: {
            main: '#FF4500', // Racing Strip Orange
            light: '#FF7043', // Light Racing Strip Orange
            dark: '#E64A19', // Dark Racing Strip Orange
            50: '#FFEBE5', // Racing Strip Orange Lightest Shade
            100: '#FFCCBC', // Racing Strip Orange Lighter Shade
            200: '#FFAB91', // Racing Strip Orange Light Shade
            300: '#FF8A65', // Racing Strip Orange Shade
            400: '#FF7043', // Racing Strip Orange Dark Shade
            500: '#FF5722', // Racing Strip Orange Darkest Shade
        },
        green: {
            main: '#4CAF50', // Green
            light: '#81C784', // Light Green
            dark: '#388E3C', // Dark Green
            50: '#E8F5E9', // Green Lightest Shade
            100: '#C8E6C9', // Green Lighter Shade
            200: '#A5D6A7', // Green Light Shade
            300: '#81C784', // Green Shade
            400: '#66BB6A', // Green Dark Shade
            500: '#4CAF50', // Green Darkest Shade
        },
        violet: {
            main: '#8e24aa',
            light: '#c158dc',
            contrastText: '#ffffff',
        },
        background: {
            default: '#f5f5f5',
            boxBackground: '#f8f8f8',
        },
    },
    typography: {
        fontFamily: 'Arial, sans-serif', // Professional-looking font
        fontSize: 14,
        h1: {
            fontFamily: 'Arial, sans-serif', // Professional-looking font
            fontSize: '2rem',
            fontWeight: 'bold',
        },
        h2: {
            fontFamily: 'Arial, sans-serif', // Professional-looking font
            fontSize: '1.5rem',
            fontWeight: 'bold',
        },
        h3: {
            fontFamily: 'Arial, sans-serif', // Professional-looking font
            fontSize: '1.2rem',
            fontWeight: 'bold',
            fontStyle: 'italic',
        },
        h4: {
            fontFamily: 'Arial, sans-serif', // Professional-looking font
            fontSize: '1rem',
            fontWeight: 'bold',
            fontStyle: 'italic',
        },
        h5: {
            fontFamily: 'Arial, sans-serif', // Professional-looking font
            fontSize: '0.8rem',
            fontWeight: 'bold',
            fontStyle: 'italic',
        },
        h6: {
            fontFamily: 'cursive', // Cursive script type font
            fontSize: '0.8rem',
            fontWeight: 'normal',
        },
        h7: {
            fontFamily: 'cursive', // Cursive script type font
            fontSize: '3rem',
            fontWeight: 'bold',
            fontStyle: 'italic',
        },
        body1: {
            fontFamily: 'Arial, sans-serif', // Professional-looking font
            fontSize: '1rem',
        },
        body2: {
            fontFamily: 'monospace', // Boxy terminal font
            fontSize: '1rem',
        },
    },
});


//First Theme Used by Author
let themeOG = createTheme({
    palette: {
        primary: {
            main: '#011e3c',
            dark: '#0b1929',
            light: '#d1e5f4',
            hover: '#ffd602',
            contrastText: '#ffffff', // white
        },
        secondary: {
            main: '#1b936d',
            contrastText: '#000000', // black
        },
        error: {
            main: '#red',
        },
        background: {
            default: '#0b1929', // dark blue
        },
    },
    typography: {
        // Your typography styles go here
    },
});



//---------------------------------------------------------------------------------------------------------------------------->
//Boxes(divs) for React 
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import customTheme from './theme';
function App() {
    return (
        <>
            {/* Custom Theme */}
            <ThemeProvider theme={customTheme}>
                {/* Outer Box */}
                <Box
                    sx={{
                        backgroundColor: 'background.boxBackground',
                        padding: '20px',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    {/* Box Component 1 */}
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
                    {/* Box Component 2 */}
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
                    {/* Box Component 3 */}
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

            {/* Original Theme */}
            <ThemeProvider theme={themeOG}>
                {/* Outer Box */}
                <Box
                    sx={{
                        backgroundColor: 'background.boxBackground',
                        padding: '20px',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    {/* Add your nested Box components here */}
                </Box>
            </ThemeProvider>
        </>
    );
}

//Custom Theme Info:
// Wrap the content with ThemeProvider and pass in your custom theme object, customTheme.

// Outer Box:
// This is the outer box component that contains the three inner box components.
// backgroundColor: 'background.boxBackground' sets the background color using the custom theme's background.boxBackground color.
// padding: '20px' adds 20 pixels of padding around the box.
// display: 'flex' and justifyContent: 'space-between' apply flexbox properties to create a horizontal layout with space between the inner boxes.
// Box Component 1, 2, 3:

// These are the individual box components nested within the outer box.
// backgroundColor sets the background color of each box using the respective color from the custom theme (e.g., primary.main, secondary.main, accent.main).
// color sets the text color of each box using the respective contrast color from the custom theme (e.g., primary.contrastText, secondary.contrastText, accent.contrastText).
// padding: '10px' adds 10 pixels of padding around each box.
// borderRadius: '4px' adds a border radius of 4 pixels to each box.

//---------------------------------------------------------------------------------------------------------------------------->
//Brand Generator

const generateThemeFromBrandColors = (primaryColor, secondaryColor, backgroundColor) => {
    // Computed colors
    const contrastTextColor = '#ffffff'; // White text color for contrast

    // Calculate additional colors
    const darkPrimaryColor = darken(primaryColor, 0.2); // Darken primary color
    const lightPrimaryColor = lighten(primaryColor, 0.2); // Lighten primary color

    // Generate the theme object
    const brandStyle = createTheme({
        palette: {
            primary: {
                main: primaryColor,
                dark: darkPrimaryColor,
                light: lightPrimaryColor,
                contrastText: contrastTextColor,
            },
            secondary: {
                main: secondaryColor,
                contrastText: contrastTextColor,
            },
            error: {
                main: '#ff0000', // Example error color
            },
            background: {
                default: backgroundColor,
            },
        },
        typography: {
            fontFamily: 'Roboto, Arial, sans-serif',
            // Additional typography settings
        },
        components: {
            MuiBox: {
                styleOverrides: {
                    // Sharp Box style
                    sharp: {
                        borderRadius: 4,
                        border: `2px solid ${primaryColor}`,
                        padding: 16,
                    },
                    // Technical Box style
                    technical: {
                        borderRadius: '50%',
                        border: `1px dashed ${secondaryColor}`,
                        padding: 12,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                    // Unique Box style
                    unique: {
                        borderRadius: 0,
                        border: `3px solid ${secondaryColor}`,
                        padding: 24,
                        backgroundColor: primaryColor,
                        color: contrastTextColor,
                    },
                },
            },
        },
        // Additional theme settings
    });

    return brandStyle;
};

// Example usage
const brandPrimaryColor = '#003366'; // Specify your brand's primary color
const brandSecondaryColor = '#ff9900'; // Specify your brand's secondary color
const brandBackgroundColor = '#f5f5f5'; // Specify your brand's background color

const themeBrand = generateThemeFromBrandColors(
    brandPrimaryColor,
    brandSecondaryColor,
    brandBackgroundColor
);

// Usage example
const BrandApp = () => {
    return (
        <ThemeProvider theme={brandStyle}>
            <div>
                <Box className="sharp">Sharp Box</Box>
                <Box className="technical">Technical Box</Box>
                <Box className="unique">Unique Box</Box>
            </div>
        </ThemeProvider>
    );
};


//---------------------------------------------------------------------------------------------------------------------------->
//Aniumations 

const RainComponent = () => {
    const rainAnimation = `
      @keyframes rain {
        0% {
          transform: translateY(0);
        }
        100% {
          transform: translateY(100%);
        }
      }
    `;

    return (
        <Box
            sx={{
                position: 'relative',
                height: '200px',
                overflow: 'hidden',
            }}
        >
            <style>{rainAnimation}</style>
            <Box
                sx={{
                    position: 'absolute',
                    top: '-100%',
                    left: '50%',
                    width: '1px',
                    height: '200%',
                    background: 'linear-gradient(to bottom, #87ceeb 0%, transparent 100%)',
                    animation: 'rain 2s linear infinite',
                }}
            />
        </Box>
    );
};

const RainApp = () => {
    return (
        <div>
            <h1>My Rain App</h1>
            <RainComponent />
        </div>
    );
};

//---------------------------------------------------------------------------------------------------------------------------->
//Icons / available icon options:
//https://mui.com/material-ui/material-icons/

// Add: <AddIcon />
// Delete: <DeleteIcon />
// Edit: <EditIcon />
// Search: <SearchIcon />
// Save: <SaveIcon />
// Close: <CloseIcon />
// Menu: <MenuIcon />
// Check: <CheckIcon />
// Account Circle: <AccountCircleIcon />
// Notifications: <NotificationsIcon />

import {
    Home as HomeIcon,
    Search as SearchIcon,
    Notifications as NotificationsIcon,
    AccountCircle as AccountCircleIcon,
} from '@mui/icons-material';


const NavBar = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
                padding: '10px',
            }}
        >
            {/* Home Icon */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <HomeIcon sx={{ fontSize: 20, marginRight: 5 }} />
                <span>Home</span>
            </Box>

            {/* Search Icon */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <SearchIcon sx={{ fontSize: 20, marginRight: 5 }} />
                <span>Search</span>
            </Box>

            {/* Notifications Icon */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <NotificationsIcon sx={{ fontSize: 20, marginRight: 5 }} />
                <span>Notifications</span>
            </Box>

            {/* Account Icon */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccountCircleIcon sx={{ fontSize: 20, marginRight: 5 }} />
                <span>Account</span>
            </Box>
        </Box>
    );
};

//---------------------------------------------------------------------------------------------------------------------------->
//sx  //css

//Overflow---------------------------------------------------------->
// The overflow property in CSS controls how content that exceeds the dimensions of an element is handled. In Material-UI, you can use the overflow property within the sx prop of Box components to control the overflow behavior. Here are the different options you can use:
// overflow: 'visible': The default value. Content overflows outside the element without any clipping. This can cause the content to overlap other elements.
// overflow: 'hidden': Content that overflows is clipped and hidden. The overflowing content is not visible.
// overflow: 'scroll': Adds scrollbars to the element if the content overflows. Even if the content does not overflow, scrollbars are still visible but disabled. Both horizontal and vertical scrollbars are displayed if necessary.
// overflow: 'auto': Behaves like scroll when the content overflows, adding scrollbars. However, when the content fits within the element, no scrollbars are displayed.
// overflow: 'scrollX': Adds a horizontal scrollbar if the content overflows horizontally. Vertical scrolling is disabled.
// overflow: 'scrollY': Adds a vertical scrollbar if the content overflows vertically. Horizontal scrolling is disabled.
// overflow: 'clip': Similar to hidden, content that overflows is clipped and hidden. However, scrollbars are not provided, and users cannot scroll to view the clipped content.
// These options allow you to control how the content within a Box component is displayed when it exceeds the element's dimensions. You can choose the appropriate overflow value based on your requirements for each specific case.


//Background---------------------------------------------------------->
//backgroundColor: Specifies the background color of the element. You can use a color name, hexadecimal value, or RGB value. For example: sx={{ backgroundColor: 'red' }}.
//backgroundImage: Sets an image as the background of the element. You can provide the URL of the image or use the url() CSS function. For example: sx={{ backgroundImage: 'url("/path/to/image.jpg")' }}.
// backgroundSize: Specifies the size of the background image. Values can be auto, cover, contain, or a specific size in pixels or percentage. For example: sx={{ backgroundSize: 'cover' }}.
// backgroundPosition: Sets the starting position of the background image. Values can be keywords like top, bottom, center, or specific positions in pixels or percentage. For example: sx={{ backgroundPosition: 'top center' }}.
// backgroundRepeat: Controls whether the background image should repeat or not. Values can be repeat, repeat-x, repeat-y, or no-repeat. For example: sx={{ backgroundRepeat: 'no-repeat' }}.
// backgroundAttachment: Determines whether the background image should scroll with the content or stay fixed. Values can be scroll, fixed, or local. For example: sx={{ backgroundAttachment: 'fixed' }}.

//---------------------------------------------------------------------------------------------------------------------------->

export {
    App,
    BrandApp,
    RainApp,
    NavBar ,
    themeOG,
    brandStyle,
    MaterialTheme,

    paletteTheme, // Use this theme for palette-related settings
    typographyTheme, // Use this theme for typography-related settings
    spacingTheme, // Use this theme for spacing-related settings
    shadowsTheme, // Use this theme for shadow-related settings
    shapeTheme, // Use this theme for shape-related settings
    transitionsTheme, // Use this theme for transition-related settings
    breakpointsTheme, // Use this theme for breakpoint-related settings
};

//---------------------------------------------------------------------------------------------------------------------------->

// To use the settings in other files:
// 1. Import the desired theme from this file
//    For example: import { paletteTheme } from './theme';
//
// 2. Wrap your component or application with the ThemeProvider component from MUI
//    <ThemeProvider theme={paletteTheme}>
//      {/* Your components or application content */}
//    </ThemeProvider>
//
// 3. The settings defined in the theme will be applied to the components within the ThemeProvider
//    You can access and use the theme values using the MUI hooks or components, such as useTheme or styled components
//
// Example usage:
// import { useTheme } from '@mui/system';
//
// const MyComponent = () => {
//   const theme = useTheme();
//   const primaryColor = theme.palette.primary.main;
//   const headingStyle = theme.typography.h1;
//   // Use the theme values in your component styling or logic
//   // ...
//   return (
//     // Your component JSX
//   );
// };

//---------------------------------------------------------------------------------------------------------------------------->

