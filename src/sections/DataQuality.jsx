import { Box, Container, Typography, Grid, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import UpdateIcon from '@mui/icons-material/Update';
import JoinInnerIcon from '@mui/icons-material/JoinInner';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const DimensionCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: '20px',
  background: theme.palette.background.paper,
  border: '1px solid rgba(98, 156, 68, 0.18)',
  boxShadow: '0 4px 24px rgba(15, 37, 71, 0.06)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: '0 16px 48px rgba(15, 37, 71, 0.1)',
  },
}));

const DimensionIconWrapper = styled(Box)(() => ({
  width: '56px',
  height: '56px',
  borderRadius: '14px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '20px',
  background: 'linear-gradient(135deg, #629C44 0%, #3d6b28 100%)',
  color: '#ffffff',
  boxShadow: '0 8px 20px rgba(98, 156, 68, 0.3)',
  flexShrink: 0,
}));

const dimensions = [
  { key: 'completeness', icon: <FactCheckOutlinedIcon sx={{ fontSize: 26 }} /> },
  { key: 'freshness',    icon: <UpdateIcon sx={{ fontSize: 26 }} /> },
  { key: 'uniqueness',   icon: <JoinInnerIcon sx={{ fontSize: 26 }} /> },
  { key: 'confidence',   icon: <VerifiedOutlinedIcon sx={{ fontSize: 26 }} /> },
];

function DataQuality() {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      sx={{ py: 12, background: 'linear-gradient(180deg, #ffffff 0%, #f0f7ea 100%)' }}
      id="data-quality"
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip
            label={t('dataQuality.label')}
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
          <Typography variant="h2" component="h2" gutterBottom sx={{ maxWidth: '800px', mx: 'auto' }}>
            {t('dataQuality.title')}
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: '760px', mx: 'auto', fontWeight: 400, lineHeight: 1.7 }}
          >
            {t('dataQuality.subtitle')}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {dimensions.map(({ key, icon }) => (
            <Grid item xs={12} sm={6} md={3} key={key} sx={{ display: 'flex' }}>
              <DimensionCard sx={{ width: '100%' }}>
                <DimensionIconWrapper>{icon}</DimensionIconWrapper>
                <Typography
                  variant="h6"
                  component="h3"
                  fontWeight={700}
                  gutterBottom
                  sx={{ color: '#0f172a', lineHeight: 1.35 }}
                >
                  {t(`dataQuality.${key}.title`)}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                  {t(`dataQuality.${key}.description`)}
                </Typography>
              </DimensionCard>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            mt: 5,
            mx: 'auto',
            maxWidth: '720px',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            gap: 1.25,
            p: 2.5,
            borderRadius: '14px',
            background: 'rgba(98, 156, 68, 0.08)',
            border: '1px solid rgba(98, 156, 68, 0.2)',
          }}
        >
          <CheckCircleIcon sx={{ color: '#629C44', fontSize: 20, mt: 0.25, flexShrink: 0 }} />
          <Typography variant="body2" sx={{ color: '#3d6b28', lineHeight: 1.7, fontWeight: 500 }}>
            {t('dataQuality.action')}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default DataQuality;
