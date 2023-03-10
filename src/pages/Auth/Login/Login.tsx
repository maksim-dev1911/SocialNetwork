import React, {useCallback, useEffect} from 'react';
import {Navigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {signIn} from "../../../store/auth/auth.thunks";
import LoginForm from "../../../components/auth/authForm/LoginForm";
import {
    captchaUrlSelector,
    currentUserIdSelector,
    errorSelector,
    isAuthSelector,
    isFetchingSignUp
} from "../../../store/auth/auth.selectors";
import Preloader from "../../../components/Common/Preloader/Preloader";

export type ILoginData = {
    email: string
    password: string
    rememberMe: boolean
}

const Login = () => {
    const dispatch = useAppDispatch();
    const userId = useAppSelector(currentUserIdSelector);
    const isFetching = useAppSelector(isFetchingSignUp);
    const isAuth = useAppSelector(isAuthSelector);
    const error = useAppSelector(errorSelector);
    const captchaUrl = useAppSelector(captchaUrlSelector);

    const handleSubmit = useCallback(
        async (data: ILoginData) => {
            await dispatch(signIn(data))
        }, []
    )

    if (isFetching) {
        return <Preloader/>
    }

    if (isAuth) {
        return <Navigate to={`/profile/${userId}`}/>
    }

    return (
        <LoginForm
            handleSubmit={handleSubmit}
            title='Sign In Your Account'
            description='You are now logged out.'
            lostPass='Lost Your password ?'
            nameBtn='Login'
            rememberMe
            error={error}
            captchaUrl={captchaUrl}
        />
    );
};

export default React.memo(Login);