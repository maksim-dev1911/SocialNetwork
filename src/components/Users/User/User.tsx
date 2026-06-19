import React from 'react';
import Box from '@mui/material/Box';
import { Avatar, sx } from './User.style';
import userAvatar from '../../../images/user.jpg';
import Typography from '@mui/material/Typography';
import { UserType } from '../../../types/types';
import LoadingButton from '@mui/lab/LoadingButton';
import Link from '../../Common/Link/Link';

type PropsType = {
  user: UserType;
  follow: (id: number) => void;
  unfollow: (id: number) => void;
  isLoading: number[];
  isSm: boolean;
};

const User: React.FC<PropsType> = ({ user, follow, unfollow, isLoading, isSm }) => {
  return (
    <Box sx={!isSm ? sx.wrapper : sx.wrapperMobile}>
      <Box sx={!isSm ? sx.userWrapper : null}>
        <Avatar>
          <Link to={'/profile/' + user.id}>
            <img src={user.photos.large || userAvatar} alt="userAvatar" />
          </Link>
        </Avatar>
        <Box sx={!isSm ? sx.userInfo : sx.userInfoMobile}>
          <Link to={'/profile/' + user.id} sx={{ textDecoration: 'none' }}>
            <Typography color="black" variant="h6">
              {user.name}
            </Typography>
          </Link>
          <Typography color="#6F7F92">{user.status}</Typography>
        </Box>
      </Box>
      <div>
        {user.followed ? (
          <LoadingButton
            loading={isLoading.some((id) => id === user.id)}
            variant="contained"
            sx={{ color: 'white', fontWeight: 'bold' }}
            color="error"
            onClick={() => {
              unfollow(user.id);
            }}
          >
            Unfollow
          </LoadingButton>
        ) : (
          <LoadingButton
            loading={isLoading.some((id) => id === user.id)}
            color="success"
            sx={{ color: 'white', fontWeight: 'bold' }}
            variant="contained"
            onClick={() => {
              follow(user.id);
            }}
          >
            Follow
          </LoadingButton>
        )}
      </div>
    </Box>
  );
};

export default React.memo(User);
