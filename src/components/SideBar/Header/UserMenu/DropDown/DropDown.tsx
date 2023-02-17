import React from 'react';
import {Link} from "react-router-dom";
import userLogo from "../../../../../images/userAvatar.png";
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import {ProfileType} from "../../../../../types/types";
import {Stack} from "@mui/material";
import sx, {Avatar, LinkContainer} from "../UserMenu.style";

type PropsType = {
    currentUserProfile?: ProfileType | null
    logout: () => void
}

const DropDown: React.FC<PropsType> = ({logout, currentUserProfile}) => {
    return (
        <Stack sx={sx.dropDown}>
            <Stack sx={sx.userInfo}>
                <Avatar>
                    <img src={currentUserProfile?.photos?.large || userLogo} alt='avatar'/>
                    <p>{currentUserProfile?.fullName}</p>
                </Avatar>
            </Stack>
            <Stack sx={{textDecoration: 'none'}}>
                <ListItemButton sx={{p: "5px", mt: "5px", '&:hover': {borderRadius: '5px'}}}>
                    <IconButton size='small'>
                        <SettingsIcon/>
                    </IconButton>
                    <LinkContainer>
                        <Link to='/settings'>Settings</Link>
                    </LinkContainer>
                </ListItemButton>
                <ListItemButton sx={{p: "5px", mt: "5px"}}>
                    <IconButton size='small'>
                        <LogoutIcon/>
                    </IconButton>
                    <LinkContainer>
                        <Link to='' onClick={logout}>Logout</Link>
                    </LinkContainer>
                </ListItemButton>
            </Stack>
        </Stack>
    );
};

export default DropDown;