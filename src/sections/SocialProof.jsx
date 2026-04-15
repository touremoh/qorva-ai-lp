import { Box, Container, Typography, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';

const logos = [
  { name: 'Acme Corp', abbr: 'AC' },
  { name: 'TechCorp', abbr: 'TC' },
  { name: 'ScaleUp', abbr: 'SU' },
  { name: 'Nexora', abbr: 'NX' },
  { name: 'Velocity', abbr: 'VL' },
  { name: 'Orion HR', abbr: 'OH' },
  { name: 'Pinnacle', abbr: 'PN' },
];

function SocialProof() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        py: 6,
        background: '#f8fafc',
        borderTop: '1px solid rgba(0,0,0,0.05)',
        borderBottom: '1px solid rgba(0,0,0,0.05)',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="body1"
          color="text.secondary"
          align="center"
          sx={{ mb: 4, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.8rem' }}
        >
          {t('socialProof.title')}
        </Typography>
        <Stack
          direction="row"
          spacing={4}
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          sx={{ gap: 4 }}
        >
          {logos.map((logo) => (
            <Box
              key={logo.name}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                opacity: 0.45,
                transition: 'opacity 0.2s',
                '&:hover': { opacity: 0.75 },
                userSelect: 'none',
              }}
            >
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #e2e8f0, #cbd5e1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Typography variant="caption" sx={{ fontWeight: 700, color: '#64748b', fontSize: '0.65rem' }}>
                  {logo.abbr}
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ fontWeight: 700, color: 'text.primary', whiteSpace: 'nowrap' }}>
                {logo.name}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default SocialProof;
