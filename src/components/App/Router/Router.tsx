import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Login from "../../../pages/Auth/Login/Login";
import ResetPassword from "../../../pages/Auth/ResetPassword/ResetPassword";
import BaseLayout from "../BaseLayout/BaseLayout";
import Settings from "../../../pages/Settings/Settings";
import Profile from "../../../pages/Profile/Profile.container";
import Messages from "../../../pages/Messages/Messages.container";
import People from "../../../pages/Users/People.container";

const Router = () => {
    return (
        <>
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/resetPass' element={<ResetPassword/>}/>
                <Route path='/' element={<BaseLayout/>}>
                    <Route path='/profile/:userId?' element={<Profile/>}/>
                    <Route path='/messages' element={<Messages/>}/>
                    <Route path='/people' element={<People/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default React.memo(Router);