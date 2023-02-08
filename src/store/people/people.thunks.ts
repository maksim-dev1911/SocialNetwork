import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../api";
import {setCurrentPage, setIsFetching, setTotalUsersCount, setUsers} from "./peopleSlice";

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
