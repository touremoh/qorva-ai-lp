import { useTranslation } from 'react-i18next';
import { Box, Container, Grid, Typography, Chip } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import StarsIcon from '@mui/icons-material/Stars';

const CHECK_KEYS = ['check1', 'check2', 'check3'];

const PROFILES = [
  { key: 'agency',    Icon: PeopleAltIcon },
  { key: 'inhouse',   Icon: BusinessCenterIcon },
  { key: 'executive', Icon: StarsIcon },
];

function ICPSection() {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      sx={{
        background: 'linear-gradient(160deg, #f0f7eb 0%, #f8fafe 100%)',
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Chip
            label={t('icp.label')}
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
            {t('icp.title')}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', maxWidth: 640, mx: 'auto' }}
          >
            {t('icp.subtitle')}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {PROFILES.map(({ key, Icon }) => (
            <Grid item xs={12} md={4} key={key}>
              <Box
                sx={{
                  height: '100%',
                  p: 4,
                  borderRadius: 3,
                  backgroundColor: '#fff',
                  border: '1px solid rgba(98, 156, 68, 0.18)',
                  boxShadow: '0 4px 20px rgba(15, 37, 71, 0.06)',
                  transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                  '&:hover': {
                    boxShadow: '0 12px 40px rgba(15, 37, 71, 0.12)',
                    transform: 'translateY(-3px)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, rgba(98,156,68,0.15) 0%, rgba(98,156,68,0.05) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2.5,
                  }}
                >
                  <Icon sx={{ color: '#629C44', fontSize: 26 }} />
                </Box>

                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: '#0f2547' }}>
                  {t(`icp.${key}.title`)}
                </Typography>

                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2.5, lineHeight: 1.65 }}>
                  {t(`icp.${key}.description`)}
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {CHECK_KEYS.map((ck) => (
                    <Box key={ck} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                      <Box
                        sx={{
                          width: 18,
                          height: 18,
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #629C44 0%, #3d6b28 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          mt: 0.15,
                        }}
                      >
                        <Box component="span" sx={{ color: '#fff', fontSize: '0.65rem', fontWeight: 800 }}>✓</Box>
                      </Box>
                      <Typography variant="body2" sx={{ color: '#0f2547', lineHeight: 1.5 }}>
                        {t(`icp.${key}.${ck}`)}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ICPSection;
