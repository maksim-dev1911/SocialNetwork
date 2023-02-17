import styled from "@emotion/styled";
import {StylesRecord} from "../../../../interfaces/Styles";

const sx: StylesRecord = {
    dropDown: () => ({
        fontFamily: 'Inter',
        position: "absolute",
        top: "3rem",
        right: "0.3rem",
        width: "200px",
        padding: "15px",
        borderRadius: "8px",
        backgroundColor: "#fff",
        boxShadow: "5px 5px 20px 5px rgba(0, 0, 0, 0.1%)",
    }),
    userInfo: () => ({
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        borderBottom: "1px solid #eaeaea",
        paddingBottom: "10px",
    })
}

export const Avatar = styled('div')(
    () => `
  img {
    width: 40px;
    height: 40px;
    cursor: pointer;
    border-radius: 20px;
  }
  
  p {
    margin: 0 0 0 10px;
    font-size: 16px;
    font-weight: 400;
    color: #333333;
  }
`
);

export const LinkContainer = styled('div')(
    () => `
  a {
    text-decoration: none;
    color: #565555;
    margin-left: 10px;
    font-size: 15px;
  }
`
);

export default sx;