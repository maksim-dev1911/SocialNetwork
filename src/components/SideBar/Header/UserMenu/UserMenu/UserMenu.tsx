import React, {useState} from 'react';
import classes from './UserMenu.module.scss';
import userLogo from '../../../../../images/userAvatar.png';
import DropDown from "../DropDown/DropDown";
import {ProfileType} from "../../../../../types/types";
import {Avatar} from "@mui/material";

type PropsType = {
    userProfile?: ProfileType | null
    logout: () => void
    isAuth: boolean
}

const UserMenu: React.FC<PropsType> = ({userProfile, logout, isAuth}) => {
    const [openProfile, setOpenProfile] = useState(false)

    const handleOpenProfile = () => {
        setOpenProfile((prev) => !prev)
    }

    return (
        <div className={classes.userMenu}>
            <div>
                <Avatar onClick={handleOpenProfile} src={userProfile?.photos?.large || userLogo}/>
            </div>
            <div>
                {openProfile && (
                    <DropDown isAuth={isAuth} logout={logout} userProfile={userProfile}/>
                )}
            </div>
        </div>
    );
};

export default React.memo(UserMenu);