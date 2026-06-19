import { StylesRecord } from '../../../interfaces/Styles';

export const sx: StylesRecord = {
  wrapper: () => ({
    textAlign: 'center',
  }),
  userName: () => ({}),
  gridContainer: () => ({
    gap: 5,
    display: 'flex',
    justifyContent: 'center',
    mb: 8,
    mt: 8,
  }),
};
export default sx;
