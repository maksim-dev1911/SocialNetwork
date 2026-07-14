import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { follow, getUsers, unfollow } from '../../store/people/people.thunks';
import {
  getCurrentPage,
  getIsFetchingSelector,
  getPageSize,
  getTotalUsersCount,
  getUsersSelector,
  IsLoadingFollowed,
} from '../../store/people/people.selectors';
import Users from '../../components/Users/Users';
import Preloader from '../../components/Common/Preloader/Preloader';
import { Theme, useMediaQuery } from '@mui/material';

const People = () => {
  const users = useAppSelector(getUsersSelector);
  const currentPage = useAppSelector(getCurrentPage);
  const pageSize = useAppSelector(getPageSize);
  const isLoading = useAppSelector(IsLoadingFollowed);
  const totalUsersCount = useAppSelector(getTotalUsersCount);
  const isFetching = useAppSelector(getIsFetchingSelector);
  const dispatch = useAppDispatch();

  const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  useEffect(() => {
    onPageChanged(currentPage);
  }, [currentPage]);

  const handleFollow = (id: number) => {
    dispatch(follow(id));
  };

  const handleUnfollow = (id: number) => {
    dispatch(unfollow(id));
  };

  const onPageChanged = (currentPage: number) => {
    dispatch(getUsers({ currentPage, pageSize }));
  };

  const handlePageChanged = (_: any, page: number) => {
    onPageChanged(page);
  };

  if (isFetching) {
    return <Preloader />;
  }

  return (
    <Users
      pageChanged={handlePageChanged}
      currentPage={currentPage}
      pageSize={pageSize}
      users={users}
      totalUsersCount={totalUsersCount}
      follow={handleFollow}
      unfollow={handleUnfollow}
      isLoading={isLoading}
      isSm={isSm}
    />
  );
};

export default React.memo(People);
