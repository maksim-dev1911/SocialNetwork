import React from 'react';
import Box from '@mui/material/Box';
import { UserType } from '../../../types/types';
import { Grid, Pagination, Theme, useMediaQuery } from '@mui/material';
import Friend from './Friend';
import Typography from '@mui/material/Typography';
import Preloader from '../../Common/Preloader/Preloader';
import sx from './Friends.style';

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

  if (!userFriends.length) {
    return (
      <Typography sx={{ textAlign: 'center', fontSize: '20px', pb: 5, color: '#8C8C8C' }}>
        You don't have friends
      </Typography>
    );
  }

  if (isFetching) {
    return <Preloader />;
  }

  return (
    <Box mt={3}>
      <Typography fontSize="19px">Friends ({userFriends?.length})</Typography>
      <Grid sx={sx.gridContainer} container>
        {userFriends.map((friend) => (
          <Friend
            key={friend.id}
            followingInProgress={followingInProgress}
            unfollow={unfollow}
            user={friend}
          />
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" sx={{ overflowX: 'auto', maxWidth: '100%' }}>
        <Pagination
          page={currentPage}
          onChange={pageChanged}
          count={Math.ceil(totalUsersCount / pageSize)}
          size={isXs ? 'small' : 'large'}
          siblingCount={isXs ? 0 : 1}
          boundaryCount={1}
          variant="outlined"
          defaultPage={1}
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default React.memo(Friends);
