import { Box, Container, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

/**
 * The ATS platforms Qorva connects to natively. Names are proper nouns and stay
 * untranslated; only the surrounding copy is localized. Keep this list in step with
 * AtsProviderEnum in the backend — it is what a visitor checks before booking a demo.
 */
const PROVIDERS = [
  'Greenhouse',
  'Workable',
  'Lever',
  'Zoho Recruit',
  'Recruitee',
  'Manatal',
  'BambooHR',
  'Ashby',
];

const ProviderChip = styled(Box)(() => ({
  padding: '10px 20px',
  borderRadius: '999px',
  background: '#ffffff',
  border: '1px solid rgba(15, 37, 71, 0.1)',
  boxShadow: '0 2px 8px rgba(15, 37, 71, 0.06)',
  fontSize: '0.95rem',
  fontWeight: 600,
  color: '#1e3a5f',
  whiteSpace: 'nowrap',
}));

function SupportedAts() {
  const { t } = useTranslation();

  return (
    <Box id="supported-ats" sx={{ py: { xs: 8, md: 10 }, background: '#f8fafe' }}>
      <Container maxWidth="lg">
        <Stack spacing={3} alignItems="center" textAlign="center">
          <Typography variant="h3" sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' }, fontWeight: 700, color: '#0f2547' }}>
            {t('supportedAts.title')}
          </Typography>
          <Typography sx={{ maxWidth: 720, color: '#475569', fontSize: '1.02rem', lineHeight: 1.65 }}>
            {t('supportedAts.subtitle')}
          </Typography>

          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            sx={{ gap: 1.5, pt: 1 }}
          >
            {PROVIDERS.map((name) => (
              <ProviderChip key={name}>{name}</ProviderChip>
            ))}
          </Stack>

          <Typography sx={{ color: '#64748b', fontSize: '0.9rem', pt: 1 }}>
            {t('supportedAts.note')}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default SupportedAts;
