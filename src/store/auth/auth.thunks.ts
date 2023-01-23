import {createAsyncThunk} from "@reduxjs/toolkit";
import {setAuthMe, setIsAuth} from "./authSlice";
import {ILoginData} from "../../pages/Auth/Login/Login";
import {api} from "../../api";


export const authMe = createAsyncThunk(
    'auth/me',
    async (_, {dispatch}) => {
        const response = await api.get('auth/me')
        dispatch(setAuthMe(response.data.data))
    }
)

export const signIn = createAsyncThunk(
    'auth/login',
    async (data: ILoginData, {dispatch}) => {
        const response = await api.post('auth/login', data)
        if (response.data.resultCode === 0) {
            dispatch(authMe())
            dispatch(setIsAuth())
        }
    }
)

export const signUp = createAsyncThunk(
    'auth/signUp',
    async (_, {dispatch}) => {
        await api.delete('auth/login')
        dispatch(authMe())
    }
)
