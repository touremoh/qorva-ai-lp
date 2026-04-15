import { Box, Container, Typography, Button, Stack, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const GradientText = styled('span')(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}));

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  background: `linear-gradient(160deg, #f0f5ff 0%, #ffffff 50%, #f0fdf8 100%)`,
  position: 'relative',
  overflow: 'hidden',
  paddingTop: theme.spacing(12),
  [theme.breakpoints.down('md')]: {
    paddingTop: theme.spacing(15),
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-20%',
    right: '-10%',
    width: '600px',
    height: '600px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(37, 99, 235, 0.07) 0%, rgba(37, 99, 235, 0) 70%)',
    pointerEvents: 'none',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-10%',
    left: '-5%',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(16, 185, 129, 0.07) 0%, rgba(16, 185, 129, 0) 70%)',
    pointerEvents: 'none',
  },
}));

const MetricBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(2, 3),
  borderRadius: '16px',
  background: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(8px)',
  border: '1px solid rgba(37, 99, 235, 0.1)',
  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
  minWidth: '120px',
}));

const ScreenshotContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(8),
  width: '100%',
  maxWidth: '1000px',
  position: 'relative',
  borderRadius: '24px',
  overflow: 'hidden',
  boxShadow: '0 40px 80px -20px rgba(37, 99, 235, 0.2), 0 0 0 1px rgba(37, 99, 235, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.6)',
  '& img': {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  [theme.breakpoints.down('md')]: {
    marginTop: theme.spacing(6),
    borderRadius: '16px',
  },
}));

function Hero() {
  const { t } = useTranslation();

  const metrics = [
    { key: 'metric1' },
    { key: 'metric2' },
    { key: 'metric3' },
  ];

  return (
    <HeroSection id="hero">
      <Container maxWidth="lg">
        <Stack spacing={4} alignItems="center" textAlign="center">
          <Chip
            icon={<AutoAwesomeIcon sx={{ fontSize: '16px !important' }} />}
            label={t('hero.badge')}
            sx={{
              background: 'linear-gradient(135deg, rgba(37,99,235,0.1), rgba(16,185,129,0.1))',
              border: '1px solid rgba(37,99,235,0.2)',
              color: 'primary.main',
              fontWeight: 600,
              fontSize: '0.85rem',
              px: 1,
            }}
          />

          <Typography variant="h1" component="h1" sx={{ maxWidth: '900px' }}>
            <GradientText>{t('hero.title')}</GradientText>
          </Typography>

          <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '680px', mx: 'auto', fontWeight: 400 }}>
            {t('hero.subtitle')}
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mt={1}>
            <Button
              variant="contained"
              size="large"
              sx={{ px: 4, py: 1.75, fontSize: '1rem' }}
              href="https://app.qorva.ai/register"
            >
              {t('hero.cta.trial')}
            </Button>
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} mt={2}>
            {metrics.map(({ key }) => (
              <MetricBox key={key}>
                <Typography
                  variant="h4"
                  component="span"
                  sx={{
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #2563eb, #10b981)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'block',
                  }}
                >
                  {t(`hero.${key}.value`)}
                </Typography>
                <Typography variant="body2" color="text.secondary" fontWeight={500}>
                  {t(`hero.${key}.label`)}
                </Typography>
              </MetricBox>
            ))}
          </Stack>

          <ScreenshotContainer>
            <Box
              component="img"
              src="/test.png"
              alt="Qorva AI Dashboard"
              sx={{
                width: '100%',
                height: 'auto',
                backgroundColor: 'rgba(0,0,0,0.05)',
                minHeight: { xs: '200px', md: '500px' },
              }}
            />
          </ScreenshotContainer>
        </Stack>
      </Container>
    </HeroSection>
  );
}

export default Hero;
