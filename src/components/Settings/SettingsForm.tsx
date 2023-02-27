import React from 'react';
import {Form} from 'react-final-form';
import TextFieldControlled from "../Fields/TextFieldControlled/TextFieldControlled";
import {Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import CheckBoxControlled from '../Fields/CheckBoxControlled/CheckBoxControlled';

export type SettingsFormValues = {
    fullName: string
    aboutMe: string
    lookingForAJobDescription: string
    lookingForAJob: boolean
    facebook: string
    github: string
    instagram: string
    mainLink: string
    vk: string
    youtube: string
    website: string
    twitter: string
}

type PropsType = {
    handleSubmit: (data: SettingsFormValues) => void
    initialValues: SettingsFormValues | null
}

const SettingsForm: React.FC<PropsType> = ({handleSubmit, initialValues}) => {
    const required =  (value: any) => (value ? undefined : 'Required')
    return (
        <div>
            <Form
                onSubmit={handleSubmit}
                initialValues={initialValues}
                render={({handleSubmit, submitting}) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <TextFieldControlled
                                type='text'
                                name='fullName'
                                label='Full Name'
                                size='small'
                                validate={required}
                            />
                            <Typography sx={{mt: 2, mb: 2}}>About me</Typography>
                            <Stack>
                                <TextFieldControlled
                                    type='text'
                                    name='aboutMe'
                                    label='About me'
                                    size='medium'
                                    sx={{width: '500px'}}
                                    validate={required}
                                />
                                <CheckBoxControlled
                                    name='lookingForAJob'
                                    type='checkbox'
                                    label="Looking a job"
                                    sx={{mt: 2, mb: 2}}
                                />
                                <TextFieldControlled
                                    type='text'
                                    name='lookingForAJobDescription'
                                    label='Looking job description'
                                    size='medium'
                                    sx={{mb: 2}}
                                    validate={required}
                                />
                            </Stack>
                            <Typography sx={{mb: 2}}>Contacts</Typography>
                            <Stack spacing={2}>
                                <TextFieldControlled
                                    type='text'
                                    name='facebook'
                                    label='Facebook'
                                    size='small'
                                />
                                <TextFieldControlled
                                    type='text'
                                    name='github'
                                    label='Github'
                                    size='small'
                                />
                                <TextFieldControlled
                                    type='text'
                                    name='instagram'
                                    label='Instagram'
                                    size='small'
                                />
                                <TextFieldControlled
                                    type='text'
                                    name='mainLink'
                                    label='MainLink'
                                    size='small'
                                />
                                <TextFieldControlled
                                    type='text'
                                    name='twitter'
                                    label='Twitter'
                                    size='small'
                                />
                                <TextFieldControlled
                                    type='text'
                                    name='vk'
                                    label='Vk'
                                    size='small'
                                />
                                <TextFieldControlled
                                    type='text'
                                    name='youtube'
                                    label='YouTube'
                                    size='small'
                                />
                                <LoadingButton
                                    disabled={submitting}
                                    loading={submitting}
                                    variant="contained"
                                    size="large"
                                    type="submit"
                                    fullWidth
                                >
                                    Save
                                </LoadingButton>
                            </Stack>
                        </form>
                    )
                }}
            />
        </div>
    );
};

export default SettingsForm;