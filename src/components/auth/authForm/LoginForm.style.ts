import { StylesRecord } from '../../../interfaces/Styles';
import styled from '@emotion/styled';

const sx: StylesRecord = {
  wrapper: () => ({
    boxShadow: '0 10px 18px 0 rgba(0, 0, 0, 0.2%)',
    padding: { xs: '24px 20px', sm: '50px 40px' },
    backgroundColor: '#fff',
    position: { xs: 'relative', sm: 'absolute' },
    minHeight: { xs: 'auto', sm: '400px' },
    width: 'calc(100% - 32px)',
    maxWidth: 400,
    borderRadius: { xs: '15px', sm: '0 15px 15px 15px' },
    left: { sm: 0 },
    right: { sm: 0 },
    margin: { xs: '24px auto', sm: '0 auto' },
    top: { sm: 'calc(42% - 200px)' },
    boxSizing: 'border-box',
    zIndex: 1,
  }),
  error: () => ({
    color: '#d32f2f',
    mb: 2,
  }),
};

export const BackgroundImage = styled('div')(
  () => `
  display: none;

  @media (min-width: 600px) {
    display: block;
    position: absolute;
    inset: 0;
    z-index: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }
`
);

export default sx;
