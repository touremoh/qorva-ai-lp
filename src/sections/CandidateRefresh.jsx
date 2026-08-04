import { Box, Container, Typography, Grid, Chip, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import ChecklistIcon from '@mui/icons-material/Checklist';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import EditNoteIcon from '@mui/icons-material/EditNote';
import AutorenewIcon from '@mui/icons-material/Autorenew';

const StepRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(2.5),
  padding: theme.spacing(3),
  borderRadius: '16px',
  background: 'rgba(255, 255, 255, 0.9)',
  border: '1px solid rgba(30, 58, 95, 0.08)',
  boxShadow: '0 4px 20px rgba(15, 37, 71, 0.05)',
}));

const StepIconWrapper = styled(Box)(() => ({
  width: '48px',
  height: '48px',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, #1e3a5f 0%, #0f2547 100%)',
  color: '#ffffff',
  boxShadow: '0 8px 20px rgba(15, 37, 71, 0.25)',
  flexShrink: 0,
}));

const steps = [
  { key: 'step1', icon: <ChecklistIcon sx={{ fontSize: 24 }} /> },
  { key: 'step2', icon: <MailOutlineIcon sx={{ fontSize: 24 }} /> },
  { key: 'step3', icon: <EditNoteIcon sx={{ fontSize: 24 }} /> },
  { key: 'step4', icon: <AutorenewIcon sx={{ fontSize: 24 }} /> },
];

function CandidateRefresh() {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      sx={{ py: 12, background: 'linear-gradient(160deg, #f0f4ff 0%, #f8fafe 100%)' }}
      id="refresh"
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
          <Grid item xs={12} md={5}>
            <Chip
              label={t('refresh.label')}
              size="small"
              sx={{
                backgroundColor: 'rgba(37, 99, 235, 0.08)',
                color: '#2563eb',
                fontWeight: 700,
                letterSpacing: '0.08em',
                fontSize: '0.7rem',
                textTransform: 'uppercase',
                mb: 2.5,
              }}
            />
            <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
              {t('refresh.title')}
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ fontWeight: 400, lineHeight: 1.7 }}
            >
              {t('refresh.subtitle')}
            </Typography>
          </Grid>

          <Grid item xs={12} md={7}>
            <Stack spacing={2.5}>
              {steps.map(({ key, icon }) => (
                <StepRow key={key}>
                  <StepIconWrapper>{icon}</StepIconWrapper>
                  <Box>
                    <Typography
                      variant="h6"
                      component="h3"
                      fontWeight={700}
                      sx={{ color: '#0f172a', lineHeight: 1.35, mb: 0.5 }}
                    >
                      {t(`refresh.${key}.title`)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {t(`refresh.${key}.description`)}
                    </Typography>
                  </Box>
                </StepRow>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default CandidateRefresh;
