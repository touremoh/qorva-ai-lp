import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import StorageIcon from '@mui/icons-material/Storage';
import ArticleIcon from '@mui/icons-material/Article';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import PsychologyIcon from '@mui/icons-material/Psychology';

const ProblemCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: '20px',
  background: 'rgba(255, 255, 255, 0.9)',
  border: '1px solid rgba(30, 58, 95, 0.08)',
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

const ProblemIconWrapper = styled(Box)(() => ({
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
  flexShrink: 0,
}));

const problemItems = [
  { key: 'item1', icon: <StorageIcon sx={{ fontSize: 26 }} /> },
  { key: 'item2', icon: <ArticleIcon sx={{ fontSize: 26 }} /> },
  { key: 'item3', icon: <FilterAltOffIcon sx={{ fontSize: 26 }} /> },
  { key: 'item4', icon: <PsychologyIcon sx={{ fontSize: 26 }} /> },
];

function Stats() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        py: 12,
        background: 'linear-gradient(180deg, #f0f4ff 0%, #f8fafe 100%)',
      }}
      id="problem"
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
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            {t('problem.title')}
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: '760px', mx: 'auto', fontWeight: 400, lineHeight: 1.7 }}
          >
            {t('problem.subtitle')}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {problemItems.map(({ key, icon }) => (
            <Grid item xs={12} sm={6} md={3} key={key} sx={{ display: 'flex' }}>
              <ProblemCard sx={{ width: '100%' }}>
                <ProblemIconWrapper>{icon}</ProblemIconWrapper>
                <Typography
                  variant="h6"
                  component="h3"
                  fontWeight={700}
                  gutterBottom
                  sx={{ color: '#0f172a', lineHeight: 1.35 }}
                >
                  {t(`problem.${key}.title`)}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mt: 'auto' }}>
                  {t(`problem.${key}.description`)}
                </Typography>
              </ProblemCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Stats;
