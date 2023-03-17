import styled from "@emotion/styled";
import {StylesRecord} from "../../../interfaces/Styles";

export const sx: StylesRecord = {
    gridContainer: () => ({
        backgroundColor: 'white', display: 'flex', justifyContent: 'center', borderRadius: '12px', p: 2, gap: 4
    }),
    wrapper: () => ({
        boxShadow: "3px 3px 30px 3px rgba(0, 0, 0, 0.12)", textAlign: 'center', p: 2
    }),
    userName: () => ({
        color: "#666", fontFamily: 'Inter', margin: '10px 0 10px 0'
    })
}
export const Avatar = styled('div')(
    () => `
  img {
    width: 130px;
    height: 130px;
    border-radius: 5px
  }
`
);

export default sx;