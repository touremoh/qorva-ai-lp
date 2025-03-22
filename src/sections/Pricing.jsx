import { Box, Container, Typography, Button, Card, CardContent, CardHeader, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { styled } from '@mui/material/styles';

const PricingCard = styled(Card)(({ theme, featured }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '16px',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
  ...(featured && {
    border: `2px solid ${theme.palette.primary.main}`,
    boxShadow: `0 8px 32px rgba(37, 99, 235, 0.1)`,
  }),
}));

const plans = [
  {
    title: 'Starter',
    price: '$49',
    period: '/month',
    description: 'Perfect for small businesses just getting started',
    features: [
      'Up to 5,000 API calls/month',
      'Basic analytics dashboard',
      'Email support',
      'Standard integrations',
    ],
    buttonText: 'Start Free Trial',
    buttonVariant: 'outlined',
  },
  {
    title: 'Professional',
    price: '$99',
    period: '/month',
    description: 'Ideal for growing companies',
    features: [
      'Up to 50,000 API calls/month',
      'Advanced analytics & reporting',
      'Priority email & chat support',
      'Custom integrations',
      'Team collaboration tools',
    ],
    buttonText: 'Start Free Trial',
    buttonVariant: 'contained',
    featured: true,
  },
  {
    title: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations with specific needs',
    features: [
      'Unlimited API calls',
      'Custom AI model training',
      '24/7 phone & email support',
      'Dedicated account manager',
      'Custom development',
      'SLA guarantee',
    ],
    buttonText: 'Contact Sales',
    buttonVariant: 'outlined',
  },
];

function Pricing() {
  return (
    <Box sx={{ py: 12, background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" component="h2" gutterBottom>
            Simple, Transparent Pricing
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
            Choose the plan that best fits your needs
          </Typography>
        </Box>

        <Grid container spacing={4} alignItems="stretch">
          {plans.map((plan, index) => (
            <Grid item key={index} xs={12} md={4}>
              <PricingCard featured={plan.featured}>
                <CardHeader
                  title={plan.title}
                  titleTypographyProps={{ align: 'center', variant: 'h5' }}
                  sx={{
                    backgroundColor: (theme) =>
                      plan.featured ? theme.palette.primary.light : 'transparent',
                    color: (theme) =>
                      plan.featured ? theme.palette.common.white : 'inherit',
                  }}
                />
                <CardContent sx={{ flexGrow: 1, pt: 0 }}>
                  <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <Typography component="h3" variant="h3" color="text.primary">
                      {plan.price}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {plan.period}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      {plan.description}
                    </Typography>
                  </Box>
                  <List sx={{ mb: 3 }}>
                    {plan.features.map((feature, featureIndex) => (
                      <ListItem key={featureIndex} sx={{ py: 1, px: 0 }}>
                        <ListItemIcon>
                          <CheckCircleIcon color={plan.featured ? 'primary' : 'action'} />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                  <Box sx={{ mt: 'auto', textAlign: 'center' }}>
                    <Button
                      fullWidth
                      variant={plan.buttonVariant}
                      color="primary"
                      size="large"
                    >
                      {plan.buttonText}
                    </Button>
                  </Box>
                </CardContent>
              </PricingCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Pricing; 