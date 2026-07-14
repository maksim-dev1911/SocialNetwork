import styled from '@emotion/styled';
import { StylesRecord } from '../../../interfaces/Styles';

export const sx: StylesRecord = {
  wrapper: () => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    px: { xs: 2, sm: 4 },
    py: 3,
    borderBottom: '1px solid #F1F5F9',
    gap: 2,
    flexWrap: 'wrap',

    '&:hover': {
      backgroundColor: '#FAFBFF',
    },
  }),
  wrapperMobile: () => ({
    borderRadius: '5px',
    backgroundColor: '#F8F9FA',
    p: { xs: 2, sm: 4 },
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 1.5,
  }),
  userWrapper: () => ({
    display: 'flex',
    minWidth: 0,
    flex: 1,
  }),
  userInfo: () => ({
    ml: 2,
    mt: 3,
    minWidth: 0,
  }),
  userInfoMobile: () => ({
    mb: 1,
    mt: 2,
  }),
  buttonStyle: () => ({
    minWidth: { xs: '100%', sm: 160 },
    width: { xs: '100%', sm: 'auto' },
    height: 44,
    borderRadius: '12px',
    borderColor: '#D9D6FE',
    color: '#635BFF',
    fontSize: '15px',
    fontWeight: 600,
    textTransform: 'none',

    '&:hover': {
      borderColor: '#635BFF',
      backgroundColor: 'rgba(99, 91, 255, 0.04)',
    },
  }),
};
export const Avatar = styled('div')(
  () => `
  img {
    width: 70px;
    height: 70px;
    border-radius: 100%
  }
`
);

export default sx;
