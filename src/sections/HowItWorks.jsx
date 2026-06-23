import { Box, Container, Typography, Stack, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const StepCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4, 3),
  height: '100%',
  position: 'relative',
  borderRadius: '20px',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  background: theme.palette.background.paper,
  border: '1px solid rgba(30, 58, 95, 0.07)',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
  textAlign: 'center',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 48px rgba(30, 58, 95, 0.12)',
  },
}));

const StepIconWrapper = styled(Box)(({ theme }) => ({
  width: '64px',
  height: '64px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  marginBottom: theme.spacing(2.5),
  background: 'linear-gradient(135deg, #629C44 0%, #3d6b28 100%)',
  color: '#ffffff',
  boxShadow: '0 8px 24px rgba(98, 156, 68, 0.35)',
  position: 'relative',
  zIndex: 1,
}));

const StepLabel = styled(Typography)(() => ({
  fontSize: '0.7rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.12em',
  color: '#629C44',
  marginBottom: '12px',
}));

const StepNumber = styled(Typography)(() => ({
  position: 'absolute',
  bottom: -8,
  right: 12,
  fontSize: '5rem',
  fontWeight: 900,
  color: 'rgba(98, 156, 68, 0.055)',
  lineHeight: 1,
  userSelect: 'none',
  pointerEvents: 'none',
}));

const steps = [
  { key: 'upload',      icon: <CloudUploadIcon sx={{ fontSize: 28 }} /> },
  { key: 'enrich',      icon: <AutoGraphIcon sx={{ fontSize: 28 }} /> },
  { key: 'interrogate', icon: <QuestionAnswerIcon sx={{ fontSize: 28 }} /> },
  { key: 'score',       icon: <EmojiEventsIcon sx={{ fontSize: 28 }} /> },
];

function HowItWorks() {
  const { t } = useTranslation();

  return (
    <Box sx={{ py: 12, background: '#ffffff' }} id="how-it-works">
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" component="h2" gutterBottom>
            {t('workflow.title')}
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: '680px', mx: 'auto', fontWeight: 400, lineHeight: 1.7 }}
          >
            {t('workflow.subtitle')}
          </Typography>
        </Box>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={3}
          sx={{ position: 'relative' }}
        >
          {/* Connector line (desktop only) */}
          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              position: 'absolute',
              top: '78px',
              left: '14%',
              right: '14%',
              height: '2px',
              background: 'linear-gradient(90deg, rgba(98,156,68,0.15) 0%, rgba(98,156,68,0.4) 50%, rgba(98,156,68,0.15) 100%)',
              zIndex: 0,
            }}
          />

          {steps.map((step, index) => (
            <Box key={step.key} sx={{ flex: 1, position: 'relative', zIndex: 1 }}>
              <StepCard elevation={0}>
                <StepLabel>{t(`workflow.steps.${step.key}.label`)}</StepLabel>
                <StepIconWrapper>{step.icon}</StepIconWrapper>
                <Typography variant="h6" component="h3" fontWeight={700} gutterBottom sx={{ lineHeight: 1.3 }}>
                  {t(`workflow.steps.${step.key}.title`)}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                  {t(`workflow.steps.${step.key}.description`)}
                </Typography>
                <StepNumber>{String(index + 1).padStart(2, '0')}</StepNumber>
              </StepCard>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default HowItWorks;
