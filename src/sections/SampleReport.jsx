import { Box, Container, Typography, Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';

function SampleReport() {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      id="sample-report"
      sx={{
        backgroundColor: '#0f2547',
        py: { xs: 8, md: 10 },
        borderTop: '1px solid rgba(98,156,68,0.25)',
        borderBottom: '1px solid rgba(98,156,68,0.25)',
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Chip
            icon={<InsertChartOutlinedIcon sx={{ fontSize: '15px !important', color: '#a8d878 !important' }} />}
            label={t('sampleReport.label')}
            size="small"
            sx={{
              background: 'rgba(98,156,68,0.18)',
              border: '1px solid rgba(98,156,68,0.4)',
              color: '#a8d878',
              fontWeight: 700,
              letterSpacing: '0.06em',
              fontSize: '0.72rem',
              textTransform: 'uppercase',
              mb: 2.5,
            }}
          />
          <Typography variant="h2" component="h2" sx={{ color: '#ffffff', mb: 2 }}>
            {t('sampleReport.title')}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'rgba(255,255,255,0.6)', maxWidth: 680, mx: 'auto', lineHeight: 1.7 }}
          >
            {t('sampleReport.subtitle')}
          </Typography>
        </Box>

        <Box
          sx={{
            mx: 'auto',
            width: '100%',
            maxWidth: '1320px',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.12)',
            boxShadow: '0 40px 80px -20px rgba(0, 0, 0, 0.5)',
          }}
        >
          <Box
            component="img"
            src="/library-quality.jpg"
            alt={t('sampleReport.imageAlt')}
            width={2131}
            height={1197}
            loading="lazy"
            sx={{
              width: '100%',
              height: 'auto',
              display: 'block',
              aspectRatio: '2131 / 1197',
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default SampleReport;
