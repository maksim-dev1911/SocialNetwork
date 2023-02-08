import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import profileSlice from "./profile/profileSlice";
import peopleSlice from "./people/peopleSlice";
import appSlice from "./app/appSlice";

const rootReducer = combineReducers({
    auth: authSlice,
    app: appSlice,
    profile: profileSlice,
    people: peopleSlice,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
