'use client'

import { useState } from 'react'
import { 
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
  Typography,
} from '@mui/material'
import {
  NotificationsOutlined as NotificationsIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  Person as PersonIcon,
} from '@mui/icons-material'
import { styled } from '@mui/material/styles'

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  borderBottom: '1px solid',
  borderColor: theme.palette.divider,
  position: 'static',
}))

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  minHeight: 64,
}))

export function TopBar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [notificationAnchorEl, setNotificationAnchorEl] = useState<null | HTMLElement>(null)

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleNotificationMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setNotificationAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    setNotificationAnchorEl(null)
  }

  return (
    <StyledAppBar>
      <StyledToolbar>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton
            size="large"
            color="inherit"
            onClick={handleNotificationMenuOpen}
          >
            <Badge badgeContent={4} color="primary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Divider orientation="vertical" flexItem sx={{ height: 32, my: 'auto' }} />
          <IconButton
            edge="end"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <Avatar
              sx={{ 
                width: 32, 
                height: 32,
                bgcolor: 'primary.main',
              }}
            >
              <PersonIcon />
            </Avatar>
          </IconButton>
        </Box>
      </StyledToolbar>

      {/* Profile Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        onClick={handleMenuClose}
        PaperProps={{
          sx: {
            minWidth: 200,
            mt: 1.5,
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>

      {/* Notifications Menu */}
      <Menu
        anchorEl={notificationAnchorEl}
        open={Boolean(notificationAnchorEl)}
        onClose={handleMenuClose}
        onClick={handleMenuClose}
        PaperProps={{
          sx: {
            minWidth: 280,
            mt: 1.5,
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="subtitle2">New Order</Typography>
            <Typography variant="body2" color="text.secondary">
              Order #1234 needs processing
            </Typography>
          </Box>
        </MenuItem>
        <MenuItem>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="subtitle2">Low Stock Alert</Typography>
            <Typography variant="body2" color="text.secondary">
              Tigernut Flour is running low
            </Typography>
          </Box>
        </MenuItem>
        <Divider />
        <MenuItem>
          <Typography variant="body2" color="primary">
            View All Notifications
          </Typography>
        </MenuItem>
      </Menu>
    </StyledAppBar>
  )
}