import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import profileSlice from "./profile/profileSlice";

const rootReducer = combineReducers({
    auth: authSlice,
    profile: profileSlice,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
