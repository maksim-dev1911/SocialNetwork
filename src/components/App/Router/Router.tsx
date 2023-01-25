import React from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "../../../pages/Auth/Login/Login";
import ResetPassword from "../../../pages/Auth/ResetPassword/ResetPassword";
import Profile from "../../../pages/Profile/Profile";
import BaseLayout from "../BaseLayout/BaseLayout";

const Router = () => {
    return (
        <>
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/resetPass' element={<ResetPassword/>}/>
                <Route path='/' element={<BaseLayout/>}>
                    <Route path='/profile' element={<Profile/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default React.memo(Router);