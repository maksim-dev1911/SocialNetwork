import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProfileType} from "../../types/types";

type initialStateType = {
    profile: ProfileType | null
}

const initialState: initialStateType = {
    profile: null
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setUserProfile: (state, action: PayloadAction<ProfileType>) => {
            state.profile = action.payload
        }
    }
})

export const {setUserProfile} = profileSlice.actions

export default profileSlice.reducer;