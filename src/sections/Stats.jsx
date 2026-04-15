import { Box, Container, Typography, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';

const StatCard = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(5, 4),
  borderRadius: '24px',
  background: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(8px)',
  border: '1px solid rgba(37, 99, 235, 0.08)',
  boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 40px rgba(37, 99, 235, 0.12)',
  },
}));

const statKeys = ['item1', 'item2', 'item3', 'item4'];

function Stats() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        py: 12,
        background: 'linear-gradient(160deg, #f0f5ff 0%, #f0fdf8 100%)',
      }}
      id="stats"
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" component="h2" gutterBottom>
            {t('stats.title')}
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontWeight: 400 }}>
            {t('stats.subtitle')}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {statKeys.map((key) => (
            <Grid item xs={12} sm={6} md={3} key={key} sx={{ display: 'flex' }}>
              <StatCard sx={{ width: '100%' }}>
                <Typography
                  variant="h2"
                  component="div"
                  sx={{
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #2563eb 0%, #10b981 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 1,
                    lineHeight: 1,
                  }}
                >
                  {t(`stats.${key}.value`)}
                </Typography>
                <Typography variant="h6" component="div" sx={{ fontWeight: 700, mb: 1.5, color: 'text.primary' }}>
                  {t(`stats.${key}.label`)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t(`stats.${key}.description`)}
                </Typography>
              </StatCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Stats;
