
export const colorTokens = {
    grey: {
      0: "#FFFFFF",      // White
      10: "#F9F9F9",     // Very Light Grey
      50: "#F0F0F0",     // Soft Grey
      100: "#E0E0E0",    // Light Grey
      200: "#C2C2C2",    // Soft Medium Grey
      300: "#A3A3A3",    // Grey
      400: "#8A8A8A",    // Medium Grey
      500: "#6A6A6A",    // Dark Grey
      600: "#505050",    // Very Dark Grey
      700: "#333333",    // Almost Black
      800: "#1C1C1C",    // Very Dark Black
      900: "#121212",    // Black
    },
    primary: {
      50: "#E0E7FF",     // Light Blue
      100: "#B3C8FF",    // Soft Blue
      200: "#809EFF",    // Blue
      300: "#4D74FF",    // Slightly Darker Blue
      400: "#2659FF",    // Main Blue
      500: "#0034E6",    // Deep Blue
      600: "#0023B3",    // Dark Blue
      700: "#001A80",    // Very Dark Blue
      800: "#001060",    // Dark Navy Blue
      900: "#00084D",    // Deep Navy Blue
    },
    secondary: {
      50: "#F1E1FF",     // Light Lavender
      100: "#D8A9FF",    // Soft Lavender
      200: "#C179FF",    // Lavender Purple
      300: "#9B42FF",    // Bright Lavender
      400: "#7B1FEC",    // Purple
      500: "#5A14B8",    // Deep Purple
      600: "#420F91",    // Dark Purple
      700: "#320B6E",    // Very Dark Purple
      800: "#24074A",    // Deep Purple
      900: "#140338",    // Darker Deep Purple
    },
  };
  

//mui theme settings 


export const themeSettings = (mode) => {
    return {
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
              primary: {
                dark: colorTokens.primary[200],
                main: colorTokens.primary[400],
                light: colorTokens.primary[600],
              },
              secondary: {
                dark: colorTokens.secondary[200],
                main: colorTokens.secondary[400],
                light: colorTokens.secondary[600],
              },
              neutral: {
                dark: colorTokens.grey[100],
                main: colorTokens.grey[200],
                mediumMain: colorTokens.grey[300],
                medium: colorTokens.grey[400],
                light: colorTokens.grey[700],
              },
              background: {
                default: colorTokens.grey[900],
                alt: colorTokens.grey[800],
              },
            }
          : {
              primary: {
                dark: colorTokens.primary[700],
                main: colorTokens.primary[500],
                light: colorTokens.primary[100],
              },
              secondary: {
                dark: colorTokens.secondary[700],
                main: colorTokens.secondary[500],
                light: colorTokens.secondary[100],
              },
              neutral: {
                dark: colorTokens.grey[700],
                main: colorTokens.grey[500],
                mediumMain: colorTokens.grey[400],
                medium: colorTokens.grey[300],
                light: colorTokens.grey[50],
              },
              background: {
                default: colorTokens.grey[10],
                alt: colorTokens.grey[0],
              },
            }),
      },
      typography: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 40,
        },
        h2: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 32,
        },
        h3: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 24,
        },
        h4: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 20,
        },
        h5: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 16,
        },
        h6: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 14,
        },
      },
    };
  };
  