import { Box, Container, Typography, Button, Stack, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import BookDemoButton from '../components/BookDemoButton';
import GroupsIcon from '@mui/icons-material/Groups';

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
            <BookDemoButton size="large" />
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
