import { StylesRecord } from '../../../interfaces/Styles';

export const sx: StylesRecord = {
  wrapper: () => ({
    p: 2.5,
    borderRadius: '20px',
    backgroundColor: '#fff',
    boxShadow: '0px 8px 30px rgba(15, 23, 42, 0.08)',
    transition: '0.2s',

    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0px 12px 40px rgba(15, 23, 42, 0.12)',
    },
  }),
  userName: () => ({}),
  gridContainer: () => ({
    gap: { xs: 2, sm: 5 },
    display: 'flex',
    justifyContent: 'center',
    mb: { xs: 4, sm: 8 },
    mt: { xs: 4, sm: 8 },
  }),
};
export default sx;
