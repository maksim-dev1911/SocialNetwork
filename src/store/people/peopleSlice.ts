import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UserType} from "../../types/types";

type initialStateType = {
    users: Array<UserType>
    currentPage: number
    pageSize: number
    totalUsersCount: number
    isFetching: boolean
    followed: boolean
}

const initialState: initialStateType = {
    users: [],
    currentPage: 1,
    pageSize: 12,
    totalUsersCount: 0,
    isFetching: true,
    followed: false,
}

const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<Array<UserType>>) => {
            state.users = action.payload
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        },
        setTotalUsersCount: (state, action: PayloadAction<number>) => {
            state.totalUsersCount = action.payload
        },
        setIsFetching: (state, action: PayloadAction<boolean>) => {
            state.isFetching = action.payload
        },
        getFollowedUsers: (state, action: PayloadAction<boolean>) => {
            state.followed = action.payload
        },
        updateUsers: (state, action: PayloadAction<{id: number, user: Partial<UserType>}>) => {
            state.users = state.users.map(user => {
                if (user.id === action.payload.id) {
                    return {...user, ...action.payload.user}
                }
                return user
            })
        }
    }
})

export const {setUsers, setCurrentPage, setIsFetching, setTotalUsersCount, getFollowedUsers, updateUsers} = peopleSlice.actions

export default peopleSlice.reducer