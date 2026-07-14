import styled from '@emotion/styled';
import { StylesRecord } from '../../../interfaces/Styles';

const sx: StylesRecord = {
  userName: () => ({
    color: 'black',
    textAlign: 'center',
    fontSize: { xs: '22px', sm: '30px' },
    fontWeight: 'bold',
  }),
  wrapper: () => ({
    bgcolor: '#fff',
    borderRadius: '24px 24px 0px 0px',
    border: '1px solid',
    borderColor: 'rgba(226, 232, 240, 0.6)',
    boxShadow: '0px 12px 32px rgba(15, 23, 42, 0.06)',
    pb: 3,
    overflow: 'hidden',
  }),
  mobileContainer: () => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    maxWidth: '100%',
    gap: 0.5,
  }),
  desktopContainer: () => ({
    display: 'flex',
    justifyContent: 'center',
  }),
  mobileIcon: () => ({
    display: 'flex',
    p: '5px',
    textAlign: 'center',
    minWidth: 'auto',
  }),
  desktopIcon: () => ({
    justifyContent: 'center',
  }),
};

export const Banner = styled('div')(
  () => `
    
    display: flex;
    justify-content: center;
    position: relative;
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 15px 15px 0 0;
  }

  @media (min-width: 900px) {
    img {
      height: 385px;
    }
  }
`
);

export const Avatar = styled('div')(
  () => `
    bottom: -40px;
    position: absolute;
  img {
    width: 96px;
    height: 96px;
    box-shadow: 0 2px 20px 0 rgba(0,0, 0, 30);
    border: 4px solid #FFF;
    border-radius: 100px;
  }

  @media (min-width: 600px) {
    bottom: -65px;
    img {
      width: 140px;
      height: 140px;
    }
  }
`
);

export default sx;
