import {createAsyncThunk} from "@reduxjs/toolkit";
import {setAuthUserData} from "./authSlice";
import {ILoginData} from "../../pages/Auth/Login/Login";
import {api} from "../../api";
import {setUserProfile} from "../profile/profileSlice";

export const getAuthUserData = createAsyncThunk(
    'getAuthUserData',
    async (_, {dispatch}) => {
        const response = await api.get('auth/me')
        if (response.data.resultCode === 0) {
            let user = response.data.data;
            const profile = await api.get("profile/" + user.id)
            dispatch(setUserProfile(profile.data))
            dispatch(setAuthUserData(user));
        }
    }
)

export const signIn = createAsyncThunk(
    'auth/login',
    async (data: ILoginData, {dispatch}) => {
        const response = await api.post('auth/login', data)
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        }
    }
)

export const signUp = createAsyncThunk(
    'auth/signUp',
    async (_, {dispatch}) => {
        await api.delete('auth/login')
        dispatch(getAuthUserData())
    }
)
