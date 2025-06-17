'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
    Container,
    Typography,
    Box,
    Button,
    Rating,
    Chip,
    Divider,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableRow,
    IconButton,
    Skeleton,
    Breadcrumbs
} from '@mui/material'
import { Grid } from '@/app/components/StyledGrid'
import {
    ArrowBack as ArrowBackIcon,
    Add as AddIcon,
    Remove as RemoveIcon,
    ShoppingCart as ShoppingCartIcon
} from '@mui/icons-material'
import { styled } from '@mui/material/styles'

// Mock data - Replace with actual API call
const mockProduct = {
    id: '1',
    name: 'Premium Tigernut Flour',
    description: 'Organic, gluten-free tigernut flour perfect for baking. Rich in fiber and nutrients.',
    price: 12.99,
    category: 'Flour',
    image: '/images/nut_4.jpg',
    stock: 50,
    rating: 4.5,
    reviews: 128,
    features: ['Gluten-free', 'Organic', 'High in fiber'],
    specifications: {
        'Weight': '1 lb',
        'Origin': 'West Africa',
        'Packaging': 'Resealable bag'
    }
}

const ImageContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    height: 500,
    borderRadius: theme.shape.borderRadius,
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
        height: 400,
    },
}))

interface PageProps {
    params: {
        productId: string
    }
}

export default function ProductPage({ params }: PageProps) {
    const [quantity, setQuantity] = useState(1)
    const [imageLoading, setImageLoading] = useState(true)

    const handleQuantityChange = (delta: number) => {
        setQuantity(prev => Math.max(1, Math.min(mockProduct.stock, prev + delta)))
    }

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Breadcrumbs sx={{ mb: 4 }}>
                <Link href="/store" style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <ArrowBackIcon sx={{ mr: 0.5, fontSize: '1.2rem' }} />
                    Back to Store
                </Link>
            </Breadcrumbs>      <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: 6
            }}>
                <Box>
                    <ImageContainer>
                        {imageLoading && (
                            <Skeleton
                                variant="rectangular"
                                width="100%"
                                height="100%"
                                animation="wave"
                            />
                        )}
                        <Image
                            src={mockProduct.image}
                            alt={mockProduct.name}
                            fill
                            style={{
                                objectFit: 'cover',
                                opacity: imageLoading ? 0 : 1,
                            }}
                            onLoad={() => setImageLoading(false)}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </ImageContainer>
                </Box>

                <Box>
                    <Box sx={{ mb: 4 }}>
                        <Chip
                            label={mockProduct.category}
                            color="primary"
                            sx={{ mb: 2 }}
                        />
                        <Typography
                            variant="h1"
                            sx={{
                                fontFamily: 'var(--font-bebas-neue)',
                                fontSize: { xs: '2.5rem', md: '3.5rem' },
                                letterSpacing: '1px',
                                mb: 2
                            }}
                        >
                            {mockProduct.name}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Rating
                                value={mockProduct.rating}
                                precision={0.5}
                                readOnly
                            />
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ ml: 1 }}
                            >
                                ({mockProduct.reviews} reviews)
                            </Typography>
                        </Box>
                        <Typography
                            variant="h4"
                            color="primary"
                            sx={{
                                fontFamily: 'var(--font-bebas-neue)',
                                letterSpacing: '1px',
                                mb: 3
                            }}
                        >
                            ${mockProduct.price.toFixed(2)}
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 4 }}>
                            {mockProduct.description}
                        </Typography>

                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                border: 1,
                                borderColor: 'divider',
                                borderRadius: 1,
                                mr: 2
                            }}>
                                <IconButton
                                    onClick={() => handleQuantityChange(-1)}
                                    disabled={quantity <= 1}
                                >
                                    <RemoveIcon />
                                </IconButton>
                                <Typography sx={{ px: 2 }}>{quantity}</Typography>
                                <IconButton
                                    onClick={() => handleQuantityChange(1)}
                                    disabled={quantity >= mockProduct.stock}
                                >
                                    <AddIcon />
                                </IconButton>
                            </Box>
                            <Button
                                variant="contained"
                                size="large"
                                startIcon={<ShoppingCartIcon />}
                                sx={{
                                    fontFamily: 'var(--font-bebas-neue)',
                                    letterSpacing: '1px',
                                    py: 1.5
                                }}
                            >
                                Add to Cart
                            </Button>
                        </Box>
                    </Box>

                    <Divider sx={{ mb: 4 }} />

                    <Box sx={{ mb: 4 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontFamily: 'var(--font-bebas-neue)',
                                letterSpacing: '0.5px',
                                mb: 2
                            }}
                        >
                            Features
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                            {mockProduct.features.map((feature) => (
                                <Chip
                                    key={feature}
                                    label={feature}
                                    variant="outlined"
                                />
                            ))}
                        </Box>
                    </Box>

                    <Paper variant="outlined" sx={{ p: 2 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontFamily: 'var(--font-bebas-neue)',
                                letterSpacing: '0.5px',
                                mb: 2
                            }}
                        >
                            Specifications
                        </Typography>
                        <Table size="small">
                            <TableBody>
                                {Object.entries(mockProduct.specifications).map(([key, value]) => (
                                    <TableRow key={key}>
                                        <TableCell
                                            component="th"
                                            scope="row"
                                            sx={{ border: 'none', pl: 0, width: '40%' }}
                                        >
                                            {key}
                                        </TableCell>
                                        <TableCell sx={{ border: 'none' }}>{value}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>        </Box>
            </Box>
        </Container>
    )
}
