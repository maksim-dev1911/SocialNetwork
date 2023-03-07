import React from 'react';
import {IUser, ProfileType} from "../../../types/types";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import {Stack} from "@mui/material";

type PropsType = {
    profile: ProfileType | null
    userMe: IUser | null
}

const UserInfo: React.FC<PropsType> = ({profile, userMe}) => {
    return (
        <Box sx={{backgroundColor: 'rgba(220, 220, 220, 0.5)', borderRadius: "8px", p: 1, display: 'flex'}}>
            <Avatar src={profile?.photos?.large}>{profile?.fullName}</Avatar>
            <Stack>
                <Typography sx={{ml: 1, fontSize: '14px'}}>{profile?.fullName}</Typography>
                <Typography sx={{ml: 1, fontSize: '12px',  color: '#8C8C8C'}}>{userMe?.email}</Typography>
            </Stack>
        </Box>
    );
};

export default React.memo(UserInfo);