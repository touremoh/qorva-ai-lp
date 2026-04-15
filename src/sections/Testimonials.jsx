import { Box, Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const TestimonialCard = styled(Card)(({ theme }) => ({
  height: '100%',
  borderRadius: '20px',
  border: '1px solid rgba(37, 99, 235, 0.08)',
  boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 16px 40px rgba(37, 99, 235, 0.12)',
  },
  background: '#ffffff',
}));

const testimonialKeys = ['item1', 'item2', 'item3'];

const avatarColors = [
  'linear-gradient(135deg, #2563eb, #1d4ed8)',
  'linear-gradient(135deg, #10b981, #059669)',
  'linear-gradient(135deg, #7c3aed, #6d28d9)',
];

function Testimonials() {
  const { t } = useTranslation();

  return (
    <Box sx={{ py: 12, background: '#ffffff' }} id="testimonials">
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" component="h2" gutterBottom>
            {t('testimonials.title')}
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontWeight: 400 }}>
            {t('testimonials.subtitle')}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {testimonialKeys.map((key, index) => (
            <Grid item xs={12} md={4} key={key}>
              <TestimonialCard elevation={0}>
                <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <FormatQuoteIcon
                    sx={{
                      fontSize: 40,
                      color: 'primary.main',
                      opacity: 0.3,
                      mb: 2,
                      transform: 'scaleX(-1)',
                    }}
                  />
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ flexGrow: 1, lineHeight: 1.8, mb: 4, fontStyle: 'italic' }}
                  >
                    "{t(`testimonials.${key}.quote`)}"
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar
                      sx={{
                        background: avatarColors[index],
                        width: 48,
                        height: 48,
                        fontWeight: 700,
                        fontSize: '1rem',
                      }}
                    >
                      {t(`testimonials.${key}.name`).charAt(0)}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle2" fontWeight={700}>
                        {t(`testimonials.${key}.name`)}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {t(`testimonials.${key}.role`)} · {t(`testimonials.${key}.company`)}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </TestimonialCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Testimonials;
