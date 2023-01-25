import React from 'react';
import classes from './Profile.module.scss'

const Profile = () => {
    return (
        <div className={classes.profile}>
            <h1>Profile</h1>
        </div>
    );
};

export default React.memo(Profile);