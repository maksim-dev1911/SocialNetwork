import styled from '@emotion/styled';
import { StylesRecord } from '../../../interfaces/Styles';

export const sx: StylesRecord = {
  wrapper: () => ({
    bgcolor: '#fff',
    borderRadius: 6,
    border: '1px solid rgba(226,232,240,.6)',
    boxShadow: '0 12px 32px rgba(15,23,42,.06)',
    p: 3,
    display: 'flex',
    justifyContent: 'space-between',
  }),
  wrapperMobile: () => ({
    borderRadius: '5px',
    backgroundColor: '#F8F9FA',
    p: 4,
    textAlign: 'center',
  }),
  userWrapper: () => ({
    display: 'flex',
  }),
  userInfo: () => ({
    ml: 2,
    mt: 3,
  }),
  userInfoMobile: () => ({
    mb: 1,
    mt: 2,
  }),
};
export const Avatar = styled('div')(
  () => `
  img {
    width: 130px;
    height: 130px;
    border-radius: 100%
  }
`
);

export default sx;
