import React from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "../../../pages/Auth/Login/Login";
import ResetPassword from "../../../pages/Auth/ResetPassword/ResetPassword";
import Profile from "../../../pages/Profile/Profile";
import BaseLayout from "../BaseLayout/BaseLayout";
import Messages from "../../../pages/Messages/Messages";
import People from "../../../pages/People/People";
import Settings from "../../../pages/Settings/Settings";

const Router = () => {
    return (
        <>
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/resetPass' element={<ResetPassword/>}/>
                <Route path='/' element={<BaseLayout/>}>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/messages' element={<Messages/>}/>
                    <Route path='/people' element={<People/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default React.memo(Router);