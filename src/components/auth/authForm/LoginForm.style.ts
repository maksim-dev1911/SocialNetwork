import {StylesRecord} from "../../../interfaces/Styles";
import styled from "@emotion/styled";

const sx: StylesRecord = {
    wrapper: () => ({
        boxShadow: "0 10px 18px 0 rgba(0, 0, 0, 0.2%)",
        padding: "50px 60px",
        backgroundColor: "#fff",
        position: "absolute",
        minHeight: "400px",
        maxWidth: "300px",
        borderRadius: "0 15px 15px 15px",
        left: "0",
        right: "0",
        margin: "0 auto",
        top: "calc(42% - 200px)",
    }),
    error: () => ({
        color: "#d32f2f",
        mb: 2,
    })
}

export const BackgroundImage = styled('div')(
    () => `
  img {
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
  }
`
);

export default sx;