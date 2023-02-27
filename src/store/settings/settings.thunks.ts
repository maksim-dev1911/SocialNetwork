import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../api";
import {SettingsFormValues} from "../../components/Settings/SettingsForm";
import {ProfileType} from "../../types/types";

export const saveSettings = createAsyncThunk(
    'settings',
    async ({
               fullName,
               aboutMe,
               vk,
               github,
               lookingForAJobDescription,
               mainLink,
               youtube,
               instagram,
               facebook,
               website,
               twitter,
               lookingForAJob
           }: SettingsFormValues, {dispatch}) => {
        const payload: ProfileType = {
            fullName,
            aboutMe,
            lookingForAJobDescription,
            lookingForAJob,
            contacts: {vk, github, facebook, instagram, mainLink, youtube, twitter, website}
        }
        await api.put('profile', payload)
    }
)