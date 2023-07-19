import { createTheme } from '@mui/material';
import { lighten, darken } from '@mui/system';

// Define your base colors.
const primaryMain = '#808080';
const secondaryMain = '#8B4513';
const errorMain = '#FF0000';
const backgroundDefault = '#800000';


// Create a custom theme instance.
const themeUI = createTheme({
    // The palette object provides colors for your application.
    palette: {
        // The primary color of your application.
        primary: {
            main: primaryMain,
            light: lighten(primaryMain, 0.2), // Lighten the main color by 20%.
            dark: darken(primaryMain, 0.2), // Darken the main color by 20%.
        },
        // The secondary color of your application.
        secondary: {
            main: secondaryMain,
            light: lighten(secondaryMain, 0.2),
            dark: darken(secondaryMain, 0.2),
        },
        // The color used for error messages and icons.
        error: {
            main: errorMain,
            light: lighten(errorMain, 0.2),
            dark: darken(errorMain, 0.2),
        },
        // The background colors used by the theme.
        background: {
            default: backgroundDefault,
            paper: lighten(backgroundDefault, 0.2), // Use a lighter color for paper-based components.
            mapboundries: darken(backgroundDefault, 0.2), // Use a lighter color for paper-based components.
        },
        robot: {
            light: '#A9A9A9',
            main: '#808080',
            dark: '#696969',
            contrastText: '#C0C0C0',
            contrastTextDark: '#D3D3D3',
            extraDark: '#000000'
        },
        factory: {
            light: '#A0522D',
            main: '#8B4513',
            dark: '#D2691E',
            contrastText: '#CD853F',
            contrastTextDark: '#F4A460',
            extraDark: '#000000'
        },
        resources: {
            light: '#C0C0C0',
            main: '#FFD700',
            dark: '#B87333',
            contrastText: '#4682B4',
            contrastTextDark: '#228B22',
            extraDark: '#000000'
        },
        wiring: {
            light: '#FFFF00',
            main: '#FF0000',
            dark: '#0000FF',
            contrastText: '#008000',
            contrastTextDark: '#FFA500',
        },
        gameWorldDay: {
            light: '#008B8B',
            main: '#800000',
            dark: '#556B2F',
            contrastText: '#8B008B',
            contrastTextDark: '#FF8C00',
        },
        gameWorldNight: {
            light: '#008000',
            main: '#000080',
            dark: '#800000',
            contrastText: '#808000',
            contrastTextDark: '#800080',
        },
        // ... add other color palettes as needed
    },
    // The typography object provides styles for typography.
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
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
        body1: {
            fontFamily: 'Arial, sans-serif', // Professional-looking font
            fontSize: '1rem',
        },
        body2: {
            fontFamily: 'monospace', // Boxy terminal font
            fontSize: '1rem',
        },
    },
    // ... other theme settings

});
// Now that themeUI is fully defined, we can use themeUI.palette.getContrastText
themeUI.palette.primary.contrastText = themeUI.palette.getContrastText(primaryMain);
themeUI.palette.secondary.contrastText = themeUI.palette.getContrastText(secondaryMain);
themeUI.palette.error.contrastText = themeUI.palette.getContrastText(errorMain);
export default themeUI;
//---------------------------------------------->
//Dark Mode
export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});
//=================================================================================================>




//=================================================================================================>
// Example of a custom theme
//=================================================================================================>
// To use this theme, you first need to create a theme instance with createTheme:
const theme = createTheme({
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
            mid: '#1b936d', // Mid Green
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
            main: '#0813294e',
            default: '#f5f5f5',
            boxBackground: '#f8f8f8',
            paper: '#ffffff', // Paper color
            default: '#f5f5f5', // Default background color
            paperGray: '#f1f1f1', // Gray shade resembling paper
            paperLight: '#fafafa', // Lighter shade of paper color
            paperDark: '#ebebeb', // Darker shade of paper color
            oak: '#8b6b3b', // Color of oak wood
            walnut: '#6b5841', // Color of walnut wood
            teak: '#b9895e', // Color of teak wood
            mahogany: '#4c1c13', // Color of mahogany wood
            birch: '#c5ae91', // Color of birch wood
            maple: '#c16f36', // Color of maple wood
            steel: '#5f6a6a', // Color of steel
            aluminum: '#dfe4e4', // Color of aluminum
            copper: '#b87333', // Color of copper
            bronze: '#8c6239', // Color of bronze
            gold: '#ffd700', // Color of gold
            silver: '#c0c0c0', // Color of silver
            glass: 'rgba(255, 255, 255, 0.5)', // Color resembling glass appearance
            rubber: '#424242', // Color of rubber material
            acrylic: '#ff7f50', // Color of acrylic plastic
            polypropylene: '#80ced6', // Color of polypropylene plastic
            plexiglass: '#7d99b3', // Color of plexiglass material
            neonGreen: '#00ff00', // Color of neon green
            neonBlue: '#0000ff', // Color of neon blue
            neonPink: '#ff00ff', // Color of neon pink
            neonPurple: '#800080', // Color of neon purple
            neonOrange: '#ff4500', // Color of neon orange
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
//export default theme;


//=================================================================================================>
//Example Usage
//=================================================================================================>
// Then, you can use this theme in your components with the ThemeProvider component:
// import { ThemeProvider } from '@mui/material/styles';
// import Box from '@mui/material/Box';

// function MyApp() {
//   return (
//     <ThemeProvider theme={theme}>
//       {/* Your components go here. For example, a Box component: */}
//       <Box color="primary.main">
//         {/* This Box will have the primary color. */}
//       </Box>
//     </ThemeProvider>
//   );
// }
// In this example, I'm using the lighten, darken, and getContrastText functions from Material-UI to generate the light, dark, and contrastText colors based on the main color. This makes it easy to change the colors: just change the main color, and the other colors will update automatically.

// Please note that the lighten, darken, and getContrastText functions are not included in the @mui/material/styles package. They are part of the @mui/system package, so you'll need to install that package and import the functions from there:
// jsx
// Copy code
// import { lighten, darken, getContrastText } from '@mui/system';
// This is a basic example. The actual theme and how you use it will depend on your specific needs and the design of your app. You can find more information in the Material-UI documentation.


//=================================================================================================>
// Example of a dark/light mode with custom theme
//=================================================================================================>
// const getDesignTokens = (mode: PaletteMode) => ({
//     palette: {
//       mode,
//       ...(mode === 'light'
//         ? {
//             // palette values for light mode
//             primary: amber,
//             divider: amber[200],
//             text: {
//               primary: grey[900],
//               secondary: grey[800],
//             },
//           }
//         : {
//             // palette values for dark mode
//             primary: deepOrange,
//             divider: deepOrange[700],
//             background: {
//               default: deepOrange[900],
//               paper: deepOrange[900],
//             },
//             text: {
//               primary: '#fff',
//               secondary: grey[500],
//             },
//           }),
//     },
//   });
//   const [mode, setMode] = React.useState<PaletteMode>('light');
//   const colorMode = React.useMemo(
//     () => ({
//       // The dark mode switch would invoke this method
//       toggleColorMode: () => {
//         setMode((prevMode: PaletteMode) =>
//           prevMode === 'light' ? 'dark' : 'light',
//         );
//       },
//     }),
//     [],
//   );

//   // Update the theme only if the mode changes
//   const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <Page />
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// }

// const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

// const theme = React.useMemo(
//   () =>
//     createTheme({
//       palette: {
//         mode: prefersDarkMode ? 'dark' : 'light',
//       },
//     }),
//   [prefersDarkMode],
// );
