import React from 'react';
import classes from "./SideBar.module.scss";
import logoImg from "../../images/logo.png";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import GroupsIcon from "@mui/icons-material/Groups";
import {CSSObject, styled, Theme} from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Link from "../Common/Link/Link";
import ListItemButton from '@mui/material/ListItemButton';
import sx from './SideBar.style';

const drawerWidth = 240;

const linkItem = [
    {
        title: 'Profile',
        icon: HomeIcon,
        path: '/profile'
    },
    {
        title: 'Messages',
        icon: EmailIcon,
        path: '/messages'
    },
    {
        title: 'Users',
        icon: GroupsIcon,
        path: '/people'
    },
]

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    backgroundColor: '#f9fafb',
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
    backgroundColor: '#f9fafb',
});

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar, backgroundColor: '#f9fafb',
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
}

const SideBar: React.FC<PropsType> = ({open, setClose}) => {
    return (
        <Drawer variant="permanent" open={open}>
            <DrawerHeader sx={{display: 'flex', justifyContent: 'space-between', ml: 1}}>
                <img alt='logo' src={logoImg}/>
                <IconButton onClick={setClose}>
                    <ChevronRightIcon/>
                </IconButton>
            </DrawerHeader>
            <Divider/>
            <List>
                {linkItem.map((link) => (
                    <ListItem key={link.title} disablePadding sx={{display: 'block'}}>
                        <Link sx={{textDecoration: 'none',}} key={link.title} to={link.path}>
                            {({isActive}) => (
                                <ListItemButton sx={isActive ? sx.buttonActive : sx.button}>
                                    <ListItemIcon sx={{minWidth: '18px', mr: 3, ml: 0.5,}}>
                                        <link.icon fontSize="medium" color={isActive ? 'primary' : undefined}/>
                                    </ListItemIcon>
                                    <Typography fontFamily='Inter' color={isActive ? '' : 'textSecondary'}
                                                variant="body2">
                                        {link.title}
                                    </Typography>
                                </ListItemButton>
                            )}
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default React.memo(SideBar);