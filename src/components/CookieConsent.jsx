import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Button, Typography, Link, Slide } from '@mui/material';

const STORAGE_KEY = 'qorva_cookie_consent';

function CookieConsent() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(STORAGE_KEY, 'all');
    setVisible(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem(STORAGE_KEY, 'essential');
    setVisible(false);
  };

  return (
    <Slide direction="up" in={visible} mountOnEnter unmountOnExit>
      <Box
        role="region"
        aria-label="Cookie consent"
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          backgroundColor: '#0f2547',
          color: '#fff',
          px: { xs: 2, md: 4 },
          py: { xs: 2.5, md: 2 },
          boxShadow: '0 -4px 24px rgba(0,0,0,0.3)',
          borderTop: '1px solid rgba(98, 156, 68, 0.4)',
        }}
      >
        <Box
          sx={{
            maxWidth: 'lg',
            mx: 'auto',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' },
            gap: { xs: 2, md: 3 },
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5, color: '#fff' }}>
              {t('cookieConsent.title')}
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>
              {t('cookieConsent.description')}{' '}
              <Link href="/privacy-policy" color="inherit" sx={{ color: '#a8d878', '&:hover': { color: '#629C44' } }}>
                {t('cookieConsent.learnMore')}
              </Link>
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 1.5, flexShrink: 0, flexWrap: 'wrap' }}>
            <Button
              variant="outlined"
              size="small"
              onClick={handleEssentialOnly}
              sx={{
                borderColor: 'rgba(255,255,255,0.35)',
                color: 'rgba(255,255,255,0.85)',
                '&:hover': { borderColor: '#fff', color: '#fff', backgroundColor: 'rgba(255,255,255,0.08)' },
                textTransform: 'none',
                fontWeight: 600,
                px: 2,
              }}
            >
              {t('cookieConsent.essentialOnly')}
            </Button>
            <Button
              variant="contained"
              size="small"
              onClick={handleAcceptAll}
              sx={{
                background: 'linear-gradient(135deg, #629C44 0%, #3d6b28 100%)',
                color: '#fff',
                fontWeight: 700,
                px: 2,
                '&:hover': { background: 'linear-gradient(135deg, #72b050 0%, #4a7d30 100%)' },
              }}
            >
              {t('cookieConsent.acceptAll')}
            </Button>
          </Box>
        </Box>
      </Box>
    </Slide>
  );
}

export default CookieConsent;
