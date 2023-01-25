import React from 'react';
import classes from './Header.module.scss';
import UserMenu from "../UserMenu/UserMenu/UserMenu";

type PropsType = {
    setOpen?: () => void
}

const Header: React.FC<PropsType> = () => {
    return (
        <div className={classes.header}>
            <div className={classes.header__container}>
                <div className={classes.header__leftSide}>


                </div>
                <UserMenu/>
            </div>
        </div>
    );
};

export default React.memo(Header);