import styled from '@emotion/styled';
import { StylesRecord } from '../../../interfaces/Styles';

export const ImageList = styled('div')(
  () => `
  img {
    max-width: 90%;
  }
`
);

const sx: StylesRecord = {
  cardWrapper: () => ({
    borderRadius: '20px',
    border: '1px solid rgba(15,23,42,.05)',
    boxShadow: `0 1px 2px rgba(15,23,42,.04), 0 8px 24px rgba(15,23,42,.04)`,
    padding: '20px',
    ml: 3,

    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: `0 4px 12px rgba(15,23,42,.06), 0 12px 32px rgba(15,23,42,.08)`,
    },
    transition: 'all .2s ease',
  }),
  addPostWrapper: () => ({
    backgroundColor: '#fff',
    borderRadius: '20px',
    border: '1px solid rgba(15,23,42,.05)',
    boxShadow: '0 8px 24px rgba(15,23,42,.04)',
    transition: 'all .2s ease',
    '&:hover': {
      boxShadow: '0 12px 32px rgba(15,23,42,.06)',
    },
  }),
  addPostInput: () => ({
    width: '100%',
    '& .MuiInputBase-root': {
      borderRadius: '10px',
      minHeight: 58,
      backgroundColor: '#F8FAFC',
      border: '1px solid rgba(15,23,42,.06)',
    },
  }),
  postWrapper: () => ({
    bgcolor: '#fff',
    borderRadius: '24px',
    border: '1px solid',
    borderColor: 'rgba(226, 232, 240, 0.6)',
    boxShadow: '0px 12px 32px rgba(15, 23, 42, 0.06)',
    padding: '15px',
  }),
};

export default sx;
