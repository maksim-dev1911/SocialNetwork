import { StylesRecord } from '../../../interfaces/Styles';



const sx: StylesRecord = {

  wrapper: () => ({

    bgcolor: '#fff',

    borderRadius: { xs: 3, sm: 4 },

    border: '1px solid rgba(226, 232, 240, 0.7)',

    boxShadow: '0 16px 40px rgba(15, 23, 42, 0.07)',

    overflow: 'hidden',

    mb: 0,

  }),



  banner: () => ({

    position: 'relative',

    height: { xs: 168, sm: 220, md: 280 },

    '& img': {

      width: '100%',

      height: '100%',

      objectFit: 'cover',

      display: 'block',

    },

  }),



  bannerOverlay: () => ({

    position: 'absolute',

    inset: 0,

    background:

      'linear-gradient(180deg, rgba(15,23,42,0.05) 0%, rgba(15,23,42,0.18) 45%, rgba(15,23,42,0.55) 100%)',

  }),



  socialRow: () => ({

    position: 'absolute',

    right: { xs: 12, sm: 20 },

    bottom: { xs: 12, sm: 16 },

    display: 'flex',

    flexWrap: 'wrap',

    justifyContent: 'flex-end',

    gap: 0.75,

    maxWidth: { xs: '58%', sm: '48%' },

  }),



  socialBtn: () => ({

    width: 36,

    height: 36,

    minWidth: 36,

    borderRadius: '12px',

    bgcolor: 'rgba(255,255,255,0.18)',

    backdropFilter: 'blur(8px)',

    border: '1px solid rgba(255,255,255,0.28)',

    color: '#fff',

    p: 0,

    transition: 'transform .15s ease, background-color .15s ease',

    '&:hover': {

      bgcolor: 'rgba(255,255,255,0.3)',

      transform: 'translateY(-1px)',

    },

  }),



  body: () => ({

    position: 'relative',

    px: { xs: 2, sm: 3 },

    pt: { xs: 6.5, sm: 8 },

    pb: { xs: 2.5, sm: 3 },

    background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',

  }),



  avatar: () => ({

    position: 'absolute',

    left: '50%',

    top: 0,

    transform: 'translate(-50%, -50%)',

    width: { xs: 96, sm: 128 },

    height: { xs: 96, sm: 128 },

    border: '4px solid #fff',

    boxShadow: '0 12px 32px rgba(15, 23, 42, 0.2)',

  }),



  identity: () => ({

    display: 'flex',

    flexDirection: 'column',

    alignItems: 'center',

    textAlign: 'center',

    gap: 0.5,

  }),



  userName: () => ({

    color: '#1e293b',

    fontSize: { xs: '1.375rem', sm: '1.75rem' },

    fontWeight: 800,

    letterSpacing: '-0.03em',

    lineHeight: 1.2,

  }),



  meta: () => ({

    fontSize: 13,

    color: 'text.secondary',

    fontWeight: 500,

  }),



  actions: () => ({

    mt: 2,

    display: 'flex',

    justifyContent: 'center',

  }),



  editBtn: () => ({

    textTransform: 'none',

    fontWeight: 650,

    borderRadius: '999px',

    px: 2.25,

    borderColor: 'rgba(88, 80, 236, 0.35)',

    color: 'primary.main',

    bgcolor: 'rgba(88, 80, 236, 0.04)',

    '&:hover': {

      borderColor: 'primary.main',

      bgcolor: 'rgba(88, 80, 236, 0.08)',

    },

  }),

};



export default sx;

