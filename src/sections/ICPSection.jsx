import { useTranslation } from 'react-i18next';
import { Box, Container, Grid, Typography, Chip } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import RepeatIcon from '@mui/icons-material/Repeat';
import StorageIcon from '@mui/icons-material/Storage';

const PROFILES = [
  { key: 'fit1', Icon: GroupsIcon },
  { key: 'fit2', Icon: RepeatIcon },
  { key: 'fit3', Icon: StorageIcon },
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
          <Typography variant="h2" sx={{ mb: 2, maxWidth: 820, mx: 'auto' }}>
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
          {PROFILES.map((profile) => {
            const ProfileIcon = profile.Icon;
            return (
            <Grid item xs={12} md={4} key={profile.key}>
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
                  <ProfileIcon sx={{ color: '#629C44', fontSize: 26 }} />
                </Box>

                <Typography variant="h6" component="h3" sx={{ fontWeight: 700, mb: 1.5, color: '#0f2547' }}>
                  {t(`icp.${profile.key}.title`)}
                </Typography>

                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                  {t(`icp.${profile.key}.description`)}
                </Typography>
              </Box>
            </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

export default ICPSection;
