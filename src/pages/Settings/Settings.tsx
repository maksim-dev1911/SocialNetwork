import React from 'react';
import {PhotoCamera} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import {savePhoto} from "../../store/profile/profile.thunks";
import {useAppDispatch} from "../../hooks/redux";

const Settings = () => {
    const dispatch = useAppDispatch();

    const selectProfileAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            let file = e.target.files[0]
            dispatch(savePhoto(file))
        }
    }

    return (
        <div>
            <h1>Settings</h1>
            <IconButton color="primary" aria-label="upload picture" component="label">
                <input onChange={selectProfileAvatar} hidden accept="image/*" type="file" />
                <PhotoCamera />
            </IconButton>
        </div>
    );
};

export default React.memo(Settings);