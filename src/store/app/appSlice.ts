import {createSlice} from "@reduxjs/toolkit";


type initialStateType = {
    initialized: boolean
}

const initialState: initialStateType = {
    initialized: false
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        initializedSuccess: (state) => {
            state.initialized = true
        }
    }
})

export const {initializedSuccess} = appSlice.actions

export default appSlice.reducer;