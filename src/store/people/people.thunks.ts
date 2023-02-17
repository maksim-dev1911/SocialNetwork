import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../api";
import {
    getFollowedUsers,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    updateUsers
} from "./peopleSlice";

export const getUsers = createAsyncThunk(
    'users',
    async ({pageSize, currentPage}: any, {dispatch}) => {
        dispatch(setIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        const response = await api.get(`users?page=${currentPage}&count=${pageSize}`)
        dispatch(setIsFetching(false))
        dispatch(setUsers(response.data.items))
        dispatch(setTotalUsersCount(response.data.totalCount))
    }
)

export const follow = createAsyncThunk(
    'follow',
    async (userId: number | undefined, {dispatch}) => {
        if (userId) {
            await api.post(`follow/${userId}`)
            dispatch(updateUsers({id: userId, user: {followed: true}}))
        }
    }
)

export const unfollow = createAsyncThunk(
    'follow',
    async (userId: number | undefined, {dispatch}) => {
        if (userId) {
            await api.delete(`follow/${userId}`)
            dispatch(updateUsers({id: userId, user: {followed: false}}))
        }
    }
)

export const followed = createAsyncThunk(
    'follow',
    async (userId: number | undefined, {dispatch}) => {
        const response = await api.get(`follow/${userId}`)
        dispatch(getFollowedUsers(response.data.data))
    }
)