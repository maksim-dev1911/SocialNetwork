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
    error: string
    captcha: string
}

const initialState: initialStateType = {
    currentUser: null,
    isAuth: false,
    currentUserProfile: null,
    isFetching: false,
    error: '',
    captcha: ''
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
        },
        getError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
        getCaptchaUrl: (state, action: PayloadAction<string>) => {
            state.captcha = action.payload
        }
    },
})

export const {setAuthUserData, currentUserProfile, setIsAuthSignUp, setIsFetching, getError, getCaptchaUrl} = authSlice.actions

export default authSlice.reducer;