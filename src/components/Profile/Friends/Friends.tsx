import React from 'react';
import Box from '@mui/material/Box';
import { UserType } from '../../../types/types';
import { Pagination, Theme, useMediaQuery } from '@mui/material';
import Friend from './Friend';
import Typography from '@mui/material/Typography';
import Preloader from '../../Common/Preloader/Preloader';
import sx from './Friends.style';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

type PropsType = {
  userFriends: Array<UserType>;
  unfollow: (id: number) => void;
  isFetching: boolean;
  currentPage: number;
  pageChanged: (_: any, page: number) => void;
  pageSize: number;
  totalUsersCount: number;
  followingInProgress: Array<number>;
};

const Friends: React.FC<PropsType> = ({
  userFriends,
  unfollow,
  isFetching,
  totalUsersCount,
  pageChanged,
  currentPage,
  pageSize,
  followingInProgress,
}) => {
  const isXs = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  if (isFetching) {
    return <Preloader />;
  }

  if (!userFriends.length) {
    return (
      <Box sx={sx.empty}>
        <Box
          sx={{
            width: 64,
            height: 64,
            borderRadius: '20px',
            display: 'grid',
            placeItems: 'center',
            bgcolor: 'rgba(88, 80, 236, 0.1)',
            color: 'primary.main',
            mx: 'auto',
            mb: 2,
          }}
        >
          <PeopleOutlineIcon fontSize="large" />
        </Box>
        <Typography fontWeight={800} fontSize={18} color="text.primary" mb={0.75}>
          No friends yet
        </Typography>
        <Typography fontSize={14} color="text.secondary" maxWidth={320} mx="auto">
          When you connect with people, they will show up here.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={sx.section}>
      <Box sx={sx.header}>
        <Typography sx={sx.title}>Friends</Typography>
        <Box component="span" sx={sx.count}>
          {totalUsersCount}
        </Box>
      </Box>

      <Box sx={sx.grid}>
        {userFriends.map((friend) => (
          <Friend
            key={friend.id}
            followingInProgress={followingInProgress}
            unfollow={unfollow}
            user={friend}
          />
        ))}
      </Box>

      {Math.ceil(totalUsersCount / pageSize) > 1 && (
        <Box sx={sx.pagination}>
          <Pagination
            page={currentPage}
            onChange={pageChanged}
            count={Math.ceil(totalUsersCount / pageSize)}
            size={isXs ? 'small' : 'large'}
            siblingCount={isXs ? 0 : 1}
            boundaryCount={1}
            variant="outlined"
            color="primary"
          />
        </Box>
      )}
    </Box>
  );
};

export default React.memo(Friends);
