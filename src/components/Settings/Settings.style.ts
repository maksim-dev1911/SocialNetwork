import {StylesRecord} from "../../interfaces/Styles";

const sx: StylesRecord = {
    avatarContainer: () => ({
        borderColor: "rgb(210, 214, 219)",
        borderRadius: "50%",
        borderStyle: "dashed",
        borderWidth: "1px",
        padding: "4px",
    }),
    selectButton: () => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: "300ms",
        borderRadius: "50%",
        color: "rgba(0,0,0, 0)",
        height: "100%",
        '&:hover': {
            background: "rgba(47, 55, 70, 0.5)",
            borderRadius: "50%",
            color: "white",
            transition: "300ms",
        }
    }),
    selectButtonContainer: () => ({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    }),
    fieldStyle: () => ({
        width: '500px'
    })
}

export default sx;