import React from 'react';
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import {ProfileType} from "../../types/types";
import NavBar from "../NavBar/NavBar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

type PropsType = {
    profile: ProfileType | null
    userId?: number
}

const SideBarIsSmall: React.FC<PropsType> = ({profile, userId}) => {
    return (
        <Box mt={8} >
            <Typography sx={{fontSize: '11px', textAlign: 'center', mt: 1, mb: 1, color: '#8C8C8C'}}>GENERAL</Typography>
            <Box>
                <NavBar userId={userId} variant='small'/>
            </Box>
            <Box sx={{position: "absolute", bottom: 0, left:"50%", transform:"translate(-50%, -45%)", p: '3px'}}>
                <Avatar src={profile?.photos?.large}>{profile?.fullName}</Avatar>
            </Box>
        </Box>
    );
};

export default React.memo(SideBarIsSmall);