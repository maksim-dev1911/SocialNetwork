import {RootState} from "../index";

export const currentUserSelector = (state: RootState) => state.auth.currentUser;
export const isAuthSelector = (state: RootState) => state.auth.isAuth;