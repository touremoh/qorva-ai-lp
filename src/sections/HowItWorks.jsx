import { Box, Container, Typography, Stack, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const StepPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  position: 'relative',
  borderRadius: '16px',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
  background: theme.palette.background.paper,
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
}));

const StepNumber = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  top: '-24px',
  left: '24px',
  fontSize: '4rem',
  fontWeight: 700,
  color: theme.palette.primary.main,
  opacity: 0.1,
  zIndex: 0,
}));

function HowItWorks() {
  const { t } = useTranslation();

  return (
    <Box sx={{ py: 12, background: '#ffffff' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" component="h2" gutterBottom>
            {t('howItWorks.title')}
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
            {t('howItWorks.subtitle')}
          </Typography>
        </Box>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          sx={{
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              top: '50%',
              left: '10%',
              right: '10%',
              height: '2px',
              background: 'linear-gradient(90deg, rgba(37, 99, 235, 0.1) 0%, rgba(37, 99, 235, 0.1) 100%)',
              zIndex: 0,
              display: { xs: 'none', md: 'block' },
            },
          }}
        >
          {['account', 'upload', 'insights'].map((step, index) => (
            <Box key={step} sx={{ flex: 1, position: 'relative', zIndex: 1 }}>
              <StepPaper elevation={0}>
                <StepNumber>{String(index + 1).padStart(2, '0')}</StepNumber>
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {t(`howItWorks.steps.${step}.title`)}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {t(`howItWorks.steps.${step}.description`)}
                  </Typography>
                </Box>
              </StepPaper>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default HowItWorks; 