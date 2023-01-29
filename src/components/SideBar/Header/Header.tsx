import React from 'react';
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import UserMenu from "./UserMenu/UserMenu/UserMenu";
import {AppBarProps as MuiAppBarProps} from "@mui/material/AppBar/AppBar";
import {styled} from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

type PropsType = {
    open?: boolean
    setOpen?: () => void
}

const Header: React.FC<PropsType> = ({setOpen, open}) => {
    return (
        <AppBar elevation={0} sx={{borderBottom: '1px solid rgba(0, 0, 0, 0.12)', bgcolor: 'transparent'}} position="fixed" open={open}>
            <Toolbar sx={{backgroundColor: 'white', display: 'flex', justifyContent: 'space-between'}}>
                <IconButton
                    color="default"
                    onClick={setOpen}
                    edge="start"
                    sx={{
                        marginRight: 5,
                        ...(open && {visibility: "hidden"}),
                    }}
                >
                    <MenuIcon/>
                </IconButton>
                <UserMenu />
            </Toolbar>
        </AppBar>
    );
};

export default React.memo(Header);