import React from 'react';
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import GroupsIcon from "@mui/icons-material/Groups";
import ListItem from "@mui/material/ListItem";
import Link from "../Common/Link/Link";
import ListItemButton from "@mui/material/ListItemButton";
import sx from "../SideBar/SideBar.style";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";

type PropsType = {
    userId?: number
    variant?: 'default' | 'small';
}

const NavBar: React.FC<PropsType> = ({userId}) => {
    const linkItem = [
        {
            title: 'Profile',
            icon: HomeIcon,
            path: `/profile/${userId}`,
        },
        {
            title: 'Messages',
            icon: EmailIcon,
            path: '/messages'
        },
        {
            title: 'People',
            icon: GroupsIcon,
            path: '/people'
        },
    ]

    return (
        <div>
            <List sx={{p: 0}}>
                {linkItem.map((link) => (
                    <ListItem key={link.title} disablePadding sx={{display: 'block'}}>
                        <Link sx={{textDecoration: 'none'}} key={link.title} to={link.path}>
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
        </div>
    );
};

export default React.memo(NavBar)