import { AppBar, Toolbar, Container, Button, Box, Link, Stack, Typography, MenuItem, Select } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: 'rgba(248, 253, 244, 0.88)',
  boxShadow: 'none',
  borderBottom: '1px solid rgba(98, 156, 68, 0.2)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  position: 'fixed',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: 'linear-gradient(90deg, #629C44 0%, #a8d878 50%, #629C44 100%)',
    zIndex: 1,
  },
}));

const NavLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
  fontWeight: 500,
  fontSize: '0.975rem',
  transition: 'color 0.2s ease-in-out',
  cursor: 'pointer',
  position: 'relative',
  paddingBottom: '2px',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '2px',
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
    transform: 'scaleX(0)',
    transition: 'transform 0.2s ease-in-out',
    transformOrigin: 'center',
    borderRadius: '2px',
  },
  '&:hover': {
    color: theme.palette.primary.main,
    '&::after': {
      transform: 'scaleX(1)',
    },
  },
}));

const languages = {
  en: 'English',
  de: 'Deutsch',
  es: 'Español',
  fr: 'Français',
  it: 'Italiano',
  nl: 'Nederlands',
  pt: 'Português',
};

function Header() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StyledAppBar>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1.5 }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Link href="/" underline="none">
              <Box
                component="img"
                src="/logo.svg"
                alt="Qorva Logo"
                sx={{ height: 40, width: 40, mr: 1 }}
              />
            </Link>
            <Typography
              variant="h6"
              component="span"
              sx={{
                fontWeight: 700,
                background: (theme) =>
                  `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Qorva
            </Typography>
          </Stack>

          <Stack
            direction="row"
            spacing={4}
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
            }}
          >
            <NavLink onClick={() => scrollToSection('features')}>{t('header.features')}</NavLink>
            <NavLink onClick={() => scrollToSection('how-it-works')}>{t('header.howItWorks')}</NavLink>
            <NavLink onClick={() => scrollToSection('pricing')}>{t('header.pricing')}</NavLink>
            <NavLink onClick={() => scrollToSection('hero')}>{t('header.about')}</NavLink>
          </Stack>

          <Stack
            direction="row"
            spacing={2}
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
            }}
          >
            <Select
              value={i18n.language}
              onChange={handleLanguageChange}
              size="small"
              sx={{
                minWidth: 120,
                '& .MuiSelect-select': {
                  py: 0.5,
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(98, 156, 68, 0.35)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(98, 156, 68, 0.65)',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#629C44',
                },
              }}
            >
              {Object.entries(languages).map(([code, name]) => (
                <MenuItem key={code} value={code}>
                  {name}
                </MenuItem>
              ))}
            </Select>
            <Button variant="outlined" color="primary" href={"https://app.qorva.ai/login"}>
              {t('header.signIn')}
            </Button>
            <Button variant="contained" color="primary" href={"https://app.qorva.ai/register"}>
              {t('header.startTrial')}
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}

export default Header; 
