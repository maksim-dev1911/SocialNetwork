import React from 'react';
import profileCoverImg from "../../../images/profile-cover.jpg";
import avatarImg from '../../../images/userAvatar.png';
import TabsMy from '../../Common/Tabs/Tabs';
import sx, {Avatar, Banner} from "./UserProfile.style";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";

const UserProfile = () => {
    return (
        <Box sx={sx.wrapper}>
            <div>
                <Banner>
                    <img src={profileCoverImg}/>
                    <Avatar>
                        <img src={avatarImg}/>
                    </Avatar>
                </Banner>
            </div>
            <Typography sx={sx.userName}>Maks Shvetsov</Typography>
            <div>
                <TabsMy/>
            </div>
        </Box>
    );
};

export default React.memo(UserProfile);