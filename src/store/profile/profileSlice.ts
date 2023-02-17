import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PhotosType, ProfileType} from "../../types/types";

type initialStateType = {
    profile: ProfileType | null
    userPhoto: PhotosType | null
}

const initialState: initialStateType = {
    profile: null,
    userPhoto: null
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setUserProfile: (state, action: PayloadAction<ProfileType>) => {
            state.profile = action.payload
        },
        setPhoto: (state, action) => {
            state.userPhoto = action.payload
        }
    }
})

export const {setUserProfile, setPhoto} = profileSlice.actions

export default profileSlice.reducer;