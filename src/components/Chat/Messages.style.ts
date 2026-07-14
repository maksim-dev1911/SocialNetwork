import { StylesRecord } from '../../interfaces/Styles';

export const sx: StylesRecord = {
  messageWrapper: () => ({
    mb: 1,
    '&:last-child': {
      mb: 0,
    },
  }),

  messagesWrapper: () => ({
    bgcolor: '#fff',
    borderRadius: { xs: 3, sm: 6 },
    border: '1px solid rgba(226,232,240,.6)',
    boxShadow: '0 12px 32px rgba(15,23,42,.06)',
    p: { xs: 1.5, sm: 3 },
    mt: 3,
    maxWidth: 1100,
    mx: 'auto',
    width: '100%',
    boxSizing: 'border-box',
  }),
};
