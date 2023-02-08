import React from 'react';
import {useAppSelector} from "../hooks/redux";
import {isAuthSelector} from "../store/auth/auth.selectors";
import {Navigate} from "react-router-dom";

interface ICondition {
    isAuth: boolean;
}

export interface IAuthGuardOptions {
    condition?: Partial<ICondition>;
    redirectTo?: string;
}

const defaultOption: IAuthGuardOptions = {
    condition: {
        isAuth: true,
    },
    redirectTo: '/login',
};

export default function withAuthGuard<P extends {}>({condition, redirectTo = '',}: IAuthGuardOptions = defaultOption) {
    return (Component: React.ComponentType): React.FC<P> => {
        return (props) => {
            const isAuth = useAppSelector(isAuthSelector);

            if (condition?.isAuth !== isAuth) {
                return <Navigate to={redirectTo}/>;
            }

            return <Component {...props} />;
        };
    };
}