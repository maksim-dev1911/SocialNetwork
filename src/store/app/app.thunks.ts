import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAuthUserData} from "../auth/auth.thunks";
import {initializedSuccess} from "./appSlice";

export const initializeApp = createAsyncThunk(
    'initializeApp',
    async (_, {dispatch}) => {
        let promise = dispatch(getAuthUserData())
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess());
            })
    }
)