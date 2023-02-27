import React from 'react';
import {SxProps, TextField, Theme} from "@mui/material";
import {Field} from "react-final-form";
import {FieldValidator} from "final-form";

type PropsType = {
    label?: string
    size?: "small" | "medium"
    name: string
    sx?: SxProps<Theme>
    type: string
    validate?: FieldValidator<any>
}

const TextFieldControlled: React.FC<PropsType> = ({label, size, name, sx, validate, type}) => {
    return (
        <Field name={name}
               type='text'
               validate={validate}
        >
            {({input, meta}) => {
                return (
                    <TextField
                        {...input}
                        type={type}
                        error={meta.error}
                        label={label}
                        size={size}
                        sx={sx}
                    />

                )
            }}
        </Field>
    );
};

export default TextFieldControlled;