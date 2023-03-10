import React, {useCallback} from 'react';
import authBackground from "../../../images/auth-background.jpg";
import {Stack} from "@mui/material";
import {Form} from 'react-final-form'
import LoadingButton from '@mui/lab/LoadingButton';
import {ILoginData} from "../../../pages/Auth/Login/Login";
import TextFieldControlled from "../../Fields/TextFieldControlled/TextFieldControlled";
import CheckBoxControlled from "../../Fields/CheckBoxControlled/CheckBoxControlled";
import Typography from "@mui/material/Typography";
import sx, {BackgroundImage} from "./LoginForm.style";
import Validators from "../../../services/validators";

type PropsType = {
    handleSubmit: (data: ILoginData) => void
    title: string
    description: string
    lostPass?: string
    nameBtn: string
    rememberMe?: boolean
    error?: string
    captchaUrl?: string
}

const LoginForm: React.FC<PropsType> = ({
                                            handleSubmit,
                                            title,
                                            description,
                                            lostPass,
                                            nameBtn,
                                            rememberMe,
                                            error,
                                            captchaUrl
                                        }) => {

    return (
        <Stack>
            <BackgroundImage>
                <img src={authBackground}/>
            </BackgroundImage>
            <Stack sx={sx.wrapper}>
                <Typography fontSize='24px'>{title}</Typography>
                <Typography sx={{mt: 2, mb: 2}}>{description}</Typography>
                <Typography sx={sx.error}>{error}</Typography>
                <Form
                    onSubmit={handleSubmit}
                    render={({handleSubmit, submitting}) => (
                        <form onSubmit={handleSubmit}>
                            <Stack>
                                <Stack spacing={2}>
                                    <TextFieldControlled
                                        type='email'
                                        name='email'
                                        label='Email'
                                        size='small'
                                        validate={Validators.compose(
                                            Validators.required,
                                            Validators.max(30),
                                        )}
                                    />
                                    <TextFieldControlled
                                        type='password'
                                        name='password'
                                        label='Password'
                                        size='small'
                                        validate={Validators.compose(
                                            Validators.required,
                                            Validators.max(20),
                                            Validators.min(5),
                                        )}
                                    />
                                </Stack>
                                {rememberMe
                                    ?
                                    <CheckBoxControlled
                                        name='rememberMe'
                                        type='checkbox'
                                        label="Remember me"
                                        sx={{mt: 1, mb: 1}}
                                    />
                                    : ''}
                                {captchaUrl && <Stack sx={{width: 110, maxHeight: 110, mb: 2}}>
                                    <img src={captchaUrl}/>
                                    <TextFieldControlled
                                        type='text'
                                        name='captcha'
                                        label='Captcha'
                                        size='small'
                                    />
                                </Stack>}
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
            </Stack>
        </Stack>
    );
};

export default React.memo(LoginForm);