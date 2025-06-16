'use client'

import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import { theme } from './components/layout/theme'
import { Sidebar } from './components/layout/Sidebar'
import { TopBar } from './components/layout/TopBar'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
        <Sidebar />
        <Box sx={{ 
          flexGrow: 1, 
          ml: `${280}px`,
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}>
          <TopBar />
          <Box component="main" sx={{ flexGrow: 1 }}>
            {children}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}