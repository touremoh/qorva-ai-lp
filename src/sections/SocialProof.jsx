import { useTranslation } from 'react-i18next';
import { Box, Container, Grid, Typography, Avatar, Chip } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const TESTIMONIALS = [
  { key: 'testimonial1', initials: 'SC', color: '#629C44' },
  { key: 'testimonial2', initials: 'MR', color: '#1e3a5f' },
  { key: 'testimonial3', initials: 'AP', color: '#8b5cf6' },
];

function SocialProof() {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      sx={{
        background: 'linear-gradient(160deg, #f8fafe 0%, #f0f7eb 100%)',
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Chip
            label={t('socialProof.label')}
            size="small"
            sx={{
              backgroundColor: 'rgba(98, 156, 68, 0.12)',
              color: '#3d6b28',
              fontWeight: 700,
              letterSpacing: '0.08em',
              fontSize: '0.7rem',
              textTransform: 'uppercase',
              mb: 2,
            }}
          />
          <Typography variant="h2" sx={{ mb: 2 }}>
            {t('socialProof.title')}
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 560, mx: 'auto' }}>
            {t('socialProof.subtitle')}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {TESTIMONIALS.map(({ key, initials, color }) => (
            <Grid item xs={12} md={4} key={key}>
              <Box
                sx={{
                  height: '100%',
                  p: 3.5,
                  borderRadius: 3,
                  backgroundColor: '#fff',
                  border: '1px solid rgba(15, 37, 71, 0.08)',
                  boxShadow: '0 4px 20px rgba(15, 37, 71, 0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <FormatQuoteIcon sx={{ color: '#a8d878', fontSize: 36, mb: 1.5, opacity: 0.8 }} />
                <Typography
                  variant="body1"
                  sx={{ color: '#0f172a', lineHeight: 1.65, flex: 1, mb: 3, fontSize: '0.975rem', fontStyle: 'italic' }}
                >
                  "{t(`socialProof.${key}.quote`)}"
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Avatar sx={{ width: 40, height: 40, backgroundColor: color, fontSize: '0.85rem', fontWeight: 700 }}>
                    {initials}
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#0f2547', lineHeight: 1.3 }}>
                      {t(`socialProof.${key}.name`)}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      {t(`socialProof.${key}.role`)}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default SocialProof;
