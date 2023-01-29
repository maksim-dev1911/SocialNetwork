import React from 'react';
import profileCoverImg from "../../../images/profile-cover.jpg";
import avatarImg from '../../../images/userAvatar.png';
import TabsMy from '../../Common/Tabs/Tabs';
import sx, {Avatar, Banner} from "./UserProfile.style";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import {ProfileType} from "../../../types/types";

type PropsType = {
    profile: ProfileType | null
}

const UserProfile: React.FC<PropsType> = ({profile}) => {

    return (
        <Box sx={sx.wrapper}>
            <div>
                <Banner>
                    <img src={profileCoverImg}/>
                    <Avatar>
                        <img src={profile?.photos?.large || avatarImg}/>
                    </Avatar>
                </Banner>
            </div>
            <Typography sx={sx.userName}>{profile?.fullName}</Typography>
            <div>
                <TabsMy/>
            </div>
        </Box>
    );
};

export default React.memo(UserProfile);