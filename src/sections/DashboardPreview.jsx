import { useState } from 'react';
import { Box, Container, Typography, Chip, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';

// Screenshots: /public/dashboard.jpg  /public/matchReport.jpg
const SCREENSHOTS = [
  {
    src: '/dashboard.jpg',
    alt: 'Qorva AI Dashboard',
    url: 'app.qorva.ai/dashboard',
    labelKey: 'dashboardPreview.label',
    titleKey: 'dashboardPreview.title',
    subtitleKey: 'dashboardPreview.subtitle',
  },
  {
    src: '/matchReport.jpg',
    alt: 'Qorva AI Match Report',
    url: 'app.qorva.ai/match-report',
    labelKey: 'dashboardPreview.matchReportLabel',
    titleKey: 'dashboardPreview.matchReportTitle',
    subtitleKey: 'dashboardPreview.matchReportSubtitle',
  },
];

const PreviewSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(180deg, #f0f4ff 0%, #ffffff 100%)',
  padding: theme.spacing(12, 0),
}));

const BrowserFrame = styled(Box)({
  background: '#1e293b',
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow:
    '0 40px 80px -20px rgba(15, 37, 71, 0.25), 0 0 0 1px rgba(255,255,255,0.08)',
});

const BrowserChrome = styled(Box)({
  background: '#334155',
  padding: '10px 16px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

const URLBar = styled(Box)({
  flex: 1,
  maxWidth: 320,
  background: 'rgba(255,255,255,0.08)',
  borderRadius: '6px',
  padding: '4px 12px',
  marginLeft: '12px',
});

function ScreenshotImage({ src, alt }) {
  const [errored, setErrored] = useState(false);

  if (!errored) {
    return (
      <Box
        component="img"
        src={src}
        alt={alt}
        onError={() => setErrored(true)}
        sx={{ width: '100%', display: 'block' }}
      />
    );
  }

  return (
    <Box sx={{
      aspectRatio: '16/9',
      background: 'linear-gradient(135deg, #0a1628 0%, #0f2547 50%, #0d3321 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: 2,
    }}>
      <BrokenImageOutlinedIcon sx={{ fontSize: 64, color: 'rgba(255,255,255,0.15)' }} />
      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'monospace' }}>
        {src}
      </Typography>
    </Box>
  );
}

export default function DashboardPreview() {
  const { t } = useTranslation();

  return (
    <PreviewSection component="section">
      <Container maxWidth="xl">
        <Stack spacing={16}>
          {SCREENSHOTS.map(({ src, alt, url, labelKey, titleKey, subtitleKey }) => (
            <Stack key={src} spacing={8}>
              <Stack spacing={3} alignItems="center" textAlign="center">
                <Chip
                  icon={<DashboardIcon sx={{ fontSize: '15px !important', color: '#2563eb !important' }} />}
                  label={t(labelKey)}
                  sx={{
                    background: 'rgba(37, 99, 235, 0.08)',
                    border: '1px solid rgba(37, 99, 235, 0.25)',
                    color: '#2563eb',
                    fontWeight: 600,
                    fontSize: '0.82rem',
                    px: 1,
                  }}
                />
                <Typography variant="h2" sx={{ color: '#0f172a', maxWidth: 720 }}>
                  {t(titleKey)}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ maxWidth: 600, mx: 'auto', color: 'text.secondary', lineHeight: 1.75 }}
                >
                  {t(subtitleKey)}
                </Typography>
              </Stack>

              <BrowserFrame>
                <BrowserChrome>
                  <Box sx={{ width: 12, height: 12, borderRadius: '50%', background: '#ef4444', flexShrink: 0 }} />
                  <Box sx={{ width: 12, height: 12, borderRadius: '50%', background: '#f59e0b', flexShrink: 0 }} />
                  <Box sx={{ width: 12, height: 12, borderRadius: '50%', background: '#22c55e', flexShrink: 0 }} />
                  <URLBar>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.75rem' }}>
                      {url}
                    </Typography>
                  </URLBar>
                </BrowserChrome>
                <ScreenshotImage src={src} alt={alt} />
              </BrowserFrame>
            </Stack>
          ))}
        </Stack>
      </Container>
    </PreviewSection>
  );
}
