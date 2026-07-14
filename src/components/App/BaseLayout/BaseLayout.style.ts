import { StylesRecord } from '../../../interfaces/Styles';

const sx: StylesRecord = {
  content: () => ({
    pt: '88px',
    pb: 3,
    minHeight: '100vh',
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: '#FBFBFC',
    overflowX: 'hidden',
  }),
  container: () => ({
    mx: { xs: 2, sm: 3, md: 5 },
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0,
  }),
};

export default sx;
