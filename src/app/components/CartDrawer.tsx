'use client'

import { 
  Drawer, 
  Box, 
  Typography, 
  IconButton, 
  List, 
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  Divider,
  Stack
} from '@mui/material'
import { Close as CloseIcon, Delete as DeleteIcon } from '@mui/icons-material'
import { useCart } from '@/contexts/CartContext'
import Image from 'next/image'
import { formatCurrency } from '@/utils/format'

interface CartDrawerProps {
  open: boolean
  onClose: () => void
}

export function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { cart, removeFromCart, updateQuantity } = useCart()

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { width: { xs: '100%', sm: 400 } }
      }}
    >
      <Box sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              flexGrow: 1,
              fontFamily: 'var(--font-bebas-neue)',
              letterSpacing: '0.5px',
              fontSize: '1.5rem'
            }}
          >
            Shopping Cart
          </Typography>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>

        {cart.items.length === 0 ? (
          <Box 
            sx={{ 
              flexGrow: 1, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}
          >
            <Typography color="text.secondary">Your cart is empty</Typography>
          </Box>
        ) : (
          <>
            <List sx={{ flexGrow: 1, overflow: 'auto' }}>
              {cart.items.map(item => (
                <ListItem
                  key={item.product.id}
                  sx={{
                    py: 2,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 2
                  }}
                >
                  <Box 
                    sx={{ 
                      position: 'relative',
                      width: 80,
                      height: 80,
                      flexShrink: 0,
                      borderRadius: 1,
                      overflow: 'hidden'
                    }}
                  >
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </Box>
                  <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontFamily: 'var(--font-bebas-neue)',
                        letterSpacing: '0.5px'
                      }}
                    >
                      {item.product.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                      <Typography variant="body2" color="primary.main">
                        {formatCurrency(item.product.price)}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mx: 1 }}>
                        ×
                      </Typography>
                      <select
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.product.id, Number(e.target.value))}
                        style={{
                          padding: '4px',
                          borderRadius: '4px',
                          border: '1px solid rgba(0,0,0,0.23)'
                        }}
                      >
                        {[...Array(10)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </select>
                    </Box>
                  </Box>
                  <IconButton 
                    onClick={() => removeFromCart(item.product.id)}
                    size="small"
                    sx={{ color: 'error.main' }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              ))}
            </List>
            
            <Box sx={{ pt: 2 }}>
              <Divider />
              <Stack spacing={2} sx={{ mt: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="subtitle1">Subtotal</Typography>
                  <Typography variant="subtitle1">
                    {formatCurrency(cart.subtotal)}
                  </Typography>
                </Box>
                <Button 
                  variant="contained" 
                  fullWidth
                  size="large"
                  sx={{
                    fontFamily: 'var(--font-bebas-neue)',
                    letterSpacing: '1px',
                    fontSize: '1.1rem'
                  }}
                >
                  Checkout ({cart.totalItems} {cart.totalItems === 1 ? 'item' : 'items'})
                </Button>
              </Stack>
            </Box>
          </>
        )}
      </Box>
    </Drawer>
  )
}
