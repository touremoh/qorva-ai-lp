import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { BOOK_DEMO_URL, CTA_ORANGE, CTA_ORANGE_HOVER } from '../config/cta';

/**
 * The page's only call to action. Every placement renders this component, so the label,
 * the destination and the styling cannot drift apart, and no second competing action can
 * creep back in without deleting a usage of it.
 */
function BookDemoButton({ size, fullWidth, sx }) {
  const { t } = useTranslation();

  return (
    <Button
      variant="contained"
      size={size}
      fullWidth={fullWidth}
      href={BOOK_DEMO_URL}
      sx={{
        px: size === 'large' ? 5 : 3,
        py: size === 'large' ? 2 : 1.25,
        fontSize: size === 'large' ? '1.05rem' : '0.95rem',
        fontWeight: 700,
        borderRadius: '12px',
        whiteSpace: 'nowrap',
        color: '#fff',
        backgroundColor: CTA_ORANGE,
        boxShadow: '0 12px 32px rgba(217,58,0,0.38)',
        '&:hover': {
          backgroundColor: CTA_ORANGE_HOVER,
          boxShadow: '0 16px 40px rgba(217,58,0,0.5)',
          transform: 'translateY(-2px)',
        },
        transition: 'all 0.2s ease',
        ...sx,
      }}
    >
      {t('cta.bookDemo')}
    </Button>
  );
}

BookDemoButton.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  fullWidth: PropTypes.bool,
  sx: PropTypes.object,
};

BookDemoButton.defaultProps = {
  size: 'large',
  fullWidth: false,
  sx: {},
};

export default BookDemoButton;
