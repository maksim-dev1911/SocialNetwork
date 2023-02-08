import styled from "@emotion/styled";
import {StylesRecord} from "../../../interfaces/Styles";

export const sx: StylesRecord = {
    gridContainer: () => ({
        backgroundColor: 'white', display: 'flex', justifyContent: 'center', borderRadius: '12px', p: 2, gap: 2,
    }),
    wrapper: () => ({
        boxShadow: "3px 3px 30px 3px rgba(0, 0, 0, 0.12)", textAlign: 'center', p: 3
    }),
    userName: () => ({
        color: "#666", fontFamily: 'Inter', margin: '10px'
    })
}
export const Avatar = styled('div')(
    () => `
  img {
    width: 180px;
    height: 180px;
    border-radius: 5px
  }
`
);

export default sx;