'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { styled, useTheme } from '@mui/material/styles'
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
} from '@mui/material'
import {
  Dashboard as DashboardIcon,
  Inventory as InventoryIcon,
  ShoppingCart as ShoppingCartIcon,
  LocalShipping as DeliveryIcon,
  Article as ContentIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material'

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: DashboardIcon },
  { name: 'Products', href: '/admin/products', icon: InventoryIcon },
  { name: 'Orders', href: '/admin/orders', icon: ShoppingCartIcon },
  { name: 'Delivery Schedule', href: '/admin/delivery', icon: DeliveryIcon },
  { name: 'Content', href: '/admin/content', icon: ContentIcon },
  { name: 'Settings', href: '/admin/settings', icon: SettingsIcon },
]

const drawerWidth = 280

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    backgroundColor: theme.palette.background.paper,
    borderRight: 'none',
    boxShadow: theme.shadows[1],
  },
}))

export function Sidebar() {
  const pathname = usePathname()
  const theme = useTheme()

  return (
    <StyledDrawer variant="permanent" anchor="left">
      <Box sx={{ p: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image
          src="/logo.png"
          alt="Cyperus Enterprise"
          width={40}
          height={40}
          style={{ width: 'auto', height: '40px' }}
        />
        <Typography variant="h6" sx={{ ml: 2, color: theme.palette.text.primary }}>
          Cyperus
        </Typography>
      </Box>
      <Divider sx={{ mx: 2 }} />
      <List sx={{ px: 2, py: 1 }}>
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <ListItem disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  sx={{
                    borderRadius: 1,
                    backgroundColor: isActive ? 'action.selected' : 'transparent',
                    '&:hover': {
                      backgroundColor: 'action.hover',
                    },
                  }}
                >
                  <ListItemIcon sx={{ 
                    minWidth: 40,
                    color: isActive ? 'primary.main' : 'text.secondary',
                  }}>
                    <item.icon />
                  </ListItemIcon>
                  <ListItemText 
                    primary={item.name}
                    sx={{
                      '& .MuiListItemText-primary': {
                        color: isActive ? 'primary.main' : 'text.primary',
                        fontWeight: isActive ? 600 : 400,
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          )
        })}      </List>
    </StyledDrawer>
  )
}