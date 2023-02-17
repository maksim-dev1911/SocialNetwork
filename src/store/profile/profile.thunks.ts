import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../api";
import {setPhoto, setUserProfile} from "./profileSlice";

export const getUserProfile = createAsyncThunk(
    'profile/userId',
    async (userId: string | undefined, {dispatch}) => {
        const response = await api.get("profile/" + userId)
        dispatch(setUserProfile(response.data))
    }
)

export const savePhoto = createAsyncThunk(
    'savePhoto',
    async (file: any, {dispatch}) => {
        const formData = new FormData();
        formData.append('image', file)
        const response = await api.put("profile/photo", formData, {headers: {'Content-Type': 'multipart/form-data'}})
        if (response.data.resultCode === 0) {
            dispatch(setPhoto(response.data))
        }
    }
)