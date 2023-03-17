import React from 'react';
import Box from "@mui/material/Box";
import userAvatar from "../../../images/userAvatar.png";
import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";
import {UserType} from "../../../types/types";
import {Link} from "react-router-dom";
import {Avatar, sx} from '../../Users/User/User.style';
import LoadingButton from '@mui/lab/LoadingButton';
import Preloader from "../../Common/Preloader/Preloader";

type PropsType = {
    user: UserType
    unfollow: (id: number) => void
    followingInProgress: Array<number>
}

const Friend: React.FC<PropsType> = ({user, unfollow, followingInProgress}) => {
    console.log(followingInProgress)
    return (
        <Grid item md={3} lg={2.5} sm={5} xs={9}>
            <Box sx={sx.wrapper}>
                <Avatar>
                    <Link to={'/profile/' + user.id}>
                        <img src={user.photos.large || userAvatar} alt='userAvatar'/>
                    </Link>
                </Avatar>
                <Typography sx={sx.userName}>{user.name}</Typography>
                <LoadingButton loading={followingInProgress.some(id => id === user.id)} fullWidth variant='contained'
                               onClick={() => {
                                   unfollow(user.id)
                               }}>Unfollow</LoadingButton>
            </Box>
        </Grid>
    );
};

export default React.memo(Friend);