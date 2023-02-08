import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type IUser = {
    id: number
    email: string
    login: string
}

type initialStateType = {
    currentUser: IUser | null
    isAuth: boolean
}

const initialState: initialStateType = {
    currentUser: null,
    isAuth: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthUserData: (state, action:PayloadAction<IUser>) => {
            state.currentUser = action.payload
            state.isAuth = true
        },
    },
})

export const {setAuthUserData} = authSlice.actions

export default authSlice.reducer;