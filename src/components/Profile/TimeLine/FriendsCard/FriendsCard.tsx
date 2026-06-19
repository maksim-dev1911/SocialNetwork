import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { UserType } from '../../../../types/types';
import userImg from '../../../../images/user.jpg';
import { Link } from '@mui/material';
import sx from '../TimeLine.style';

type PropsType = {
  userFriends: Array<UserType>;
  totalUsersCount: number;
  onClickToTabFriends: () => void;
}

const FriendsCard: React.FC<PropsType> = ({ totalUsersCount, userFriends, onClickToTabFriends }) => {
  return (
    <Box sx={sx.cardWrapper}>
      <Box display='flex' alignItems='center' gap='4px'>
        <Typography fontWeight={600}>Friends</Typography>
        <Typography fontWeight={600} color='gray' fontSize='14px'>{totalUsersCount}</Typography>
      </Box>
      <Box display='flex' justifyContent='space-between'  mt={2}>
        {userFriends.slice(0, 5).map((friend) => (
          <Avatar sx={{ width: 52, height: 52 }} src={friend.photos.large || userImg} />
        ))}
      </Box>
      <Box mt={2} onClick={onClickToTabFriends}>
        <Link underline='hover' sx={{cursor: "pointer"}} fontSize='14px'>Show
          all</Link>
      </Box>
    </Box>
  );
};

export default React.memo(FriendsCard);