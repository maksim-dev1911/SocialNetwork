import React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import {ProfileType} from "../../../../types/types";
import sx from '../TimeLine.style';

type PropsType = {
    profile: ProfileType | null
}

const About: React.FC<PropsType> = ({profile}) => {
    const items = [
        {
            icon: FavoriteBorderOutlinedIcon,
            title: 'About Me:',
            description: `${profile?.aboutMe}`
        },
        {
            icon: WorkHistoryOutlinedIcon,
            title: 'Looking a job:',
            description: `${profile?.lookingForAJob ? 'I am looking for a job' : 'I am not looking for a job'}`
        },
        {
            icon: WorkOutlineOutlinedIcon,
            title: 'Looking job description:',
            description: `${profile?.lookingForAJobDescription}`
        }
    ]
    return (
        <Box mb={2} sx={sx.cardWrapper}>
            <Typography fontWeight={600}>About me</Typography>
            <Box mt={1}>
                {items.map((item) => (
                    <Box p='3px' display='flex'>
                        <Box>
                            <item.icon sx={{mr: 1, color: '#64748B'}} fontSize='small'/>
                        </Box>
                        <Typography fontSize='15px' fontWeight={600} color="#64748B">{item.description}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default React.memo(About);