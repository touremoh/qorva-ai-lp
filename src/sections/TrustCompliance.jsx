import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import VerifiedIcon from '@mui/icons-material/Verified';
import GavelIcon from '@mui/icons-material/Gavel';

const TrustCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: theme.spacing(4),
  borderRadius: '20px',
  background: 'rgba(255, 255, 255, 0.75)',
  backdropFilter: 'blur(12px)',
  border: '1px solid rgba(30, 58, 95, 0.1)',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  height: '100%',
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: '0 16px 40px rgba(30, 58, 95, 0.1)',
  },
}));

const IconWrapper = styled(Box)(() => ({
  width: '56px',
  height: '56px',
  borderRadius: '14px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '20px',
  background: 'linear-gradient(135deg, #1e3a5f 0%, #0f2547 100%)',
  color: '#ffffff',
  boxShadow: '0 8px 20px rgba(15, 37, 71, 0.25)',
}));

const trustItems = [
  { key: 'explainability', icon: <VisibilityIcon sx={{ fontSize: 26 }} /> },
  { key: 'control',        icon: <AdminPanelSettingsIcon sx={{ fontSize: 26 }} /> },
  { key: 'integrity',      icon: <VerifiedIcon sx={{ fontSize: 26 }} /> },
  { key: 'gdpr',           icon: <GavelIcon sx={{ fontSize: 26 }} /> },
];

function TrustCompliance() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        py: 12,
        background: 'linear-gradient(160deg, #f0f4ff 0%, #eef7ea 100%)',
      }}
      id="trust"
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{
              background: 'linear-gradient(135deg, #1e3a5f 0%, #0f2547 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              maxWidth: '720px',
              mx: 'auto',
            }}
          >
            {t('trust.title')}
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: '700px', mx: 'auto', fontWeight: 400, lineHeight: 1.7 }}
          >
            {t('trust.subtitle')}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {trustItems.map(({ key, icon }) => (
            <Grid item xs={12} sm={6} md={3} key={key}>
              <TrustCard>
                <IconWrapper>{icon}</IconWrapper>
                <Typography variant="h6" component="h3" fontWeight={700} gutterBottom sx={{ lineHeight: 1.3 }}>
                  {t(`trust.${key}.title`)}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                  {t(`trust.${key}.description`)}
                </Typography>
              </TrustCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default TrustCompliance;
