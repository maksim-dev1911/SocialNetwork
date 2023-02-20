import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProfileType} from "../../types/types";

export type IUser = {
    id: number
    email: string
    login: string
}

type initialStateType = {
    currentUser: IUser | null
    isAuth: boolean
    currentUserProfile: ProfileType | null
    isFetching: boolean,
}

const initialState: initialStateType = {
    currentUser: null,
    isAuth: false,
    currentUserProfile: null,
    isFetching: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthUserData: (state, action:PayloadAction<IUser>) => {
            state.currentUser = action.payload
            state.isAuth = true
        },
        setIsAuthSignUp: (state) => {
            state.isAuth = false
        },
        currentUserProfile: (state, action:PayloadAction<ProfileType>) => {
            state.currentUserProfile = action.payload
        },
        setIsFetching: (state, action: PayloadAction<boolean>) => {
            state.isFetching = action.payload
        }
    },
})

export const {setAuthUserData, currentUserProfile, setIsAuthSignUp, setIsFetching} = authSlice.actions

export default authSlice.reducer;