import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  borderRadius: '12px !important',
  border: '1px solid rgba(37, 99, 235, 0.08)',
  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
  marginBottom: theme.spacing(2),
  '&:before': { display: 'none' },
  '&.Mui-expanded': {
    boxShadow: '0 4px 20px rgba(37, 99, 235, 0.1)',
    borderColor: 'rgba(37, 99, 235, 0.2)',
  },
}));

const faqKeys = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'];

function FAQ() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ py: 12, background: '#ffffff' }} id="faq">
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" component="h2" gutterBottom>
            {t('faq.title')}
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ fontWeight: 400 }}>
            {t('faq.subtitle')}
          </Typography>
        </Box>

        {faqKeys.map((key) => (
          <StyledAccordion
            key={key}
            expanded={expanded === key}
            onChange={handleChange(key)}
            elevation={0}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main' }} />}
              sx={{
                px: 3,
                py: 1,
                '& .MuiAccordionSummary-content': { my: 1.5 },
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1rem' }}>
                {t(`faq.${key}.question`)}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 3, pb: 3 }}>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                {t(`faq.${key}.answer`)}
              </Typography>
            </AccordionDetails>
          </StyledAccordion>
        ))}
      </Container>
    </Box>
  );
}

export default FAQ;
