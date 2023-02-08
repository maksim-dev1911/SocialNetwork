import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UserType} from "../../types/types";

type initialStateType = {
    users: Array<UserType>
    currentPage: number
    pageSize: number
    totalUsersCount: number
    isFetching: boolean
}

const initialState: initialStateType = {
    users: [],
    currentPage: 1,
    pageSize: 12,
    totalUsersCount: 0,
    isFetching: false,
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
        setIsFetching: (state, action) => {
            state.isFetching = action.payload
        },
    }
})

export const {setUsers, setCurrentPage, setIsFetching, setTotalUsersCount} = peopleSlice.actions

export default peopleSlice.reducer