import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    currentUserProfile,
    setAuthUserData,
    getError,
    setIsAuthSignUp,
    setIsFetching,
    getCaptchaUrl
} from "./authSlice";
import {ILoginData} from "../../pages/Auth/Login/Login";
import {api} from "../../api";

export const getAuthUserData = createAsyncThunk(
    'getAuthUserData',
    async (_, {dispatch}) => {
        const response = await api.get('auth/me')
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(response.data.data));
        }
    }
)

export const captchaUrl = createAsyncThunk(
    'captcha',
    async (_, {dispatch}) => {
        const response = await api.get('security/get-captcha-url')
        dispatch(getCaptchaUrl(response.data.url))
    }
)

export const signIn = createAsyncThunk(
    'auth/login',
    async (data: ILoginData, {dispatch}) => {
        const response = await api.post('auth/login', data)
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
            dispatch(getCaptchaUrl(''))
        }
        if (response.data.resultCode === 10) {
            dispatch(captchaUrl())
        }
        dispatch(getError(response.data.messages))
    }
)

export const signUp = createAsyncThunk(
    'auth/signUp',
    async (_, {dispatch}) => {
        dispatch(setIsFetching(true))
        await api.delete('auth/login')
        dispatch(setIsAuthSignUp())
        dispatch(setIsFetching(false))
    }
)

export const getCurrentUserProfile = createAsyncThunk(
    'photos',
    async (userId: number | undefined, {dispatch}) => {
        const response = await api.get("profile/" + userId)
        dispatch(currentUserProfile(response.data))
    }
)
