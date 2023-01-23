import React, {useCallback, useEffect} from 'react';
import {Navigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {authMe, signIn} from "../../../store/auth/auth.thunks";
import LoginForm from "../../../components/auth/authForm/LoginForm";
import {isAuthSelector} from "../../../store/auth/auth.selectors";

export type ILoginData = {
    email: string
    password: string
    rememberMe: boolean
}

const Login = () => {
    const dispatch = useAppDispatch();
    const isAuth = useAppSelector(isAuthSelector);

    useEffect(() => {
        dispatch(authMe())
    }, [])

    const handleSubmit = useCallback(
        async (data: ILoginData) => {
            await dispatch(signIn(data))
        }, []
    )

    if (isAuth === true) {
        return <Navigate to='/profile'/>
    }

    return (
        <LoginForm
            handleSubmit={handleSubmit}
            title='Sign In Your Account'
            description='You are now logged out.'
            lostPass='Lost Your password ?'
            nameBtn='Login'
            rememberMe
        />
    );
};

export default React.memo(Login);