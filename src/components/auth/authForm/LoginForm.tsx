import React from 'react';
import classes from "./LoginForm.module.scss";
import authBackground from "../../../images/auth-background.jpg";
import {FormControlLabel, Stack} from "@mui/material";
import {Link} from "react-router-dom";
import {Form, Field} from 'react-final-form'
import LoadingButton from '@mui/lab/LoadingButton';
import {ILoginData} from "../../../pages/Auth/Login/Login";

type PropsType = {
    handleSubmit: (data: ILoginData) => void
    title: string
    description: string
    lostPass?: string
    nameBtn: string
    rememberMe?: boolean
}

const LoginForm: React.FC<PropsType> = ({
    handleSubmit,
    title,
    description,
    lostPass,
    nameBtn,
    rememberMe
    }) => {
    return (
        <div className={classes.auth}>
            <img className={classes.bd} src={authBackground}/>
            <div className={classes.auth__loginContent}>
                <div className={classes.auth__tabContent}>
                    <h1>{title}</h1>
                    <h5>{description}</h5>
                    <div>
                        <Form
                            onSubmit={handleSubmit}
                            render={({handleSubmit, submitting}) => (
                                <form onSubmit={handleSubmit} className={classes.auth__form}>
                                    <Stack>
                                        <Field
                                            name='email'
                                            component='input'
                                            placeholder="Login"
                                            className={classes.auth__input}
                                            type='text'
                                        />
                                        <Field
                                            name='password'
                                            component='input'
                                            placeholder="Password"
                                            type='password'
                                            className={classes.auth__input}
                                        />
                                        {rememberMe
                                            ?
                                            <FormControlLabel
                                                style={{marginBottom: 10}}
                                                label="Remember me"
                                                control={
                                                <Field
                                                name='rememberMe'
                                                component='input'
                                                type='checkbox'
                                                className={classes.auth__rememberMe}
                                                />
                                            }
                                            />
                                            : ''}

                                        <LoadingButton
                                            disabled={submitting}
                                            loading={submitting}
                                            variant="contained"
                                            size="large"
                                            type="submit"
                                            fullWidth
                                        >
                                            {nameBtn}
                                        </LoadingButton>
                                    </Stack>
                                </form>
                            )}
                        />
                        <div className={classes.auth__lostPass}>
                            <span>
                                <Link to='/lostPas'>{lostPass}</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(LoginForm);