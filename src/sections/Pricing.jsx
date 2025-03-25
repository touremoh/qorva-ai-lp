import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

const PricingCard = styled(Card)(({ theme, featured, recommended }) => ({
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
  ...(recommended && {
    border: `2px solid ${theme.palette.secondary.main}`,
    boxShadow: `0 8px 32px rgba(255, 165, 0, 0.2)`,
  }),
}));

const Pricing = () => {
  const { t } = useTranslation();
  const [billing, setBilling] = useState('monthly');

  const handleBillingChange = (event, newBilling) => {
    if (newBilling !== null) setBilling(newBilling);
  };

  const plans = [
    {
      title: t('pricing.starter.title'),
      price: billing === 'monthly' ? '$29' : '$279',
      period: billing === 'monthly' ? t('pricing.periodMonthly') : t('pricing.periodYearly'),
      discount: billing === 'yearly' ? '-20%' : '',
      description: t('pricing.starter.description'),
      features: [
        { text: t('pricing.features.freeTrial'), included: true },
        { text: t('pricing.starter.cvs'), included: true },
        { text: t('pricing.analytics.basic'), included: true },
        { text: t('pricing.support.email24h'), included: true },
        { text: t('pricing.features.aiQuestions'), included: false },
        { text: t('pricing.features.accountManager'), included: false },
        { text: t('pricing.features.sla'), included: false },
      ],
      buttonText: t('pricing.button.freeTrial'),
      buttonVariant: 'outlined',
    },
    {
      title: t('pricing.growth.title'),
      price: billing === 'monthly' ? '$59' : '$566',
      period: billing === 'monthly' ? t('pricing.periodMonthly') : t('pricing.periodYearly'),
      discount: billing === 'yearly' ? '-20%' : '',
      description: t('pricing.growth.description'),
      features: [
        { text: t('pricing.features.freeTrial'), included: true },
        { text: t('pricing.growth.cvs'), included: true },
        { text: t('pricing.analytics.advanced'), included: true },
        { text: t('pricing.support.priority8h'), included: true },
        { text: t('pricing.features.aiQuestions'), included: false },
        { text: t('pricing.features.accountManager'), included: false },
        { text: t('pricing.features.sla'), included: false },
      ],
      buttonText: t('pricing.button.freeTrial'),
      buttonVariant: 'contained',
      recommended: true,
    },
    {
      title: t('pricing.professional.title'),
      price: billing === 'monthly' ? '$99' : '$950',
      period: billing === 'monthly' ? t('pricing.periodMonthly') : t('pricing.periodYearly'),
      discount: billing === 'yearly' ? '-20%' : '',
      description: t('pricing.professional.description'),
      features: [
        { text: t('pricing.features.freeTrial'), included: true },
        { text: t('pricing.professional.cvs'), included: true },
        { text: t('pricing.analytics.advanced'), included: true },
        { text: t('pricing.support.priority8h'), included: true },
        { text: t('pricing.features.aiQuestions'), included: true },
        { text: t('pricing.features.accountManager'), included: false },
        { text: t('pricing.features.sla'), included: false },
      ],
      buttonText: t('pricing.button.freeTrial'),
      buttonVariant: 'outlined',
    },
    {
      title: t('pricing.enterprise.title'),
      price: billing === 'monthly' ? '$299' : '$2870',
      period: billing === 'monthly' ? t('pricing.periodMonthly') : t('pricing.periodYearly'),
      discount: billing === 'yearly' ? '-20%' : '',
      description: t('pricing.enterprise.description'),
      features: [
        { text: t('pricing.features.freeTrial'), included: true },
        { text: t('pricing.enterprise.cvs'), included: true },
        { text: t('pricing.analytics.advanced'), included: true },
        { text: t('pricing.support.priority4h'), included: true },
        { text: t('pricing.features.aiQuestions'), included: true },
        { text: t('pricing.features.accountManager'), included: true },
        { text: t('pricing.features.sla'), included: true },
      ],
      buttonText: t('pricing.button.freeTrial'),
      buttonVariant: 'outlined',
    },
  ];

  return (
      <Box sx={{ py: 12, background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)' }} id="pricing">
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" gutterBottom>{t('pricing.title')}</Typography>
            <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
              {t('pricing.subtitle')}
            </Typography>
            <ToggleButtonGroup
                color="primary"
                value={billing}
                exclusive
                onChange={handleBillingChange}
                sx={{ mt: 4 }}
            >
              <ToggleButton value="monthly">{t('pricing.monthly')}</ToggleButton>
              <ToggleButton value="yearly">{t('pricing.yearly')}</ToggleButton>
            </ToggleButtonGroup>
          </Box>

          <Grid container spacing={2} alignItems="stretch">
            {plans.map((plan, index) => (
                <Grid item key={index} xs={12} md={3}>
                  <PricingCard featured={plan.featured} recommended={plan.recommended}>
                    <CardHeader
                        title={plan.title}
                        titleTypographyProps={{ align: 'center', variant: 'h5' }}
                        sx={{
                          backgroundColor: (theme) =>
                              plan.recommended ? theme.palette.secondary.light :
                                  plan.featured ? theme.palette.primary.light : 'transparent',
                          color: (theme) =>
                              plan.recommended || plan.featured ? theme.palette.common.white : 'inherit',
                        }}
                    />
                    <CardContent sx={{ flexGrow: 1, pt: 0 }}>
                      <Box sx={{ textAlign: 'center', mb: 3 }}>
                        <Typography component="h3" variant="h3">
                          {plan.price}
                        </Typography>
                        <Typography variant="subtitle1" color={plan.discount ? 'orange' : 'text.primary'}>
                          {plan.period} {plan.discount && `(${plan.discount})`}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                          {plan.description}
                        </Typography>
                      </Box>
                      <List sx={{ mb: 3 }}>
                        {plan.features.map((feature, idx) => (
                            <ListItem key={idx} sx={{ py: 1, px: 0 }}>
                              <ListItemIcon>
                                {feature.included ? (
                                    <CheckCircleIcon color="primary" />
                                ) : (
                                    <CancelIcon sx={{ color: 'red' }} />
                                )}
                              </ListItemIcon>
                              <ListItemText
                                  primary={feature.text}
                                  sx={{ color: feature.included ? 'inherit' : 'text.disabled' }}
                              />
                            </ListItem>
                        ))}
                      </List>
                      <Box sx={{ mt: 'auto', textAlign: 'center' }}>
                        <Button fullWidth variant={plan.buttonVariant} color="primary" size="large">
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
};

export default Pricing;
