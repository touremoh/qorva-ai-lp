import { Box, Container, Typography, Button, Stack, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import GroupsIcon from '@mui/icons-material/Groups';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

const HeroSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  background: 'linear-gradient(135deg, #0a1628 0%, #0f2547 45%, #0d3321 100%)',
  position: 'relative',
  overflow: 'hidden',
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(14),
  [theme.breakpoints.down('md')]: {
    paddingTop: theme.spacing(16),
    paddingBottom: theme.spacing(10),
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-20%',
    right: '-8%',
    width: '700px',
    height: '700px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(98, 156, 68, 0.1) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-15%',
    left: '-8%',
    width: '600px',
    height: '600px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
}));

function Hero() {
  const { t } = useTranslation();

  return (
    <HeroSection id="hero">
      <Container maxWidth="lg">
        <Stack spacing={4} alignItems="center" textAlign="center">
          <Chip
            icon={<GroupsIcon sx={{ fontSize: '15px !important', color: '#a8d878 !important' }} />}
            label={t('hero.badge')}
            sx={{
              background: 'rgba(98, 156, 68, 0.15)',
              border: '1px solid rgba(98, 156, 68, 0.4)',
              color: '#a8d878',
              fontWeight: 600,
              fontSize: '0.82rem',
              px: 1,
            }}
          />

          <Typography
            variant="h1"
            component="h1"
            sx={{
              maxWidth: '860px',
              color: '#ffffff',
              fontWeight: 800,
              lineHeight: 1.1,
            }}
          >
            {t('hero.title')}{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #629C44 0%, #a8d878 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {t('hero.titleAccent')}
            </Box>
          </Typography>

          <Typography
            variant="h5"
            sx={{
              maxWidth: '720px',
              mx: 'auto',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.75,
              fontSize: { xs: '1rem', md: '1.2rem' },
            }}
          >
            {t('hero.subtitle')}
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button
              variant="contained"
              size="large"
              href="https://app.qorva.ai/register"
              sx={{
                px: 4,
                py: 1.75,
                fontSize: '1rem',
                background: 'linear-gradient(135deg, #629C44 0%, #3d6b28 100%)',
                boxShadow: '0 8px 24px rgba(98,156,68,0.35)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #a8d878 0%, #629C44 100%)',
                  boxShadow: '0 12px 32px rgba(98,156,68,0.45)',
                },
              }}
            >
              {t('hero.cta.primary')}
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="#sample-report"
              startIcon={<DescriptionOutlinedIcon />}
              sx={{
                px: 4,
                py: 1.75,
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.8)',
                borderColor: 'rgba(255,255,255,0.25)',
                '&:hover': {
                  borderColor: '#a8d878',
                  color: '#a8d878',
                  background: 'rgba(98,156,68,0.08)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              {t('hero.cta.secondary')}
            </Button>
          </Stack>

          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.38)', mt: -1, fontSize: '0.82rem' }}>
            {t('hero.note')}
          </Typography>
        </Stack>
      </Container>
    </HeroSection>
  );
}

export default Hero;
