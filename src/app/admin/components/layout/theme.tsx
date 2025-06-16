'use client'

import { createTheme } from '@mui/material/styles'
import { Bebas_Neue } from 'next/font/google'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas-neue',
})

export const theme = createTheme({
  palette: {
    primary: {
      main: '#8B4513', 
      dark: '#6F3410',
      light: '#A65D2E',
    },
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1F2937',
      secondary: '#6B7280',
    },
  },  typography: {
    fontFamily: [
      bebasNeue.style.fontFamily,
      'system-ui',
      'sans-serif'
    ].join(','),
    h6: {
      fontWeight: 400, // Bebas Neue only comes in 400 weight
      letterSpacing: '0.05em', // Better readability for Bebas Neue
    },
    button: {
      textTransform: 'none', // Prevents all-caps on buttons since Bebas is already prominent
      letterSpacing: '0.05em',
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: 'none',
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          margin: '2px 0',
          '&.Mui-selected': {
            backgroundColor: 'rgba(139, 69, 19, 0.08)',
          },
          '&:hover': {
            backgroundColor: 'rgba(139, 69, 19, 0.04)',
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 40,
        },
      },
    },
  },
})