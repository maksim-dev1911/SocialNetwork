import {CSSObject, Theme} from "@mui/material";
import {StylesRecord} from "../../interfaces/Styles";
import {SIDE_BAR_WIDTH, SIDE_BAR_WIDTH_CLOSED} from "../../mui/constants";

const openedMixin = (theme: Theme): CSSObject => ({
    width: SIDE_BAR_WIDTH,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    [theme.breakpoints.up('sm')]: {
        width: `calc(${SIDE_BAR_WIDTH_CLOSED} + 1px)`,
    },
});

const sx: StylesRecord = {
    drawerDesktop: {
        '& .MuiDrawer-paper': {
            borderRight: '1px dashed rgba(145, 158, 171, 0.24)',
            boxSizing: 'border-box',
            width: SIDE_BAR_WIDTH,
        },
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        width: SIDE_BAR_WIDTH,
        flexShrink: 0,
    },
    drawerOpened: (theme) => ({
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
    }),
    drawerClosed: (theme) => ({
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
    }),
    button: () => ({
        '&:hover': {backgroundColor: 'rgba(98, 82, 206, 0.08)'},
    }),
    buttonActive: () => ({
        backgroundColor: 'rgba(98, 82, 206, 0.08)',
        borderRight: '2px solid rgb(98, 82, 255)',
    }),
    generalDivider: () => ({
        fontSize: '13px',
        color: '#8C8C8C',
        mt: 1,
        mb: 1
    }),
    wrapperUserInfo: () => ({
        position: "fixed",
        bottom: 0,
        p: 2,
        width: 240,
    }),
};

export default sx;
