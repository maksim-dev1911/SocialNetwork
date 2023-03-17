import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../api";
import {
    toggleFollowingInProgress,
    setCurrentPage,
    setPhoto,
    setTotalUsersCount,
    setUserFriends,
    setUserProfile,
    updateUsers, setIsFetching,
} from "./profileSlice";

export const getUserProfile = createAsyncThunk(
    'profile/userId',
    async (userId: string | undefined, {dispatch}) => {
        const response = await api.get("profile/" + userId)
        dispatch(setUserProfile(response.data))
    }
)

export const savePhoto = createAsyncThunk(
    'savePhoto',
    async (file: any, {dispatch}) => {
        const formData = new FormData();
        formData.append('image', file)
        const response = await api.put("profile/photo", formData, {headers: {'Content-Type': 'multipart/form-data'}})
        if (response.data.resultCode === 0) {
            dispatch(setPhoto(response.data))
        }
    }
)

export const unfollow = createAsyncThunk(
    'unfollow',
    async (userId: number | undefined, {dispatch}) => {
        if (userId) {
            dispatch(toggleFollowingInProgress({isFetching: true, userId}))
            await api.delete(`follow/${userId}`)
            dispatch(updateUsers(userId))
            dispatch(toggleFollowingInProgress({isFetching: false, userId}))
        }
    }
)

export const getUserFriends = createAsyncThunk(
    'userFriends',
    async ({pageSize, currentPage}: any, {dispatch}) => {
        dispatch(setIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        const response = await api.get(`users?page=${currentPage}&count=${pageSize}&friend=true`)
        dispatch(setUserFriends(response.data.items))
        dispatch(setTotalUsersCount(response.data.totalCount))
        dispatch(setIsFetching(false))
    }
)