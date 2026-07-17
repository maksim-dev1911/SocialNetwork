import React from 'react';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import Avatar from '@mui/material/Avatar';

import { UserType } from '../../../../types/types';

import userImg from '../../../../images/user.jpg';

import Button from '@mui/material/Button';

import sx from '../TimeLine.style';

type PropsType = {
  userFriends: Array<UserType>;

  totalUsersCount: number;

  onClickToTabFriends: () => void;
};

const FriendsCard: React.FC<PropsType> = ({
  totalUsersCount,
  userFriends,
  onClickToTabFriends,
}) => {
  return (
    <Box sx={sx.cardWrapper}>
      <Box display="flex" alignItems="baseline" justifyContent="space-between" gap={1}>
        <Typography fontWeight={800} letterSpacing="-0.02em" fontSize={16} color="#1e293b">
          Friends
        </Typography>

        <Typography fontWeight={700} color="primary.main" fontSize={13}>
          {totalUsersCount}
        </Typography>
      </Box>

      <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(48px, 1fr))" gap={1} mt={2}>
        {userFriends.slice(0, 10).map((friend) => (
          <Avatar
            key={friend.id}
            sx={{
              width: 52,
              height: 52,
              justifySelf: 'center',
              border: '2px solid #fff',
              boxShadow: '0 4px 12px rgba(15,23,42,0.1)',
            }}
            src={friend.photos.large || userImg}
          />
        ))}
      </Box>

      <Button
        onClick={onClickToTabFriends}
        fullWidth
        sx={{
          mt: 2,
          textTransform: 'none',
          fontWeight: 650,
          borderRadius: '12px',
          color: 'primary.main',
          bgcolor: 'rgba(88, 80, 236, 0.06)',
          '&:hover': {
            bgcolor: 'rgba(88, 80, 236, 0.1)',
          },
        }}
      >
        Show all friends
      </Button>
    </Box>
  );
};

export default React.memo(FriendsCard);
