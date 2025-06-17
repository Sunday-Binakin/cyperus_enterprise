import { Skeleton, Container, Grid, Box } from '@mui/material'

export default function Loading() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 4 }}>
        <Skeleton width={120} height={32} />
      </Box>      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
        gap: 6
      }}>
        <Box>
          <Skeleton 
            variant="rectangular" 
            width="100%" 
            height={500} 
            sx={{ borderRadius: 1 }} 
          />
        </Box>
        <Box>
          <Skeleton width={80} height={32} sx={{ mb: 2 }} />
          <Skeleton width="80%" height={60} sx={{ mb: 2 }} />
          <Skeleton width={160} height={32} sx={{ mb: 2 }} />
          <Skeleton width={120} height={48} sx={{ mb: 3 }} />
          <Skeleton width="100%" height={100} sx={{ mb: 4 }} />
          <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
            <Skeleton width={140} height={48} />
            <Skeleton width={200} height={48} />
          </Box>
          <Skeleton width="100%" height={200} />
        </Box>
      </Box>
    </Container>
  )
}
