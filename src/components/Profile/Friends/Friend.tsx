import React from 'react';
import Box from '@mui/material/Box';
import userImg from '../../../images/user.jpg';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { UserType } from '../../../types/types';
import LoadingButton from '@mui/lab/LoadingButton';
import sx from './Friends.style';
import Link from '../../Common/Link/Link';
import PersonRemoveOutlinedIcon from '@mui/icons-material/PersonRemoveOutlined';

type PropsType = {
  user: UserType;
  unfollow: (id: number) => void;
  followingInProgress: Array<number>;
};

const Friend: React.FC<PropsType> = ({ user, unfollow, followingInProgress }) => {
  return (
    <Box sx={sx.card}>
      <Link to={'/profile/' + user.id} sx={{ textDecoration: 'none', lineHeight: 0 }}>
        <Avatar src={user.photos.large || userImg} alt={user.name} sx={sx.avatar} />
      </Link>

      <Link to={'/profile/' + user.id} sx={{ textDecoration: 'none', maxWidth: '100%' }}>
        <Typography sx={sx.name} title={user.name}>
          {user.name}
        </Typography>
      </Link>

      <Typography sx={sx.status} title={user.status || undefined}>
        {user.status || 'No status yet'}
      </Typography>

      <LoadingButton
        loading={followingInProgress.some((id) => id === user.id)}
        startIcon={<PersonRemoveOutlinedIcon />}
        variant="outlined"
        sx={sx.unfollowBtn}
        onClick={() => unfollow(user.id)}
      >
        Unfollow
      </LoadingButton>
    </Box>
  );
};

export default React.memo(Friend);
