import { useTranslation } from 'react-i18next';
import { Box, Container, Grid, Typography } from '@mui/material';

const METRICS = ['stat1', 'stat2', 'stat3', 'stat4'];

function MetricsStrip() {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: '#0f2547',
        py: { xs: 5, md: 6 },
        borderTop: '1px solid rgba(98,156,68,0.25)',
        borderBottom: '1px solid rgba(98,156,68,0.25)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 0 }}>
          {METRICS.map((key, i) => (
            <Grid
              item
              xs={6}
              md={3}
              key={key}
              sx={{
                textAlign: 'center',
                borderRight: {
                  md: i < METRICS.length - 1
                    ? '1px solid rgba(255,255,255,0.08)'
                    : 'none',
                },
                px: { md: 4 },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '2.4rem', md: '3rem' },
                  fontWeight: 800,
                  lineHeight: 1,
                  mb: 0.75,
                  background: 'linear-gradient(135deg, #a8d878 0%, #629C44 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-0.02em',
                }}
              >
                {t(`metrics.${key}.value`)}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: '#fff', fontWeight: 700, mb: 0.5, fontSize: '0.95rem' }}
              >
                {t(`metrics.${key}.label`)}
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.78rem' }}
              >
                {t(`metrics.${key}.context`)}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default MetricsStrip;
