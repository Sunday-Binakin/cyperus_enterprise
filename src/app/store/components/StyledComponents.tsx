'use client'

import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

export const StyledHeader = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(8, 0),
  marginBottom: theme.spacing(6),
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50px',
    background: 'linear-gradient(to left bottom, transparent 49%, #fff 51%)',
  }
}))
