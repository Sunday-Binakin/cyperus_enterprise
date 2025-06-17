'use client'

import { createTheme } from '@mui/material/styles'

export default createTheme({
  palette: {
    primary: {
      main: '#8B4513', // Saddle Brown
      light: '#A0522D', // Sienna (lighter)
      dark: '#654321', // Dark Brown (darker)
      contrastText: '#fff',
    },
    background: {
      default: '#fff',
      paper: '#fff',
    },
  },
  typography: {
    fontFamily: "'Helvetica', 'Arial', sans-serif",
    h1: {
      fontFamily: 'var(--font-bebas-neue)',
      letterSpacing: '0.02em',
    },
    h2: {
      fontFamily: 'var(--font-bebas-neue)',
      letterSpacing: '0.02em',
    },
    h3: {
      fontFamily: 'var(--font-bebas-neue)',
      letterSpacing: '0.02em',
    },
    h4: {
      fontFamily: 'var(--font-bebas-neue)',
      letterSpacing: '0.02em',
    },
    h5: {
      fontFamily: 'var(--font-bebas-neue)',
      letterSpacing: '0.02em',
    },
    h6: {
      fontFamily: 'var(--font-bebas-neue)',
      letterSpacing: '0.02em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'var(--font-bebas-neue)',
          letterSpacing: '0.05em',
          fontWeight: 400,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: 'var(--font-bebas-neue)',
          letterSpacing: '0.05em',
        },
      },
    },
  },
})
