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
    border: '1px solid rgba(15,23,42,.06)',
    boxShadow: '0 12px 32px rgba(15,23,42,.05)',
    padding: '20px',
    bgcolor: '#fff',
    mb: 2,
    transition: 'all .2s ease',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 16px 36px rgba(15,23,42,.08)',
    },
  }),

  feed: () => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    mt: 0.5,
  }),

  addPostWrapper: () => ({
    backgroundColor: '#fff',
    borderRadius: 4,
    border: '1px solid rgba(226, 232, 240, 0.85)',
    boxShadow: '0 12px 32px rgba(15,23,42,.05)',
    overflow: 'hidden',
    transition: 'box-shadow .2s ease, border-color .2s ease',
    '&:focus-within': {
      borderColor: 'rgba(88, 80, 236, 0.28)',
      boxShadow: '0 14px 34px rgba(88, 80, 236, 0.1)',
    },
  }),

  addPostInput: () => ({
    width: '100%',
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '& .MuiInputBase-root': {
      borderRadius: '14px',
      minHeight: 48,
      backgroundColor: '#F8FAFC',
      border: '1px solid rgba(15,23,42,.06)',
      fontSize: 15,
      p: 1,
      transition: 'background-color .15s ease, border-color .15s ease',
      '&:hover': {
        backgroundColor: '#F1F5F9',
      },
      '&.Mui-focused': {
        backgroundColor: '#fff',
        borderColor: 'rgba(88, 80, 236, 0.35)',
      },
    },
  }),

  loadingButton: () => ({
    borderRadius: '999px',
    px: 2.5,
    minWidth: 88,
    textTransform: 'none',
    fontWeight: 700,
    boxShadow: '0 8px 18px rgba(88, 80, 236, 0.28)',
    flexShrink: 0,
  }),

  postWrapper: () => ({
    bgcolor: '#fff',
    borderRadius: 4,
    border: '1px solid rgba(226, 232, 240, 0.85)',
    boxShadow: '0 12px 32px rgba(15, 23, 42, 0.05)',
    overflow: 'hidden',
    transition: 'transform .18s ease, box-shadow .18s ease',
    '&:hover': {
      boxShadow: '0 16px 36px rgba(15, 23, 42, 0.08)',
    },
  }),

  empty: () => ({
    py: 6,
    px: 3,
    borderRadius: 4,
    textAlign: 'center',
    bgcolor: '#fff',
    border: '1px solid rgba(226, 232, 240, 0.85)',
    boxShadow: '0 10px 28px rgba(15, 23, 42, 0.05)',
  }),

  actionChip: () => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: 1,
    px: 1.5,
    py: 0.85,
    borderRadius: '12px',
    cursor: 'pointer',
    color: 'text.secondary',
    fontWeight: 650,
    fontSize: 14,
    transition: 'background-color .15s ease, color .15s ease',
    userSelect: 'none',
    '&:hover': {
      bgcolor: 'rgba(88, 80, 236, 0.06)',
      color: 'primary.main',
    },
  }),

  actionChipActive: () => ({
    bgcolor: 'rgba(239, 68, 68, 0.08)',
    color: '#DC2626',
    '&:hover': {
      bgcolor: 'rgba(239, 68, 68, 0.12)',
      color: '#DC2626',
    },
  }),

  commentBubble: () => ({
    mt: 1,
    ml: { xs: 0, sm: 6.5 },
    px: 1.75,
    py: 1.25,
    borderRadius: '4px 14px 14px 14px',
    bgcolor: '#F8FAFC',
    border: '1px solid rgba(226, 232, 240, 0.9)',
  }),
};

export default sx;
