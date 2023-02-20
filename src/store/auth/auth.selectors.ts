import {RootState} from "../index";

export const currentUserSelector = (state: RootState) => state.auth.currentUser;
export const currentUserIdSelector = (state: RootState) => state.auth.currentUser?.id;
export const currentUserProfileSelector = (state: RootState) => state.auth.currentUserProfile;
export const isAuthSelector = (state: RootState) => state.auth.isAuth;
export const isFetchingSignUp = (state: RootState) => state.auth.isFetching;