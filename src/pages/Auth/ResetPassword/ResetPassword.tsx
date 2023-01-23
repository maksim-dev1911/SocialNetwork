import React from 'react';
import bgLostPassBlue from '../../../images/bg-lostPassBlue.png';
import backgroundLostPass from '../../../images/backgroundLostPass.png';
import classes from './ResetPassword.module.scss';
import {Link} from "react-router-dom";

const ResetPassword = () => {
    return (
        <div className={classes.lostPass}>
            <div>
                <div className={classes.lostPass__container}>
                    <div className={classes.lostPass__title}>
                        <h1>My account</h1>
                        <p>Circle / My account</p>
                    </div>
                    <div>
                        <img className={classes.lostPass__bgBlue} alt='bgBlue' src={bgLostPassBlue}/>
                    </div>
                    <div className={classes.lostPass__bgLost}>
                        <img alt='bgLost' src={backgroundLostPass}/>
                    </div>
                </div>
                <div className={classes.lostPass__content}>
                    <div className={classes.lostPass__position}>
                        <p>Lost your password? Please enter your username or email address. You will receive a link to
                            create a new password via email.</p>
                        <div>
                            <h3>Username or email</h3>
                            <div>
                                <input type='text'/>
                                <div>
                                    <button>Reset password</button>
                                </div>
                                <Link to='/auth'>
                                    Back to Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(ResetPassword);