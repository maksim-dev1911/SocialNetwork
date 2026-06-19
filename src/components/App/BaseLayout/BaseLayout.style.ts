import { StylesRecord } from '../../../interfaces/Styles';

const sx: StylesRecord = {
  content: () => ({
    pt: '88px',
    pb: 3,
    minHeight: '100vh',
    maxWidth: '100vw',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: '#FBFBFC',
  }),
  container: () => ({
    mx: 5,
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  }),
};

export default sx;
