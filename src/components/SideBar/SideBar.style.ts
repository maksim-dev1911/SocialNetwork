import {StylesRecord} from "../../interfaces/Styles";

const sx: StylesRecord = {
    button: () => ({
        '&:hover': {backgroundColor: '#f3f4f6'},
        borderRadius: 3
    }),
    buttonActive: () => ({
        backgroundColor: 'rgba(98, 82, 206, 0.08)',
        borderRadius: 3,
    })
}

export default sx;