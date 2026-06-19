import { StylesRecord } from '../../interfaces/Styles';

export const sx: StylesRecord = {
  messageWrapper: () => ({
    mb: 2,
    '&:last-child': {
      mb: 0,
    },
  }),

  messagesWrapper: () => ({
    bgcolor: '#fff',
    borderRadius: 6,
    border: '1px solid rgba(226,232,240,.6)',
    boxShadow: '0 12px 32px rgba(15,23,42,.06)',
    p: 3,
  })
};
