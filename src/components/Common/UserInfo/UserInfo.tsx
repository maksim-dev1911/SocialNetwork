import React from 'react';
import { ProfileType } from '../../../types/types';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import Link from '../Link/Link';

type PropsType = {
  profile: ProfileType | null
}

const UserInfo: React.FC<PropsType> = ({ profile }) => {
  return (
    <Box sx={{
      backgroundColor: 'rgba(220, 220, 220, 0.5)',
      borderRadius: '20px',
      padding: '15px',
      display: 'flex',
    }}>
      <Avatar src={profile?.photos?.large}>{profile?.fullName}</Avatar>
      <Stack ml={1}>
        <Typography fontSize='14px' color="black">{profile?.fullName}</Typography>
        <Link to={`/profile/${profile?.userId}`} fontSize='12px'>
          Go to profile
        </Link>
      </Stack>
    </Box>
  );
};

export default React.memo(UserInfo);