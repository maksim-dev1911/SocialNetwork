import React from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "../../../pages/Auth/Login/Login";
import ResetPassword from "../../../pages/Auth/ResetPassword/ResetPassword";
import Profile from "../../../pages/Profile/Profile";

const Router = () => {
    return (
        <>
            <Routes>
                <Route path='/auth' element={<Login/>}/>
                <Route path='/lostPas' element={<ResetPassword/>}/>
                <Route path='/profile' element={<Profile/>}/>
            </Routes>
        </>
    );
};

export default React.memo(Router);