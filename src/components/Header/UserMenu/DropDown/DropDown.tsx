import React from 'react';
import classes from './DropDown.module.scss';
import {Link} from "react-router-dom";
import userLogo from "../../../../images/userAvatar.png";
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const DropDown = () => {
    return (
        <div className={classes.dropDown}>
            <div className={classes.dropDown__user}>
                <img src={userLogo}/>
                <p>Maks Shvetsov</p>
            </div>
            <ul>
                <li>
                    <SettingsIcon/>
                    <Link to='/'>Settings</Link>
                </li>
                <li>
                    <LogoutIcon/>
                    <Link to='/'>Logout</Link>
                </li>
            </ul>
        </div>
    );
};

export default DropDown;