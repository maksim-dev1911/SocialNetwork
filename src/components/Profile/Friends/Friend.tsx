import React from 'react';
import Box from '@mui/material/Box';
import userImg from '../../../images/user.jpg';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { UserType } from '../../../types/types';
import { Avatar } from '../../Users/User/User.style';
import LoadingButton from '@mui/lab/LoadingButton';
import sx from './Friends.style';
import Link from '../../Common/Link/Link';

type PropsType = {
  user: UserType;
  unfollow: (id: number) => void;
  followingInProgress: Array<number>;
};

const Friend: React.FC<PropsType> = ({ user, unfollow, followingInProgress }) => {
  return (
    <Grid item md={3} lg={2.5} sm={5} xs={9}>
      <Box sx={sx.wrapper}>
        <Avatar>
          <Link to={'/profile/' + user.id}>
            <img src={user.photos.large || userImg} alt="userAvatar" />
          </Link>
        </Avatar>
        <Box>
          <Link to={'/profile/' + user.id} sx={{ textDecoration: 'none' }}>
            <Typography color="black" variant="h6" sx={sx.userName}>
              {user.name}
            </Typography>
          </Link>
          <Typography color="#6F7F92">{user.status}</Typography>
        </Box>
        <LoadingButton
          loading={followingInProgress.some((id) => id === user.id)}
          sx={{ color: 'white', fontWeight: 'bold', mt: 1 }}
          color="error"
          variant="contained"
          onClick={() => {
            unfollow(user.id);
          }}
        >
          Unfollow
        </LoadingButton>
      </Box>
    </Grid>
  );
};

export default React.memo(Friend);
