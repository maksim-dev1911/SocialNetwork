import {RootState} from "../index";

export const userProfileSelector = (state: RootState) => state.profile.profile;
export const userProfilePhoto = (state: RootState) => state.profile.userPhoto;
export const getUserFriendsSelector = (state: RootState) => state.profile.userFriends;
export const isFetchingSelector = (state: RootState) => state.profile.isFetching;
export const getCurrentPage = (state: RootState) => state.profile.currentPage
export const getPageSize = (state: RootState) => state.profile.pageSize
export const getTotalUsersCount = (state: RootState) => state.profile.totalUsersCount
export const followingInProgressSelector = (state: RootState) => state.profile.followingInProgress