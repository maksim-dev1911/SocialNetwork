import { StylesRecord } from '../../interfaces/Styles';

export const sx: StylesRecord = {
  page: () => ({
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    minHeight: 0,
  }),

  shell: () => ({
    mt: { xs: 2, sm: 3 },
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    minHeight: { xs: 'calc(100vh - 200px)', sm: 'calc(100vh - 220px)' },
    maxHeight: { xs: 'calc(100vh - 180px)', sm: 'min(720px, calc(100vh - 200px))' },
    maxWidth: 920,
    width: '100%',
    mx: 'auto',
    borderRadius: { xs: 3, sm: 4 },
    overflow: 'hidden',
    border: '1px solid rgba(148, 163, 184, 0.25)',
    boxShadow: '0 16px 40px rgba(15, 23, 42, 0.08)',
    background: 'linear-gradient(180deg, #f8fafc 0%, #eef2ff 42%, #f8fafc 100%)',
  }),

  header: () => ({
    display: 'flex',
    alignItems: 'center',
    gap: 1.5,
    px: { xs: 2, sm: 2.5 },
    py: 1.75,
    bgcolor: 'rgba(255,255,255,0.82)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(148, 163, 184, 0.22)',
  }),

  headerAvatar: () => ({
    width: 44,
    height: 44,
    bgcolor: 'primary.main',
    fontWeight: 700,
    fontSize: 15,
  }),

  liveDot: () => ({
    width: 8,
    height: 8,
    borderRadius: '50%',
    bgcolor: '#22c55e',
    boxShadow: '0 0 0 4px rgba(34, 197, 94, 0.18)',
  }),

  messagesArea: () => ({
    flex: 1,
    minHeight: 0,
    overflowY: 'auto',
    px: { xs: 1.5, sm: 2.5 },
    py: 2,
    scrollBehavior: 'smooth',
    '&::-webkit-scrollbar': {
      width: 6,
    },
    '&::-webkit-scrollbar-thumb': {
      bgcolor: 'rgba(148, 163, 184, 0.55)',
      borderRadius: 999,
    },
  }),

  messageWrapper: () => ({
    mb: 0.75,
    '&:last-child': {
      mb: 0,
    },
  }),

  emptyState: () => ({
    height: '100%',
    minHeight: 220,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    px: 3,
    color: 'text.secondary',
  }),

  composer: () => ({
    px: { xs: 1.5, sm: 2 },
    py: { xs: 1.25, sm: 1.5 },
    bgcolor: 'rgba(255,255,255,0.9)',
    borderTop: '1px solid rgba(148, 163, 184, 0.22)',
    backdropFilter: 'blur(10px)',
  }),

  composerPaper: () => ({
    display: 'flex',
    alignItems: 'flex-end',
    gap: 1,
    p: 0.75,
    pl: 1.5,
    borderRadius: 999,
    border: '1px solid rgba(99, 102, 241, 0.18)',
    bgcolor: '#fff',
    boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
    transition: 'border-color .2s ease, box-shadow .2s ease',
    '&:focus-within': {
      borderColor: 'rgba(88, 80, 236, 0.45)',
      boxShadow: '0 10px 28px rgba(88, 80, 236, 0.12)',
    },
  }),
};
