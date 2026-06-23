import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import BarChartIcon from '@mui/icons-material/BarChart';
import TuneIcon from '@mui/icons-material/Tune';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SyncAltIcon from '@mui/icons-material/SyncAlt';

const PillarCard = styled(Card)(({ theme }) => ({
  height: '100%',
  borderRadius: '20px',
  border: '1px solid rgba(0, 0, 0, 0.05)',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
  background: theme.palette.background.paper,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 24px 48px rgba(30, 58, 95, 0.1)',
  },
}));

const PillarIconWrapper = styled(Box)(() => ({
  width: '52px',
  height: '52px',
  borderRadius: '14px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '20px',
  color: '#ffffff',
}));

const ChatbotSection = styled(Box)(({ theme }) => ({
  borderRadius: '24px',
  background: 'linear-gradient(135deg, #0f2547 0%, #1e3a5f 60%, #163351 100%)',
  padding: theme.spacing(6),
  color: '#ffffff',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-30%',
    right: '-8%',
    width: '480px',
    height: '480px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(98,156,68,0.12) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-20%',
    left: '-5%',
    width: '320px',
    height: '320px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
}));

const IntentTable = styled(Table)(() => ({
  '& .MuiTableCell-root': {
    borderColor: 'rgba(255, 255, 255, 0.07)',
    paddingTop: '12px',
    paddingBottom: '12px',
  },
}));

const GREEN = '#629C44';
const BLUE = '#2563eb';

const topPillars = [
  {
    key: 'a',
    icon: <UploadFileIcon sx={{ fontSize: 26 }} />,
    color: GREEN,
  },
  {
    key: 'b',
    icon: <BarChartIcon sx={{ fontSize: 26 }} />,
    color: BLUE,
  },
  {
    key: 'c',
    icon: <TuneIcon sx={{ fontSize: 26 }} />,
    color: GREEN,
  },
];

const bottomPillars = [
  {
    key: 'e',
    icon: <QuestionAnswerIcon sx={{ fontSize: 26 }} />,
    color: BLUE,
  },
  {
    key: 'f',
    icon: <SyncAltIcon sx={{ fontSize: 26 }} />,
    color: GREEN,
  },
];

const intentKeys = ['talent', 'gap', 'ranking', 'rediscovery', 'clustering', 'skills', 'comparison', 'rules'];

function Features() {
  const { t } = useTranslation();

  return (
    <Box id="features" sx={{ py: 12, background: 'linear-gradient(180deg, #ffffff 0%, #f8fafe 100%)' }}>
      <Container maxWidth="lg">
        {/* Section header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" component="h2" gutterBottom>
            {t('pillars.title')}
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: '800px', mx: 'auto', fontWeight: 400, lineHeight: 1.7 }}
          >
            {t('pillars.subtitle')}
          </Typography>
        </Box>

        {/* Pillars A, B, C — top row */}
        <Grid container spacing={3} sx={{ mb: 3 }}>
          {topPillars.map(({ key, icon, color }) => (
            <Grid item xs={12} md={4} key={key}>
              <PillarCard elevation={0}>
                <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Chip
                    label={t(`pillars.${key}.label`)}
                    size="small"
                    sx={{
                      mb: 2.5,
                      alignSelf: 'flex-start',
                      background: `${color}18`,
                      color,
                      fontWeight: 700,
                      fontSize: '0.72rem',
                      letterSpacing: '0.03em',
                    }}
                  />
                  <PillarIconWrapper
                    sx={{
                      background: `linear-gradient(135deg, ${color} 0%, ${color}cc 100%)`,
                      boxShadow: `0 8px 20px ${color}40`,
                    }}
                  >
                    {icon}
                  </PillarIconWrapper>
                  <Typography variant="h6" component="h3" fontWeight={700} gutterBottom sx={{ lineHeight: 1.35 }}>
                    {t(`pillars.${key}.title`)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: key === 'a' ? 2 : 0 }}>
                    {t(`pillars.${key}.description`)}
                  </Typography>
                  {key === 'a' && (
                    <Box
                      sx={{
                        mt: 'auto',
                        p: 1.75,
                        borderRadius: '10px',
                        background: 'rgba(98,156,68,0.06)',
                        border: '1px solid rgba(98,156,68,0.18)',
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          color: '#3d6b28',
                          lineHeight: 1.75,
                          display: 'block',
                          fontSize: '0.75rem',
                        }}
                      >
                        {t('pillars.a.points')}
                      </Typography>
                    </Box>
                  )}
                </CardContent>
              </PillarCard>
            </Grid>
          ))}
        </Grid>

        {/* Pillar D — full-width dark chatbot section */}
        <ChatbotSection sx={{ mb: 3 }}>
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Chip
              icon={<SmartToyIcon sx={{ fontSize: '15px !important', color: '#a8d878 !important' }} />}
              label={t('pillars.d.label')}
              size="small"
              sx={{
                mb: 2.5,
                background: 'rgba(98,156,68,0.18)',
                color: '#a8d878',
                fontWeight: 700,
                fontSize: '0.72rem',
              }}
            />
            <Typography variant="h3" component="h3" fontWeight={700} gutterBottom sx={{ color: '#ffffff' }}>
              {t('pillars.d.title')}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'rgba(255,255,255,0.65)', mb: 4, maxWidth: '620px', lineHeight: 1.7 }}
            >
              {t('pillars.d.description')}
            </Typography>

            {/* 8-intent table */}
            <Box
              sx={{
                borderRadius: '14px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.09)',
                backdropFilter: 'blur(8px)',
                background: 'rgba(0,0,0,0.2)',
              }}
            >
              <IntentTable size="small">
                <TableHead>
                  <TableRow sx={{ background: 'rgba(255,255,255,0.06)' }}>
                    <TableCell
                      sx={{
                        color: '#a8d878',
                        fontWeight: 700,
                        fontSize: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.09em',
                        width: '38%',
                      }}
                    >
                      {t('pillars.d.intentHeader1')}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: 'rgba(255,255,255,0.55)',
                        fontWeight: 600,
                        fontSize: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.09em',
                      }}
                    >
                      {t('pillars.d.intentHeader2')}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {intentKeys.map((intent, index) => (
                    <TableRow
                      key={intent}
                      sx={{
                        background: index % 2 === 0 ? 'rgba(255,255,255,0.025)' : 'transparent',
                        '&:hover': { background: 'rgba(98,156,68,0.08)' },
                      }}
                    >
                      <TableCell>
                        <Typography
                          variant="body2"
                          fontWeight={600}
                          sx={{ color: 'rgba(255,255,255,0.88)', fontSize: '0.85rem' }}
                        >
                          {t(`pillars.d.intents.${intent}.category`)}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant="body2"
                          sx={{ color: 'rgba(255,255,255,0.52)', fontStyle: 'italic', fontSize: '0.85rem' }}
                        >
                          {t(`pillars.d.intents.${intent}.example`)}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </IntentTable>
            </Box>
          </Box>
        </ChatbotSection>

        {/* Pillars E, F — bottom row */}
        <Grid container spacing={3}>
          {bottomPillars.map(({ key, icon, color }) => (
            <Grid item xs={12} md={6} key={key}>
              <PillarCard elevation={0}>
                <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Chip
                    label={t(`pillars.${key}.label`)}
                    size="small"
                    sx={{
                      mb: 2.5,
                      alignSelf: 'flex-start',
                      background: `${color}18`,
                      color,
                      fontWeight: 700,
                      fontSize: '0.72rem',
                    }}
                  />
                  <PillarIconWrapper
                    sx={{
                      background: `linear-gradient(135deg, ${color} 0%, ${color}cc 100%)`,
                      boxShadow: `0 8px 20px ${color}40`,
                    }}
                  >
                    {icon}
                  </PillarIconWrapper>
                  <Typography variant="h6" component="h3" fontWeight={700} gutterBottom sx={{ lineHeight: 1.35 }}>
                    {t(`pillars.${key}.title`)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                    {t(`pillars.${key}.description`)}
                  </Typography>
                </CardContent>
              </PillarCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Features;
