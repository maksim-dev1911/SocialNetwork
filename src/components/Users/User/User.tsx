import React from 'react';
import Box from "@mui/material/Box";
import {Avatar, sx} from "./User.style";
import userAvatar from "../../../images/userAvatar.png";
import Typography from "@mui/material/Typography";
import {Button, Grid} from "@mui/material";
import {UserType} from "../../../types/types";
import {Link} from "react-router-dom";

type PropsType = {
    user: UserType
    follow: (id: number) => void
    unfollow: (id: number) => void
}

const User: React.FC<PropsType> = ({user, follow, unfollow}) => {
    return (
        <Grid item>
            <Box sx={sx.wrapper}>
                <Avatar>
                    <Link to={'/profile/' + user.id}>
                        <img src={user.photos.large || userAvatar} alt='userAvatar'/>
                    </Link>
                </Avatar>
                <Typography sx={sx.userName}>{user.name}</Typography>
                {user.followed
                    ? <Button fullWidth variant='contained' onClick={() => {unfollow(user.id)}}>Unfollow</Button>
                    : <Button fullWidth variant='contained' onClick={() => {follow(user.id)}}>Follow</Button>
                }
            </Box>
        </Grid>
    );
};

export default React.memo(User);