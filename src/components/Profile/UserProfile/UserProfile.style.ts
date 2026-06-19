import styled from "@emotion/styled";
import {StylesRecord} from "../../../interfaces/Styles";

const sx: StylesRecord = {
    userName: () => ({
        color: "black",
        textAlign: "center",
        fontSize: "30px",
        fontWeight: "bold",
    }),
    wrapper: () => ({
        bgcolor: '#fff',
        borderRadius: '24px 24px 0px 0px',
        border: '1px solid',
        borderColor: 'rgba(226, 232, 240, 0.6)',
        boxShadow: '0px 12px 32px rgba(15, 23, 42, 0.06)',
        pb: 3,
    }),
    mobileContainer: () => ({
        display: 'block',
    }),
    desktopContainer: () => ({
        display: 'flex',
        justifyContent: 'center'
    }),
    mobileIcon: () => ({
        display: 'block',
        p: '5px',
        textAlign: 'center',
    }),
    desktopIcon: () => ({
        justifyContent: 'center',
    }),
}

export const Banner = styled('div')(
    () => `
    
    display: flex;
    justify-content: center;
  img {
    width: 100%;
    height: 385px;
    object-fit: cover;
    border-radius: 15px 15px 0 0;
  }
`
);

export const Avatar = styled('div')(
    () => `
    bottom: -65px;
    position: absolute;
  img {
    width: 140px;
    height: 140px;
    box-shadow: 0 2px 20px 0 rgba(0,0, 0, 30);
    border: 4px solid #FFF;
    border-radius: 100px;
  }
`
);

export default sx;