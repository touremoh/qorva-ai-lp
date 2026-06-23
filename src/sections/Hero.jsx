import { Box, Container, Typography, Button, Stack, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SearchIcon from '@mui/icons-material/Search';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  background: 'linear-gradient(135deg, #0a1628 0%, #0f2547 45%, #0d3321 100%)',
  position: 'relative',
  overflow: 'hidden',
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(10),
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

const QueryPanel = styled(Box)(({ theme }) => ({
  background: 'rgba(10, 22, 40, 0.85)',
  border: '1px solid rgba(98, 156, 68, 0.3)',
  borderRadius: '16px',
  padding: theme.spacing(3),
  backdropFilter: 'blur(12px)',
}));

const ResultsPanel = styled(Box)(({ theme }) => ({
  background: 'rgba(10, 22, 40, 0.85)',
  border: '1px solid rgba(37, 99, 235, 0.3)',
  borderRadius: '16px',
  padding: theme.spacing(3),
  backdropFilter: 'blur(12px)',
}));

function Hero() {
  const { t } = useTranslation();

  return (
    <HeroSection id="hero">
      <Container maxWidth="lg">
        <Stack spacing={4} alignItems="center" textAlign="center">
          <Chip
            icon={<AutoAwesomeIcon sx={{ fontSize: '15px !important', color: '#a8d878 !important' }} />}
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
              {t('hero.cta.trial')}
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<PlayCircleOutlineIcon />}
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
              {t('hero.cta.tour')}
            </Button>
          </Stack>

          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.38)', mt: -1, fontSize: '0.82rem' }}>
            {t('hero.trialNote')}
          </Typography>

          {/* Split-screen product mockup */}
          <Box
            sx={{
              mt: 2,
              width: '100%',
              maxWidth: '920px',
              mx: 'auto',
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 2,
              position: 'relative',
              zIndex: 1,
            }}
          >
            {/* Left panel: Natural language query */}
            <QueryPanel>
              <Stack spacing={2.5}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <SearchIcon sx={{ color: '#a8d878', fontSize: 16 }} />
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#a8d878',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      fontSize: '0.7rem',
                    }}
                  >
                    {t('hero.splitScreen.queryLabel')}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(98,156,68,0.2)',
                    borderRadius: '10px',
                    p: 2,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(255,255,255,0.82)',
                      lineHeight: 1.65,
                      fontStyle: 'italic',
                    }}
                  >
                    &ldquo;{t('hero.splitScreen.queryText')}&rdquo;
                  </Typography>
                  <Box
                    sx={{
                      display: 'inline-block',
                      width: '2px',
                      height: '14px',
                      background: '#629C44',
                      ml: 0.5,
                      verticalAlign: 'middle',
                      animation: 'blink 1s step-end infinite',
                      '@keyframes blink': {
                        '0%, 100%': { opacity: 1 },
                        '50%': { opacity: 0 },
                      },
                    }}
                  />
                </Box>

                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {['Java', 'Belgium', 'Fintech', 'Senior'].map((tag) => (
                    <Box
                      key={tag}
                      sx={{
                        px: 1.5,
                        py: 0.4,
                        borderRadius: '6px',
                        background: 'rgba(98,156,68,0.12)',
                        border: '1px solid rgba(98,156,68,0.3)',
                      }}
                    >
                      <Typography variant="caption" sx={{ color: '#a8d878', fontWeight: 600, fontSize: '0.72rem' }}>
                        {tag}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Stack>
            </QueryPanel>

            {/* Right panel: AI response / results */}
            <ResultsPanel>
              <Stack spacing={2.5}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <LeaderboardIcon sx={{ color: '#60a5fa', fontSize: 16 }} />
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#60a5fa',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      fontSize: '0.7rem',
                    }}
                  >
                    {t('hero.splitScreen.resultsLabel')}
                  </Typography>
                </Box>

                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5 }}>
                  <Box
                    sx={{
                      background: 'rgba(98,156,68,0.1)',
                      border: '1px solid rgba(98,156,68,0.25)',
                      borderRadius: '10px',
                      p: 1.5,
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="h4" sx={{ color: '#a8d878', fontWeight: 800, lineHeight: 1.1 }}>
                      42
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem' }}>
                      {t('hero.splitScreen.candidatesFound')}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      background: 'rgba(37,99,235,0.1)',
                      border: '1px solid rgba(37,99,235,0.25)',
                      borderRadius: '10px',
                      p: 1.5,
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="h4" sx={{ color: '#60a5fa', fontWeight: 800, lineHeight: 1.1 }}>
                      12
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem' }}>
                      {t('hero.splitScreen.topMatches')}
                    </Typography>
                  </Box>
                </Box>

                {[
                  { label: t('hero.splitScreen.metric1.label'), value: t('hero.splitScreen.metric1.value'), color: '#a8d878', pct: 67 },
                  { label: t('hero.splitScreen.metric2.label'), value: t('hero.splitScreen.metric2.value'), color: '#60a5fa', pct: 83 },
                ].map((metric) => (
                  <Box key={metric.label}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.75 }}>
                      <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.72rem' }}>
                        {metric.label}
                      </Typography>
                      <Typography variant="caption" sx={{ color: metric.color, fontWeight: 700, fontSize: '0.72rem' }}>
                        {metric.value}
                      </Typography>
                    </Box>
                    <Box sx={{ height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.07)' }}>
                      <Box
                        sx={{
                          height: '100%',
                          borderRadius: 3,
                          width: `${metric.pct}%`,
                          background: `linear-gradient(90deg, ${metric.color}99, ${metric.color})`,
                        }}
                      />
                    </Box>
                  </Box>
                ))}

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CheckCircleIcon sx={{ color: '#a8d878', fontSize: 14 }} />
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.42)', fontSize: '0.7rem' }}>
                    Ranked by your custom scoring rules
                  </Typography>
                </Box>
              </Stack>
            </ResultsPanel>
          </Box>
        </Stack>
      </Container>
    </HeroSection>
  );
}

export default Hero;
