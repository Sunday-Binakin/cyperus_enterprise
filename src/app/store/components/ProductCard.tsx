'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Card, 
  CardContent, 
  Typography, 
  CardActions, 
  Button, 
  Rating, 
  Box,
  Chip,
  Skeleton 
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { Product } from '@/types/product'



const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[4],
  },
}))

const ProductImage = styled(Box)({
  position: 'relative',
  height: 200,
  width: '100%',
  overflow: 'hidden',
})

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [imageLoading, setImageLoading] = useState(true)

  return (
    <Link href={`/store/${product.id}`} style={{ textDecoration: 'none' }}>
      <StyledCard>
        <ProductImage>
          {imageLoading && (
            <Skeleton 
              variant="rectangular" 
              width="100%" 
              height="100%" 
              animation="wave" 
            />
          )}
          <Image
            src={product.image}
            alt={product.name}
            fill
            style={{ 
              objectFit: 'cover',
              opacity: imageLoading ? 0 : 1,
            }}
            onLoad={() => setImageLoading(false)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </ProductImage>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography 
            gutterBottom 
            variant="h6" 
            component="h2"
            sx={{ 
              fontFamily: 'var(--font-bebas-neue)',
              fontSize: '1.5rem',
              letterSpacing: '0.5px'
            }}
          >
            {product.name}
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary" 
            sx={{ mb: 2 }}
          >
            {product.description.length > 120 
              ? `${product.description.slice(0, 120)}...` 
              : product.description}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Rating 
              value={product.rating} 
              precision={0.5} 
              readOnly 
              size="small" 
            />
            <Typography 
              variant="body2" 
              color="text.secondary" 
              sx={{ ml: 1 }}
            >
              ({product.reviews})
            </Typography>
          </Box>
          <Chip 
            label={product.category} 
            size="small" 
            sx={{ mb: 2 }} 
          />
        </CardContent>
        <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
          <Typography 
            variant="h6" 
            color="primary"
            sx={{ 
              fontFamily: 'var(--font-bebas-neue)',
              letterSpacing: '0.5px'
            }}
          >
            ${product.price.toFixed(2)}
          </Typography>
          <Button 
            size="small" 
            variant="contained" 
            sx={{ 
              fontFamily: 'var(--font-bebas-neue)',
              letterSpacing: '1px'
            }}
          >
            View Details
          </Button>
        </CardActions>
      </StyledCard>
    </Link>
  )
}
