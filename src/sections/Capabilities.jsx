import { Box, Container, Grid, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import InsightsIcon from '@mui/icons-material/Insights';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import IosShareIcon from '@mui/icons-material/IosShare';

const CapabilityIconWrapper = styled(Box)(() => ({
  width: '52px',
  height: '52px',
  borderRadius: '14px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '20px',
  background: 'linear-gradient(135deg, #629C44 0%, #3d6b28 100%)',
  color: '#ffffff',
  boxShadow: '0 8px 20px rgba(98, 156, 68, 0.3)',
}));

const ScreenshotFrame = styled(Box)(() => ({
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 24px 60px -12px rgba(15, 37, 71, 0.22), 0 0 0 1px rgba(15, 37, 71, 0.08)',
  background: '#ffffff',
}));

const ITEM_KEYS = ['item1', 'item2', 'item3'];

const groups = [
  {
    key: 'understand',
    icon: <InsightsIcon sx={{ fontSize: 26 }} />,
    src: '/skillsDistribution.jpg',
    width: 846,
    height: 1095,
  },
  {
    key: 'find',
    icon: <PersonSearchIcon sx={{ fontSize: 26 }} />,
    src: '/talentPoolIntelligence.jpg',
    width: 835,
    height: 648,
  },
  {
    key: 'bench',
    icon: <DonutSmallIcon sx={{ fontSize: 26 }} />,
    src: '/clustering.jpg',
    width: 847,
    height: 1033,
  },
];

function Capabilities() {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      id="features"
      sx={{ py: 12, background: 'linear-gradient(180deg, #ffffff 0%, #f8fafe 100%)' }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography variant="h2" component="h2" gutterBottom>
            {t('capabilities.title')}
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: '760px', mx: 'auto', fontWeight: 400, lineHeight: 1.7 }}
          >
            {t('capabilities.subtitle')}
          </Typography>
        </Box>

        <Stack spacing={{ xs: 8, md: 12 }}>
          {groups.map(({ key, icon, src, width, height }, index) => {
            const imageLeft = index % 2 === 0;
            return (
              <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center" key={key}>
                <Grid item xs={12} md={7} order={{ xs: 1, md: imageLeft ? 1 : 2 }}>
                  <ScreenshotFrame sx={{ maxWidth: width, mx: 'auto' }}>
                    <Box
                      component="img"
                      src={src}
                      alt={t(`capabilities.${key}.imageAlt`)}
                      width={width}
                      height={height}
                      loading="lazy"
                      sx={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        aspectRatio: `${width} / ${height}`,
                      }}
                    />
                  </ScreenshotFrame>
                </Grid>

                <Grid item xs={12} md={5} order={{ xs: 2, md: imageLeft ? 2 : 1 }}>
                  <CapabilityIconWrapper>{icon}</CapabilityIconWrapper>
                  <Typography
                    variant="h3"
                    component="h3"
                    fontWeight={700}
                    gutterBottom
                    sx={{ lineHeight: 1.3 }}
                  >
                    {t(`capabilities.${key}.title`)}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mt: 2.5 }}>
                    {ITEM_KEYS.map((itemKey) => (
                      <Box key={itemKey} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}>
                        <Box
                          sx={{
                            width: 18,
                            height: 18,
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #629C44 0%, #3d6b28 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            mt: 0.4,
                          }}
                        >
                          <Box component="span" sx={{ color: '#fff', fontSize: '0.65rem', fontWeight: 800 }}>✓</Box>
                        </Box>
                        <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                          {t(`capabilities.${key}.${itemKey}`)}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Grid>
              </Grid>
            );
          })}
        </Stack>

        <Box
          sx={{
            mt: { xs: 8, md: 10 },
            mx: 'auto',
            maxWidth: '760px',
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
          <IosShareIcon sx={{ color: '#629C44', fontSize: 20, mt: 0.25, flexShrink: 0 }} />
          <Typography variant="body2" sx={{ color: '#3d6b28', lineHeight: 1.7, fontWeight: 500 }}>
            {t('capabilities.exportNote')}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Capabilities;
