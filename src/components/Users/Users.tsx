import React from 'react';
import { UserType } from '../../types/types';
import User from './User/User';
import { Pagination, Stack } from '@mui/material';

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
  return (
    <>
      <Stack
        bgcolor="#fff"
        borderRadius="24px"
        boxShadow="0px 8px 30px rgba(15, 23, 42, 0.05)"
        overflow="hidden"
        mt={4}
      >
        {users.map((user) => (
          <User follow={follow} unfollow={unfollow} user={user} isLoading={isLoading} isSm={isSm} />
        ))}
      </Stack>
      <Stack display="flex" alignItems="center" mt={2}>
        <Pagination
          page={currentPage}
          onChange={pageChanged}
          count={Math.ceil(totalUsersCount / pageSize)}
          size="large"
          variant="outlined"
          color="primary"
        />
      </Stack>
    </>
  );
};

export default React.memo(Users);
