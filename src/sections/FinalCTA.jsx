import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const CTASection = styled(Box)(() => ({
  background: 'linear-gradient(135deg, #0a1628 0%, #0f2547 50%, #0d3321 100%)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-30%',
    right: '-10%',
    width: '600px',
    height: '600px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(98,156,68,0.12) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-20%',
    left: '-5%',
    width: '480px',
    height: '480px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
}));

function FinalCTA() {
  const { t } = useTranslation();

  return (
    <CTASection id="final-cta">
      <Container maxWidth="md" sx={{ py: { xs: 10, md: 14 }, position: 'relative', zIndex: 1 }}>
        <Stack spacing={4} alignItems="center" textAlign="center">
          <Typography
            variant="h2"
            component="h2"
            sx={{
              color: '#ffffff',
              fontWeight: 800,
              lineHeight: 1.15,
              maxWidth: '720px',
            }}
          >
            {t('finalCta.title')}{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #629C44 0%, #a8d878 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {t('finalCta.titleAccent')}
            </Box>
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: 'rgba(255,255,255,0.65)',
              fontWeight: 400,
              maxWidth: '600px',
              lineHeight: 1.75,
              fontSize: { xs: '1rem', md: '1.15rem' },
            }}
          >
            {t('finalCta.subtitle')}
          </Typography>

          <Button
            variant="contained"
            size="large"
            startIcon={<RocketLaunchIcon />}
            href="https://app.qorva.ai/register"
            sx={{
              px: 5,
              py: 2,
              fontSize: '1.05rem',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #629C44 0%, #3d6b28 100%)',
              boxShadow: '0 12px 32px rgba(98,156,68,0.4)',
              '&:hover': {
                background: 'linear-gradient(135deg, #a8d878 0%, #629C44 100%)',
                boxShadow: '0 16px 40px rgba(98,156,68,0.5)',
                transform: 'translateY(-3px)',
              },
            }}
          >
            {t('finalCta.cta')}
          </Button>

          <Typography
            variant="body2"
            sx={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.85rem' }}
          >
            {t('finalCta.note')}
          </Typography>
        </Stack>
      </Container>
    </CTASection>
  );
}

export default FinalCTA;
