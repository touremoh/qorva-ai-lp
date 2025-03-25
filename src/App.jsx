import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Features from './sections/Features';
import HowItWorks from './sections/HowItWorks';
import Pricing from './sections/Pricing';
import Footer from './sections/Footer';
import MarkdownPage from './sections/MarkdownPage';
import {initGA, logPageView} from "./utils/analytics.js";
import {useEffect} from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: '#2563eb',
      light: '#60a5fa',
      dark: '#1e40af',
    },
    secondary: {
      main: '#10b981',
      light: '#34d399',
      dark: '#059669',
    },
    background: {
      default: '#ffffff',
      paper: '#f8fafc',
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: { fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.2 },
    h2: { fontSize: '2.5rem', fontWeight: 600, lineHeight: 1.3 },
    h3: { fontSize: '2rem', fontWeight: 600, lineHeight: 1.4 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 600,
          padding: '0.75rem 1.5rem',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(8px)',
        },
      },
    },
  },
});

const  MainPage = () => {
  return (
      <>
        <Header />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <Pricing />
          <Footer />
        </main>
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
