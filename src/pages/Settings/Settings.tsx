import React, {useCallback} from 'react';
import {savePhoto} from "../../store/profile/profile.thunks";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {currentUserProfileSelector} from "../../store/auth/auth.selectors";
import Box from "@mui/material/Box";
import BasicSettings from "../../components/Settings/BasicSettings";
import {saveSettings} from "../../store/settings/settings.thunks";
import {SettingsFormValues} from "../../components/Settings/SettingsForm";
import {Theme, useMediaQuery} from "@mui/material";

const Settings = () => {
    const currentUserProfile = useAppSelector(currentUserProfileSelector);
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

    const dispatch = useAppDispatch();

    const selectProfileAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            let file = e.target.files[0]
            dispatch(savePhoto(file))
        }
    }

    const handleSubmit = useCallback(
        async (data: SettingsFormValues) => {
            dispatch(saveSettings(data))
        }, []
    )

    return (
        <Box>
            <BasicSettings isMobile={isMobile} handleSubmit={handleSubmit} currentUserProfile={currentUserProfile} selectAvatar={selectProfileAvatar}/>
        </Box>
    );
};

export default React.memo(Settings);