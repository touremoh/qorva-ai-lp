import { useTranslation } from 'react-i18next';
import { Box, Container, Typography, Chip } from '@mui/material';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

const ATS_NAMES = [
  'Bullhorn', 'Greenhouse', 'Workday', 'Lever', 'SmartRecruiters',
  'Recruiterbox', 'Taleo', 'iCIMS', 'Jobvite', 'Vincere',
];

function IntegrationStrip() {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: '#0f2547',
        py: { xs: 7, md: 9 },
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              backgroundColor: 'rgba(98,156,68,0.18)',
              borderRadius: '20px',
              px: 2,
              py: 0.5,
              mb: 2.5,
            }}
          >
            <SwapHorizIcon sx={{ color: '#a8d878', fontSize: 16 }} />
            <Typography
              variant="caption"
              sx={{
                color: '#a8d878',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontSize: '0.68rem',
              }}
            >
              {t('integration.eyebrow')}
            </Typography>
          </Box>

          <Typography
            variant="h3"
            sx={{
              color: '#fff',
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '1.75rem', md: '2.1rem' },
            }}
          >
            {t('integration.title')}
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: 'rgba(255,255,255,0.65)', maxWidth: 560, mx: 'auto', mb: 4 }}
          >
            {t('integration.subtitle')}
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 3,
            p: { xs: 3, md: 4 },
          }}
        >
          <Typography
            variant="caption"
            sx={{
              display: 'block',
              color: 'rgba(255,255,255,0.45)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontWeight: 700,
              fontSize: '0.68rem',
              mb: 2,
            }}
          >
            {t('integration.worksAlongside')}
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.25, mb: 3 }}>
            {ATS_NAMES.map((name) => (
              <Chip
                key={name}
                label={name}
                size="small"
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.09)',
                  color: 'rgba(255,255,255,0.85)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  '&:hover': { backgroundColor: 'rgba(255,255,255,0.14)' },
                }}
              />
            ))}
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              pt: 2.5,
              borderTop: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #629C44 0%, #3d6b28 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Box component="span" sx={{ color: '#fff', fontSize: '0.8rem', fontWeight: 800 }}>↗</Box>
            </Box>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
              {t('integration.exportNote')}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default IntegrationStrip;
