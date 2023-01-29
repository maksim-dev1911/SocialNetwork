import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../api";
import {setUserProfile} from "./profileSlice";

export const getUserProfile = createAsyncThunk(
    'profile/userId',
    async (userId: string | undefined,{dispatch}) => {
        const response = await api.get("profile/" + userId)
        dispatch(setUserProfile(response.data))
    }
)