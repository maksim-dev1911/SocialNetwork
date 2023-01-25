import * as React from 'react';
import {styled, Theme, CSSObject} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import GroupsIcon from '@mui/icons-material/Groups';
import LogoutIcon from '@mui/icons-material/Logout';
import logoImg from '../../images/logo.png';
import classes from './SideBar.module.scss';
import UserMenu from "../Header/UserMenu/UserMenu/UserMenu";


const drawerWidth = 240;

const linkItem = [
    {
        title: 'Project',
        icon: HomeIcon,
    },
    {
        title: 'Messages',
        icon: EmailIcon,
    },
    {
        title: 'People',
        icon: GroupsIcon,
    },
    {
        title: 'Logout',
        icon: LogoutIcon,
    },
]

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
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
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

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

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

type PropsType = {
    open?: boolean
    setClose?: () => void
    setOpen?: () => void
}

const MiniDrawer: React.FC<PropsType> = ({setOpen, open, setClose}) => {
    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar position="fixed" open={open}>
                <Toolbar sx={{backgroundColor: 'white', display: 'flex', justifyContent: 'space-between', boxShadow: 'none' }}>
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
                    <UserMenu/>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <img className={classes.logoImg} src={logoImg}/>
                    <IconButton onClick={setClose}>
                        <ChevronRightIcon/>
                    </IconButton>
                </DrawerHeader>
                <Divider/>
                <List>
                    {linkItem.map((link, index) => (
                        <ListItem key={link.title} disablePadding sx={{display: 'block'}}>
                            <ListItemButton>
                                <ListItemIcon
                                    sx={{
                                        minWidth: '18px',
                                        mr: 3,
                                        ml: 0.5,
                                    }}
                                >
                                    <link.icon fontSize="medium"/>
                                </ListItemIcon>
                                <Typography variant="body2">
                                    {link.title}
                                </Typography>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
}

export default React.memo(MiniDrawer);