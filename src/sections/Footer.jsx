import { useTranslation } from 'react-i18next';
import { Box, Container, Grid, Typography, Link, Stack } from '@mui/material';

function Footer() {
  const { t } = useTranslation();

  const footerLinks = {
    product: {
      title: t('footer.product.title'),
      items: [
        { name: t('footer.product.features'), href: '#features' },
        { name: t('footer.product.pricing'), href: '#pricing' },
        { name: t('footer.product.documentation'), href: '#docs' },
        { name: t('footer.product.apiReference'), href: '#api' },
      ],
    },
    company: {
      title: t('footer.company.title'),
      items: [
        { name: t('footer.company.aboutUs'), href: '#about' },
        { name: t('footer.company.blog'), href: '#blog' },
        { name: t('footer.company.careers'), href: '#careers' },
        { name: t('footer.company.contact'), href: '#contact' },
      ],
    },
    legal: {
      title: t('footer.legal.title'),
      items: [
        { name: t('footer.legal.privacyPolicy'), href: '#privacy' },
        { name: t('footer.legal.termsOfService'), href: '#terms' },
        { name: t('footer.legal.security'), href: '#security' },
        { name: t('footer.legal.compliance'), href: '#compliance' },
      ],
    },
  };

  return (
      <Box
          component="footer"
          sx={{
            py: 8,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) => theme.palette.grey[900],
            color: 'white',
          }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom>{t('footer.brand')}</Typography>
                <Typography variant="body2" color="grey.400">
                  {t('footer.description')}
                </Typography>
              </Box>
            </Grid>

            {Object.values(footerLinks).map((section) => (
                <Grid item xs={12} sm={6} md={2} key={section.title}>
                  <Typography variant="subtitle1" color="white" gutterBottom>
                    {section.title}
                  </Typography>
                  <Stack spacing={2}>
                    {section.items.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            variant="body2"
                            color="grey.400"
                            sx={{ '&:hover': { color: 'white' } }}
                            underline="none"
                        >
                          {item.name}
                        </Link>
                    ))}
                  </Stack>
                </Grid>
            ))}

            <Grid item xs={12} md={2}>
              <Typography variant="subtitle1" color="white" gutterBottom>
                {t('footer.contact.title')}
              </Typography>
              <Stack spacing={2}>
                <Typography variant="body2" color="grey.400">
                  {t('footer.contact.email')}
                </Typography>
              </Stack>
            </Grid>
          </Grid>

          <Box sx={{ mt: 8, pt: 4, borderTop: '1px solid', borderColor: 'grey.800' }}>
            <Typography variant="body2" color="grey.400" align="center">
              © {new Date().getFullYear()} Qorva. {t('footer.copyright')}
            </Typography>
          </Box>
        </Container>
      </Box>
  );
}

export default Footer;
