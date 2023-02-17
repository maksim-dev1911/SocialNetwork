import React, {useState} from 'react';
import userLogo from '../../../../../images/userAvatar.png';
import DropDown from "../DropDown/DropDown";
import {ProfileType} from "../../../../../types/types";
import {Stack} from "@mui/material";
import { Avatar } from '../UserMenu.style';

type PropsType = {
    currentUserProfile?: ProfileType | null
    logout: () => void
}

const UserMenu: React.FC<PropsType> = ({currentUserProfile, logout}) => {
    const [openProfile, setOpenProfile] = useState(false)

    const handleOpenProfile = () => {
        setOpenProfile((prev) => !prev)
    }

    return (
        <Stack position='relative'>
            <Avatar>
                <img onClick={handleOpenProfile} src={currentUserProfile?.photos?.large || userLogo} alt='avatar'/>
            </Avatar>
            <div>
                {openProfile && (
                    <DropDown currentUserProfile={currentUserProfile} logout={logout}/>
                )}
            </div>
        </Stack>
    );
};

export default React.memo(UserMenu);