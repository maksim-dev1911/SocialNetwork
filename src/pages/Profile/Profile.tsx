import React, {useEffect} from 'react';
import UserProfile from "../../components/Profile/UserProfile/UserProfile";
import Box from "@mui/material/Box";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {userProfileSelector} from "../../store/profile/profile.selectors";
import {getUserProfile} from "../../store/profile/profile.thunks";
import {useParams} from "react-router-dom";
import Preloader from "../../components/Common/Preloader/Preloader";

const Profile = () => {
    const profile = useAppSelector(userProfileSelector)
    const dispatch = useAppDispatch();

    let {userId} = useParams()
    if (!userId) {
        userId = '22912'
    }

    useEffect(() => {
        dispatch(getUserProfile(userId))
    }, [])

    if (!profile) {
        return <Preloader/>
    }

    return (
        <Box>
            <UserProfile profile={profile}/>
        </Box>
    );
};

export default React.memo(Profile);