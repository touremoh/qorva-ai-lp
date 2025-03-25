import { Box, Container, Typography, Button, Stack, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const GradientText = styled('span')(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}));

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
  position: 'relative',
  overflow: 'hidden',
  paddingTop: theme.spacing(8),
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.1) 0%, rgba(37, 99, 235, 0) 70%)',
  },
}));

const HighlightPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  background: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  border: '1px solid rgba(37, 99, 235, 0.1)',
  marginTop: theme.spacing(4),
}));

function Hero() {
  const { t } = useTranslation();

  return (
    <HeroSection id="about">
      <Container maxWidth="lg">
        <Stack spacing={4} alignItems="center" textAlign="center">
          <Typography variant="h1" component="h1">
            {t('hero.title')}
          </Typography>
          
          <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
            {t('hero.subtitle')}
          </Typography>
          
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mt={4}>
            <Button
              variant="contained"
              size="large"
              sx={{
                px: 10,
                py: 2,
                fontSize: '1.1rem',
              }}
            >
              {t('hero.cta.trial')}
            </Button>
            {/*<Button*/}
            {/*  variant="outlined"*/}
            {/*  size="large"*/}
            {/*  sx={{*/}
            {/*    px: 4,*/}
            {/*    py: 1.5,*/}
            {/*    fontSize: '1.1rem',*/}
            {/*  }}*/}
            {/*>*/}
            {/*  {t('hero.cta.demo')}*/}
            {/*</Button>*/}
          </Stack>

          <HighlightPaper elevation={0}>
            <Typography variant="h6" gutterBottom color="primary.main">
              {t('hero.about.title')}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
              {t('hero.about.description')}
            </Typography>
          </HighlightPaper>
          
          {/*<Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>*/}
          {/*  <Typography variant="subtitle1" color="text.secondary">*/}
          {/*    Trusted by innovative companies worldwide*/}
          {/*  </Typography>*/}
          {/*  /!* Add company logos here *!/*/}
          {/*</Box>*/}
        </Stack>
      </Container>
    </HeroSection>
  );
}

export default Hero; 
