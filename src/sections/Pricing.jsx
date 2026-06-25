import { useTranslation } from 'react-i18next';
import {
  Box, Container, Typography, Button, Grid,
  List, ListItem, ListItemIcon, ListItemText,
  Chip, Switch, Stack,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RemoveIcon from '@mui/icons-material/Remove';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';

const PricingCard = styled(Box)(({ theme, recommended }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '24px',
  padding: theme.spacing(4),
  background: recommended
    ? 'linear-gradient(145deg, #1d4ed8 0%, #2563eb 50%, #1e40af 100%)'
    : theme.palette.background.paper,
  border: recommended ? 'none' : '1px solid rgba(0,0,0,0.07)',
  boxShadow: recommended
    ? '0 24px 48px -12px rgba(37, 99, 235, 0.4)'
    : '0 4px 16px rgba(0,0,0,0.06)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  position: 'relative',
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: recommended
      ? '0 32px 56px -12px rgba(37, 99, 235, 0.5)'
      : '0 12px 28px rgba(0,0,0,0.1)',
  },
}));

const EU_TIMEZONES = new Set([
  'Europe/Vienna','Europe/Brussels','Europe/Sofia','Europe/Nicosia',
  'Europe/Prague','Europe/Copenhagen','Europe/Tallinn','Europe/Helsinki',
  'Europe/Paris','Europe/Berlin','Europe/Busingen','Europe/Athens',
  'Europe/Budapest','Europe/Dublin','Europe/Rome','Europe/Riga',
  'Europe/Vilnius','Europe/Luxembourg','Europe/Malta','Europe/Amsterdam',
  'Europe/Warsaw','Europe/Lisbon','Atlantic/Azores','Atlantic/Madeira',
  'Europe/Bucharest','Europe/Bratislava','Europe/Ljubljana',
  'Europe/Madrid','Africa/Ceuta','Atlantic/Canary','Europe/Stockholm',
]);

const PLANS = [
  {
    key: 'starter',
    monthlyPrice: 99,
    annualPrice: 79,
    recommended: false,
    features: [
      { key: 'freeTrial',          plan: null,        included: true },
      { key: 'users',              plan: 'starter',   included: true },
      { key: 'matchingActions',    plan: 'starter',   included: true },
      { key: 'aiChat',             plan: 'starter',   included: true },
      { key: 'queries',            plan: 'starter',   included: true },
      { key: 'brandedCvExport',    plan: null,        included: false },
      { key: 'brandedMatchReport', plan: null,        included: false },
      { key: 'accountManager',     plan: null,        included: false },
      { key: 'sla',                plan: null,        included: false },
    ],
  },
  {
    key: 'pro',
    monthlyPrice: 199,
    annualPrice: 159,
    recommended: true,
    features: [
      { key: 'freeTrial',          plan: null,    included: true },
      { key: 'users',              plan: 'pro',   included: true },
      { key: 'matchingActions',    plan: 'pro',   included: true },
      { key: 'aiChat',             plan: 'pro',   included: true },
      { key: 'queries',            plan: 'pro',   included: true },
      { key: 'brandedCvExport',    plan: null,    included: false },
      { key: 'brandedMatchReport', plan: null,    included: false },
      { key: 'accountManager',     plan: null,    included: false },
      { key: 'sla',                plan: null,    included: false },
    ],
  },
  {
    key: 'scale',
    monthlyPrice: 399,
    annualPrice: 319,
    recommended: false,
    features: [
      { key: 'freeTrial',          plan: null,      included: true },
      { key: 'users',              plan: 'scale',   included: true },
      { key: 'matchingActions',    plan: 'scale',   included: true },
      { key: 'aiChat',             plan: 'scale',   included: true },
      { key: 'queries',            plan: 'scale',   included: true },
      { key: 'brandedCvExport',    plan: null,      included: true },
      { key: 'brandedMatchReport', plan: null,      included: true },
      { key: 'accountManager',     plan: null,      included: true },
      { key: 'sla',                plan: null,      included: true },
    ],
  },
];

const Pricing = () => {
  const { t } = useTranslation();
  const [yearly, setYearly] = useState(true);
  const [sym, setSym] = useState('$');

  useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (EU_TIMEZONES.has(tz)) setSym('€');
  }, []);

  const featureText = (key, plan) =>
    plan ? t(`pricing.${plan}.${key}`) : t(`pricing.features.${key}`);

  return (
    <Box sx={{ py: 12, background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)' }} id="pricing">
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" gutterBottom>{t('pricing.title')}</Typography>
          <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}>
            {t('pricing.subtitle')}
          </Typography>

          <Stack direction="row" spacing={1.5} alignItems="center" justifyContent="center">
            <Typography
              variant="body1"
              fontWeight={!yearly ? 600 : 400}
              color={!yearly ? 'text.primary' : 'text.secondary'}
            >
              {t('pricing.monthly')}
            </Typography>
            <Switch checked={yearly} onChange={(e) => setYearly(e.target.checked)} color="primary" />
            <Typography
              variant="body1"
              fontWeight={yearly ? 600 : 400}
              color={yearly ? 'text.primary' : 'text.secondary'}
            >
              {t('pricing.yearly')}
            </Typography>
            {yearly && (
              <Chip
                label={t('pricing.savePercent')}
                size="small"
                sx={{
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '0.75rem',
                }}
              />
            )}
          </Stack>
        </Box>

        <Grid container spacing={3} alignItems="stretch">
          {PLANS.map((plan) => {
            const price = yearly ? plan.annualPrice : plan.monthlyPrice;
            const crossedPrice = yearly ? plan.monthlyPrice : null;
            return (
              <Grid item key={plan.key} xs={12} md={4}>
                <PricingCard recommended={plan.recommended ? 1 : 0}>
                  {plan.recommended && (
                    <Chip
                      label={t('pricing.mostPopular')}
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 20,
                        right: 20,
                        background: 'rgba(255,255,255,0.2)',
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '0.72rem',
                        backdropFilter: 'blur(4px)',
                        border: '1px solid rgba(255,255,255,0.3)',
                      }}
                    />
                  )}

                  <Typography
                    variant="overline"
                    sx={{
                      fontWeight: 700,
                      letterSpacing: 1.5,
                      color: plan.recommended ? 'rgba(255,255,255,0.75)' : 'text.secondary',
                      mb: 1,
                      display: 'block',
                    }}
                  >
                    {t(`pricing.${plan.key}.title`)}
                  </Typography>

                  <Box sx={{ mb: 1 }}>
                    <Stack direction="row" alignItems="flex-end" spacing={0.5}>
                      <Typography
                        variant="h2"
                        component="span"
                        sx={{
                          fontWeight: 800,
                          color: plan.recommended ? '#fff' : 'text.primary',
                          lineHeight: 1,
                        }}
                      >
                        {sym}{price}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: plan.recommended ? 'rgba(255,255,255,0.65)' : 'text.secondary',
                          mb: 0.5,
                        }}
                      >
                        {t('pricing.periodMonthly')}
                      </Typography>
                    </Stack>
                    {crossedPrice && (
                      <Typography
                        variant="body2"
                        sx={{
                          color: plan.recommended ? 'rgba(255,255,255,0.45)' : 'text.disabled',
                          textDecoration: 'line-through',
                          mt: 0.5,
                        }}
                      >
                        {sym}{crossedPrice}{t('pricing.periodMonthly')}
                      </Typography>
                    )}
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{
                      color: plan.recommended ? 'rgba(255,255,255,0.7)' : 'text.secondary',
                      mb: 3,
                      minHeight: 40,
                    }}
                  >
                    {t(`pricing.${plan.key}.description`)}
                  </Typography>

                  <Box
                    sx={{
                      height: '1px',
                      background: plan.recommended ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.07)',
                      mb: 3,
                    }}
                  />

                  <List disablePadding sx={{ flexGrow: 1, mb: 4 }}>
                    {plan.features.map((f) => (
                      <ListItem key={f.key} sx={{ px: 0, py: 0.75 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          {f.included ? (
                            <CheckCircleOutlineIcon
                              sx={{
                                fontSize: 18,
                                color: plan.recommended ? 'rgba(255,255,255,0.9)' : 'primary.main',
                              }}
                            />
                          ) : (
                            <RemoveIcon
                              sx={{
                                fontSize: 18,
                                color: plan.recommended ? 'rgba(255,255,255,0.25)' : 'text.disabled',
                              }}
                            />
                          )}
                        </ListItemIcon>
                        <ListItemText
                          primary={featureText(f.key, f.plan)}
                          primaryTypographyProps={{
                            variant: 'body2',
                            sx: {
                              color: f.included
                                ? plan.recommended ? '#fff' : 'text.primary'
                                : plan.recommended ? 'rgba(255,255,255,0.35)' : 'text.disabled',
                              fontWeight: f.included ? 500 : 400,
                            },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>

                  <Button
                    fullWidth
                    variant={plan.recommended ? 'contained' : 'outlined'}
                    size="large"
                    onClick={() => { location.href = 'https://app.qorva.ai/register'; }}
                    sx={{
                      borderRadius: '12px',
                      py: 1.5,
                      fontWeight: 600,
                      ...(plan.recommended && {
                        background: '#fff',
                        color: '#2563eb',
                        '&:hover': { background: 'rgba(255,255,255,0.9)' },
                      }),
                      ...(!plan.recommended && {
                        borderColor: 'rgba(37,99,235,0.4)',
                      }),
                    }}
                  >
                    {t('pricing.button.freeTrial')}
                  </Button>
                </PricingCard>
              </Grid>
            );
          })}
        </Grid>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 0.75,
            mt: 4,
          }}
        >
          <InfoOutlinedIcon sx={{ fontSize: 15, color: 'text.disabled' }} />
          <Typography variant="caption" color="text.disabled">
            {t('pricing.matchingActionNote')}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Pricing;
