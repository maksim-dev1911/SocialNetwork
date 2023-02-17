import {RootState} from "../index";

export const userProfileSelector = (state: RootState) => state.profile.profile;
export const userProfilePhoto = (state: RootState) => state.profile.userPhoto;