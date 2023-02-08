import {RootState} from "../index";

export const getUsersSelector = (state: RootState) => state.people.users;
export const getCurrentPage = (state: RootState) => state.people.currentPage
export const getPageSize = (state: RootState) => state.people.pageSize
export const getTotalUsersCount = (state: RootState) => state.people.totalUsersCount
export const getIsFetchingSelector = (state: RootState) => state.people.totalUsersCount