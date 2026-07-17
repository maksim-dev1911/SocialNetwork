import React from 'react';
import { UserType } from '../../types/types';
import User from './User/User';
import { Pagination, Stack, Theme, useMediaQuery } from '@mui/material';

type PropsType = {
  users: Array<UserType>;
  currentPage: number;
  pageChanged: (_: any, page: number) => void;
  pageSize: number;
  totalUsersCount: number;
  follow: (id: number) => void;
  unfollow: (id: number) => void;
  isLoading: number[];
  isSm: boolean;
};

const Users: React.FC<PropsType> = ({
  users,
  follow,
  unfollow,
  pageSize,
  pageChanged,
  currentPage,
  isLoading,
  totalUsersCount,
  isSm,
}) => {
  const isXs = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <>
      <Stack
        bgcolor="#fff"
        borderRadius={{ xs: '16px', sm: '24px' }}
        boxShadow="0px 8px 30px rgba(15, 23, 42, 0.05)"
        overflow="hidden"
        mt={4}
      >
        {users.map((user) => (
          <User
            key={user.id}
            follow={follow}
            unfollow={unfollow}
            user={user}
            isLoading={isLoading}
            isSm={isSm}
          />
        ))}
      </Stack>
      <Stack display="flex" alignItems="center" mt={2} sx={{ overflowX: 'auto', maxWidth: '100%' }}>
        <Pagination
          page={currentPage}
          onChange={pageChanged}
          count={Math.ceil(totalUsersCount / pageSize)}
          size={isXs ? 'small' : 'large'}
          siblingCount={isXs ? 0 : 1}
          boundaryCount={isXs ? 1 : 1}
          variant="outlined"
          color="primary"
        />
      </Stack>
    </>
  );
};

export default React.memo(Users);
