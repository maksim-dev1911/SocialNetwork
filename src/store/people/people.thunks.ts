import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api';
import {
  isLoadingFollowed,
  setCurrentPage,
  setIsFetching,
  setTotalUsersCount,
  setUsers,
  updateUsers,
} from './peopleSlice';

export const getUsers = createAsyncThunk(
  'users',
  async ({ pageSize, currentPage }: any, { dispatch }) => {
    dispatch(setIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    const response = await api.get(`users?page=${currentPage}&count=${pageSize}`);
    dispatch(setIsFetching(false));
    dispatch(setUsers(response.data.items));
    dispatch(setTotalUsersCount(response.data.totalCount));
  }
);

export const follow = createAsyncThunk(
  'follow',
  async (userId: number | undefined, { dispatch }) => {
    if (userId) {
      dispatch(isLoadingFollowed({ userId, isFetching: true }));
      await api.post(`follow/${userId}`);
      dispatch(updateUsers({ id: userId, user: { followed: true } }));
      dispatch(isLoadingFollowed({ userId, isFetching: false }));
    }
  }
);

export const unfollow = createAsyncThunk(
  'follow',
  async (userId: number | undefined, { dispatch }) => {
    if (userId) {
      dispatch(isLoadingFollowed({ userId, isFetching: true }));
      await api.delete(`follow/${userId}`);
      dispatch(updateUsers({ id: userId, user: { followed: false } }));
      dispatch(isLoadingFollowed({ userId, isFetching: false }));
    }
  }
);
