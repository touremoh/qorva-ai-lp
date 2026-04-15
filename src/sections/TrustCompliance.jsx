import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LockIcon from '@mui/icons-material/Lock';
import BalanceIcon from '@mui/icons-material/Balance';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';

const TrustCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: theme.spacing(4),
  borderRadius: '20px',
  background: 'rgba(255, 255, 255, 0.7)',
  backdropFilter: 'blur(8px)',
  border: '1px solid rgba(37, 99, 235, 0.1)',
  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
  transition: 'transform 0.3s ease',
  height: '100%',
  '&:hover': {
    transform: 'translateY(-6px)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '56px',
  height: '56px',
  borderRadius: '14px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2.5),
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  color: theme.palette.common.white,
  boxShadow: '0 8px 16px rgba(37, 99, 235, 0.25)',
}));

const trustItems = [
  { key: 'gdpr', icon: <VerifiedUserIcon sx={{ fontSize: 28 }} /> },
  { key: 'security', icon: <LockIcon sx={{ fontSize: 28 }} /> },
  { key: 'fairness', icon: <BalanceIcon sx={{ fontSize: 28 }} /> },
  { key: 'privacy', icon: <PrivacyTipIcon sx={{ fontSize: 28 }} /> },
];

function TrustCompliance() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        py: 12,
        background: 'linear-gradient(160deg, #f0fdf8 0%, #f0f5ff 100%)',
      }}
      id="trust"
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" component="h2" gutterBottom>
            {t('trust.title')}
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontWeight: 400 }}>
            {t('trust.subtitle')}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {trustItems.map(({ key, icon }) => (
            <Grid item xs={12} sm={6} md={3} key={key}>
              <TrustCard>
                <IconWrapper>{icon}</IconWrapper>
                <Typography variant="h6" component="h3" fontWeight={700} gutterBottom>
                  {t(`trust.${key}.title`)}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
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
