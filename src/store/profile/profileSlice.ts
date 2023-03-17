import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PhotosType, ProfileType, UserType} from "../../types/types";

type initialStateType = {
    profile: ProfileType | null
    userPhoto: PhotosType | null
    userFriends: Array<UserType>
    currentPage: number
    pageSize: number
    totalUsersCount: number
    followingInProgress: Array<number>
    isFetching: boolean
}

const initialState: initialStateType = {
    profile: null,
    userPhoto: null,
    userFriends: [],
    currentPage: 1,
    pageSize: 12,
    totalUsersCount: 0,
    followingInProgress: [],
    isFetching: false
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setUserProfile: (state, action: PayloadAction<ProfileType>) => {
            state.profile = action.payload
        },
        setPhoto: (state, action) => {
            state.userPhoto = action.payload
        },
        setUserFriends: (state, action: PayloadAction<Array<UserType>>) => {
            state.userFriends = action.payload
        },
        updateUsers: (state, action: PayloadAction<number>) => {
            state.userFriends = state.userFriends.filter((friend) => friend.id !== action.payload)
            state.totalUsersCount = state.totalUsersCount - 1
            if (Math.ceil(state.totalUsersCount / state.pageSize) < state.currentPage) {
                state.currentPage = Math.ceil(state.totalUsersCount / state.pageSize)
            }
        },
        toggleFollowingInProgress: (state, {payload}: PayloadAction<{isFetching: boolean, userId: number}>) => {
            if (payload.isFetching) {
                state.followingInProgress.push(payload.userId)
            } else {
                state.followingInProgress = state.followingInProgress.filter(id => id !== payload.userId)
            }
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        },
        setTotalUsersCount: (state, action: PayloadAction<number>) => {
            state.totalUsersCount = action.payload
        },
        setIsFetching: (state, action: PayloadAction<boolean>) => {
            state.isFetching = action.payload
        }
    }
})

export const {
    setUserProfile,
    setPhoto,
    setUserFriends,
    updateUsers,
    toggleFollowingInProgress,
    setTotalUsersCount,
    setCurrentPage,
    setIsFetching
} = profileSlice.actions

export default profileSlice.reducer;