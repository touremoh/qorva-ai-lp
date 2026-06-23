import { useState } from 'react';
import { Box, Container, Typography, Chip, Stack, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';

const FEATURES = [
  { src: '/skillsDistribution.jpg',    key: 'feature1', number: '01' },
  { src: '/candidateRanking.jpg',      key: 'feature2', number: '02' },
  { src: '/clustering.jpg',            key: 'feature3', number: '03' },
  { src: '/candidateComparison.jpg',   key: 'feature4', number: '04' },
];

const ShowcaseSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(180deg, #ffffff 0%, #f0f7ea 100%)',
  padding: theme.spacing(12, 0),
}));


function FeatureScreenshot({ src, alt }) {
  const [errored, setErrored] = useState(false);

  if (!errored) {
    return (
      <Box
        component="img"
        src={src}
        alt={alt}
        onError={() => setErrored(true)}
        sx={{ width: '100%', display: 'block' }}
      />
    );
  }

  return (
    <Box sx={{
      aspectRatio: '4/3',
      background: 'linear-gradient(135deg, #0a1628 0%, #0f2547 50%, #0d3321 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: 2,
    }}>
      <BrokenImageOutlinedIcon sx={{ fontSize: 56, color: 'rgba(255,255,255,0.15)' }} />
      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'monospace' }}>
        {src}
      </Typography>
    </Box>
  );
}

export default function FeatureShowcase() {
  const { t } = useTranslation();

  return (
    <ShowcaseSection component="section">
      <Container maxWidth="lg">
        {/* Section header */}
        <Stack spacing={3} alignItems="center" textAlign="center" mb={10}>
          <Chip
            icon={<AutoFixHighIcon sx={{ fontSize: '15px !important', color: '#629C44 !important' }} />}
            label={t('featureShowcase.label')}
            sx={{
              background: 'rgba(98, 156, 68, 0.1)',
              border: '1px solid rgba(98, 156, 68, 0.3)',
              color: '#3d6b28',
              fontWeight: 600,
              fontSize: '0.82rem',
              px: 1,
            }}
          />
          <Typography variant="h2" sx={{ color: '#0f172a', maxWidth: 720 }}>
            {t('featureShowcase.title')}
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: 640, mx: 'auto', color: 'text.secondary', lineHeight: 1.75 }}
          >
            {t('featureShowcase.subtitle')}
          </Typography>
        </Stack>

        {/* Alternating rows */}
        <Stack spacing={12}>
          {FEATURES.map(({ src, key, number }, index) => {
            const imageLeft = index % 2 === 0;
            return (
              <Grid
                container
                spacing={{ xs: 4, md: 8 }}
                alignItems="center"
                key={key}
              >
                {/* Image column — alternates left/right */}
                <Grid
                  item
                  xs={12}
                  md={7}
                  order={{ xs: 1, md: imageLeft ? 1 : 2 }}
                >
                  <Box sx={{
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 24px 60px -12px rgba(15, 37, 71, 0.22), 0 0 0 1px rgba(15, 37, 71, 0.08)',
                  }}>
                    <FeatureScreenshot
                      src={src}
                      alt={t(`featureShowcase.${key}.caption`)}
                    />
                  </Box>
                </Grid>

                {/* Description column — opposite side */}
                <Grid
                  item
                  xs={12}
                  md={5}
                  order={{ xs: 2, md: imageLeft ? 2 : 1 }}
                >
                  <Stack spacing={3} sx={{ px: { md: 2 } }}>
                    {/* Feature number + label */}
                    <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1 }}>
                      <Box sx={{
                        width: 32,
                        height: 32,
                        borderRadius: '8px',
                        background: 'linear-gradient(135deg, #629C44 0%, #3d6b28 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <Typography variant="caption" sx={{ color: '#fff', fontWeight: 800, fontSize: '0.7rem', lineHeight: 1 }}>
                          {number}
                        </Typography>
                      </Box>
                      <Typography variant="caption" sx={{ color: '#629C44', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.75rem' }}>
                        {t('featureShowcase.label')}
                      </Typography>
                    </Box>

                    {/* Caption */}
                    <Typography variant="h3" sx={{ color: '#0f172a', fontWeight: 700, lineHeight: 1.25 }}>
                      {t(`featureShowcase.${key}.caption`)}
                    </Typography>

                    <Box sx={{ width: 40, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, #629C44, #a8d878)' }} />

                    {/* Example query bubble */}
                    <Box sx={{
                      background: 'linear-gradient(135deg, #629C44 0%, #3d6b28 100%)',
                      borderRadius: '18px 18px 18px 4px',
                      px: 2.5,
                      py: 1.75,
                    }}>
                      <Typography variant="body2" sx={{ color: '#ffffff', fontStyle: 'italic', lineHeight: 1.6, fontSize: '0.9rem' }}>
                        "{t(`featureShowcase.${key}.query`)}"
                      </Typography>
                    </Box>

                    {/* Benefit description */}
                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.75 }}>
                      {t(`featureShowcase.${key}.description`)}
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            );
          })}
        </Stack>
      </Container>
    </ShowcaseSection>
  );
}
