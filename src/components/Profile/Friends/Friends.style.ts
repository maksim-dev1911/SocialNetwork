import { StylesRecord } from '../../../interfaces/Styles';

export const sx: StylesRecord = {
  section: () => ({
    mt: 2.5,
  }),

  header: () => ({
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    gap: 1.5,
    mb: 2,
    px: { xs: 0.5, sm: 0 },
  }),

  title: () => ({
    fontSize: { xs: 18, sm: 20 },
    fontWeight: 800,
    letterSpacing: '-0.02em',
    color: 'text.primary',
  }),

  count: () => ({
    fontSize: 13,
    fontWeight: 700,
    color: 'primary.main',
    bgcolor: 'rgba(88, 80, 236, 0.08)',
    borderRadius: '999px',
    px: 1.25,
    py: 0.35,
  }),

  grid: () => ({
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      sm: 'repeat(2, minmax(0, 1fr))',
      md: 'repeat(3, minmax(0, 1fr))',
      lg: 'repeat(4, minmax(0, 1fr))',
    },
    gap: { xs: 1.5, sm: 2 },
    mb: 3,
  }),

  card: () => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    p: { xs: 2, sm: 2.5 },
    borderRadius: 4,
    bgcolor: '#fff',
    border: '1px solid rgba(226, 232, 240, 0.8)',
    boxShadow: '0 10px 28px rgba(15, 23, 42, 0.05)',
    transition: 'transform .18s ease, box-shadow .18s ease, border-color .18s ease',

    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 16px 36px rgba(15, 23, 42, 0.1)',
      borderColor: 'rgba(88, 80, 236, 0.22)',
    },
  }),

  avatar: () => ({
    width: 88,
    height: 88,
    border: '3px solid #fff',
    boxShadow: '0 8px 22px rgba(15, 23, 42, 0.14)',
    mb: 1.5,
  }),

  name: () => ({
    fontSize: 16,
    fontWeight: 750,
    color: 'text.primary',
    letterSpacing: '-0.02em',
    lineHeight: 1.25,
    textDecoration: 'none',
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    '&:hover': {
      color: 'primary.main',
    },
  }),

  status: () => ({
    mt: 0.5,
    mb: 2,
    fontSize: 13,
    fontWeight: 500,
    color: 'text.secondary',
    lineHeight: 1.35,
    maxWidth: '100%',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    minHeight: 36,
  }),

  unfollowBtn: () => ({
    mt: 'auto',
    width: '100%',
    textTransform: 'none',
    fontWeight: 650,
    borderRadius: '12px',
    py: 0.9,
    borderColor: 'rgba(239, 68, 68, 0.28)',
    color: '#DC2626',
    bgcolor: 'rgba(239, 68, 68, 0.04)',
    boxShadow: 'none',
    '&:hover': {
      borderColor: '#DC2626',
      bgcolor: 'rgba(239, 68, 68, 0.08)',
      boxShadow: 'none',
    },
  }),

  empty: () => ({
    mt: 4,
    py: 6,
    px: 3,
    borderRadius: 4,
    textAlign: 'center',
    bgcolor: '#fff',
    border: '1px solid rgba(226, 232, 240, 0.8)',
    boxShadow: '0 10px 28px rgba(15, 23, 42, 0.05)',
  }),

  pagination: () => ({
    display: 'flex',
    justifyContent: 'center',
    overflowX: 'auto',
    maxWidth: '100%',
    pb: 1,
  }),
};

export default sx;
