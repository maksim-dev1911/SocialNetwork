import styled from "@emotion/styled";
import {StylesRecord} from "../../../interfaces/Styles";

const sx: StylesRecord = {
    userName: () => ({
        color: "#464646",
        textAlign: "center",
        fontSize: "30px",
        mt: 3,
        fontWeight: "bold",
    }),
    wrapper: () => ({
        backgroundColor: 'white',
        borderRadius: '12px'
    }),
}

export const Banner = styled('div')(
    () => `
    
    display: flex;
    justify-content: center;
  img {
    width: 100%;
    height: 285px;
    object-fit: cover;
    border-radius: 12px 12px 0 0;
  }
`
);

export const Avatar = styled('div')(
    () => `
    bottom: -20px;
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