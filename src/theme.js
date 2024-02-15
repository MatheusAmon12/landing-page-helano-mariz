import { createTheme } from "@mui/material"


const theme = createTheme({
    palette: {
        primary: {
            main: "#000D4B",
        },
        secondary: {
            main: "#391388",
        },
        tertiary: {
            main: "#75DBCD",
        },
        quaternary: {
            main: "#EBE5E5"
        },
        background: {
            default: '#EBE5E5'
        }
    },
    typography: {
        fontFamily: [
            'Raleway',
            'Roboto',
            'sans-serif'
        ].join(','),
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                h1: {
                    fontFamily: 'Raleway, sans-serif',
                    fontWeight: 'bold'
                },
                h2: {
                    fontFamily: 'Raleway, sans-serif',
                    fontWeight: 'bold'
                },
                body1: {
                    fontFamily: 'Roboto, sans-serif'
                }
            }
        }
    }
    
})

export default theme