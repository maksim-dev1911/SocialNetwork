import {StylesRecord} from "../../interfaces/Styles";

const sx: StylesRecord = {
    avatarContainer: () => ({
        borderColor: "rgba(88, 80, 236, 0.3)",
        borderRadius: "50%",
        borderStyle: "dashed",
        borderWidth: "2px",
        padding: "4px",
        transition: 'all 0.2s ease',
        '&:hover': {
            borderColor: 'rgba(88, 80, 236, 0.5)',
            transform: 'scale(1.02)',
        },
    }),
    selectButton: () => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: "all 0.2s ease",
        borderRadius: "50%",
        color: "rgba(0,0,0, 0)",
        height: "100%",
        backdropFilter: 'blur(4px)',
        '&:hover': {
            background: "rgba(88, 80, 236, 0.15)",
            borderRadius: "50%",
            color: "#5850EC",
            transition: "all 0.2s ease",
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
        width: '100%',
        maxWidth: 500,
    })
}

export default sx;