import { Box, Container, Grid2, Typography, Link, Stack, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const footerLinks = {
  product: {
    title: 'Product',
    items: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Documentation', href: '#docs' },
      { name: 'API Reference', href: '#api' },
    ],
  },
  company: {
    title: 'Company',
    items: [
      { name: 'About Us', href: '#about' },
      { name: 'Blog', href: '#blog' },
      { name: 'Careers', href: '#careers' },
      { name: 'Contact', href: '#contact' },
    ],
  },
  legal: {
    title: 'Legal',
    items: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Security', href: '#security' },
      { name: 'Compliance', href: '#compliance' },
    ],
  },
};

function Footer() {
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
        <Grid2 container spacing={4}>
          <Grid2 item xs={12} md={4}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>Qorva</Typography>
              <Typography variant="body2" color="grey.400">
                Transform your business with AI-powered solutions. Get started today and see the difference.
              </Typography>
            </Box>
            <Stack direction="row" spacing={1}>
              <IconButton
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'grey.400', '&:hover': { color: 'white' } }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'grey.400', '&:hover': { color: 'white' } }}
              >
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </Grid2>

          {Object.values(footerLinks).map((section) => (
            <Grid2 item xs={12} sm={6} md={2} key={section.title}>
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
            </Grid2>
          ))}

          <Grid2 item xs={12} md={2}>
            <Typography variant="subtitle1" color="white" gutterBottom>
              Contact
            </Typography>
            <Stack spacing={2}>
              <Typography variant="body2" color="grey.400">
                contact@qorva.ai
              </Typography>
            </Stack>
          </Grid2>
        </Grid2>

        <Box sx={{ mt: 8, pt: 4, borderTop: '1px solid', borderColor: 'grey.800' }}>
          <Typography variant="body2" color="grey.400" align="center">
            © {new Date().getFullYear()} Qorva. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer; 
