import {Box, Container, Grid, Typography, Card, CardContent} from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SavingsIcon from '@mui/icons-material/Savings';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import Diversity1Icon from '@mui/icons-material/Diversity1';

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
  background: theme.palette.background.paper,
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '64px',
  height: '64px',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
  color: theme.palette.common.white,
}));

const features = [
  {
    translationKey: "parsing",
    icon: <UploadFileIcon sx={{ fontSize: 32 }} />,
    title: 'AI-Powered Resume Parsing',
    description: 'No more manual data entry! Simply drag and drop up to 10 resumes at once, and Qorva AI will automatically extract and store candidate information in the system.',
  },
  {
    translationKey: "matching",
    icon: <PersonSearchIcon sx={{ fontSize: 32 }} />,
    title: 'AI-Driven Candidate Matching',
    description: 'Need to find the best candidate in your talent pool for a new job post? Just run a CV analysis, and Qorva AI will scan, match, and rank candidates based on relevance.',
  },
  {
    translationKey: "aiChat",
    icon: <QuestionAnswerIcon sx={{ fontSize: 32 }} />,
    title: 'AI-Resume Chat',
    description: 'For every candidate report, the system generates a personalized set of interview questions based on their experience, skills, and weaknesses, ensuring structured and insightful interviews.',
  },
];

function Features() {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: <AccessTimeIcon sx={{ fontSize: 32 }} />,
      title: `${t('features.whyChooseQorva.saveTime.title')}`,
      description: `${t('features.whyChooseQorva.saveTime.description')}`,
    },
    {
      icon: <SavingsIcon sx={{ fontSize: 32 }} />,
      title: `${t('features.whyChooseQorva.reduceCost.title')}`,
      description: `${t('features.whyChooseQorva.reduceCost.description')}`,
    },
    {
      icon: <GpsFixedIcon sx={{ fontSize: 32 }} />,
      title: `${t('features.whyChooseQorva.accuracy.title')}`,
      description: `${t('features.whyChooseQorva.accuracy.description')}`,
    },
    {
      icon: <Diversity1Icon sx={{ fontSize: 32 }} />,
      title: `${t('features.whyChooseQorva.fairness.title')}`,
      description: `${t('features.whyChooseQorva.fairness.description')}`,
    }
  ];

  return (
      <Box sx={{ py: 12, background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)' }} id="features">
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" component="h2" gutterBottom>
              {t('features.title')}
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
              {t('features.subtitle')}
            </Typography>
          </Box>

          <Grid container spacing={4} >
            {features.map((feature, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <FeatureCard>
                    <CardContent sx={{ textAlign: 'left', p: 4 }}>
                      <IconWrapper>
                        {feature.icon}
                      </IconWrapper>
                      <Typography variant="h6" component="h3" gutterBottom>
                        {t(`features.${feature.translationKey}.title`)}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {t(`features.${feature.translationKey}.description`)}
                      </Typography>
                    </CardContent>
                  </FeatureCard>
                </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <Typography variant="h3" component="h3" gutterBottom>
              {t('features.whyChooseQorva.title')}
            </Typography>
            <Grid container spacing={4} >
              {benefits.map((benefit, index) => (
                  <Grid item xs={12} md={3} key={index}>
                    <FeatureCard>
                      <CardContent sx={{ textAlign: 'left', p: 4 }}>
                        <IconWrapper>
                          {benefit.icon}
                        </IconWrapper>
                        <Typography variant="h6" component="h3" gutterBottom>
                          {benefit.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {benefit.description}
                        </Typography>
                      </CardContent>
                    </FeatureCard>
                  </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
  );
}

export default Features;
