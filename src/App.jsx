import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import Features from './sections/Features';
import HowItWorks from './sections/HowItWorks';
import TrustCompliance from './sections/TrustCompliance';
import FAQ from './sections/FAQ';
import Pricing from './sections/Pricing';
import Footer from './sections/Footer';
import MarkdownPage from "./sections/MarkdownPage.jsx";
import {initGA, logPageView} from "./utils/analytics.js";
import {useEffect} from "react";

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#629C44',
      light: '#a8d878',
      dark: '#3d6b28',
      contrastText: '#fff',
    },
    secondary: {
      main: '#3d6b28',
      light: '#629C44',
      dark: '#2a4d1c',
      contrastText: '#fff',
    },
    background: {
      default: '#f8fdf4',
      paper: '#ffffff',
    },
    text: {
      primary: '#0f172a',
      secondary: '#475569',
    },
  },
  typography: {
    fontFamily: '"Inter", "system-ui", "-apple-system", sans-serif',
    h1: {
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      fontWeight: 800,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    ...Array(20).fill('none'), // Fill the rest to satisfy MUI's shadow array requirement
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
        },
        body: {
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#a8d878',
            borderRadius: '10px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#629C44',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          textTransform: 'none',
          fontWeight: 600,
          padding: '0.75rem 1.75rem',
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
          },
          '&:active': {
            transform: 'translateY(0)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #629C44 0%, #a8d878 100%)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(248, 253, 244, 0.88)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(98, 156, 68, 0.2)',
          color: '#0f172a',
          transition: 'all 0.3s ease-in-out',
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      },
    },
  },
});

const MainContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  '& > section': {
    padding: theme.spacing(10, 0),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(8, 0),
    },
  },
}));

const MainPage = () => {
  return (
      <>
        <Header />
        <MainContent component="main">
          <Hero />
          <Stats />
          <Features />
          <HowItWorks />
          <TrustCompliance />
          <FAQ />
          <Pricing />
          <Footer />
        </MainContent>
      </>
  );
}

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    logPageView();
  }, [location]);

  return null;
};

function App() {
  useEffect(() => {
    initGA();
  }, []);

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Analytics />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/privacy-policy" element={<MarkdownPage filePath="/privacy-policy.md" />} />
            <Route path="/terms-of-service" element={<MarkdownPage filePath="/terms-of-service.md" />} />
            <Route path="/security" element={<MarkdownPage filePath="/security.md" />} />
            <Route path="/compliance" element={<MarkdownPage filePath="/compliance.md" />} />
          </Routes>
        </Router>
      </ThemeProvider>
  );
}

export default App;
