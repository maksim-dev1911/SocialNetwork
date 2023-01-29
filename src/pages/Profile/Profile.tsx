import React from 'react';
import UserProfile from "../../components/Profile/UserProfile/UserProfile";
import Box from "@mui/material/Box";

const Profile = () => {
    return (
        <Box>
            <UserProfile/>
        </Box>
    );
};

export default React.memo(Profile);