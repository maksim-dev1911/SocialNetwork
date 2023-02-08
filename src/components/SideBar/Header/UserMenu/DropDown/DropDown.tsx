import React from 'react';
import classes from './DropDown.module.scss';
import {Link} from "react-router-dom";
import userLogo from "../../../../../images/userAvatar.png";
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import {ProfileType} from "../../../../../types/types";

type PropsType = {
    userProfile?: ProfileType | null
    logout: () => void
    isAuth: boolean
}

const DropDown: React.FC<PropsType> = ({userProfile, logout, isAuth}) => {
    return (
        <div className={classes.dropDown}>
            <div className={classes.dropDown__user}>
                <img src={userProfile?.photos?.large || userLogo}/>
                <p>{userProfile?.fullName}</p>
            </div>
            <ul>
                <li>
                    <ListItemButton sx={{p: 0}}>
                        <IconButton size='small'>
                            <SettingsIcon/>
                        </IconButton>
                        <Link to='/settings'>Settings</Link>
                    </ListItemButton>
                </li>
                <li>
                    <ListItemButton sx={{p: 0}}>
                        <IconButton size='small'>
                            <LogoutIcon/>
                        </IconButton>
                        <Link to='' onClick={logout}>Logout</Link>
                    </ListItemButton>
                </li>
            </ul>
        </div>
    );
};

export default DropDown;