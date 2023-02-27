import React from 'react';
import {Checkbox, FormControlLabel, SxProps, TextField, Theme} from "@mui/material";
import {Field} from "react-final-form";

type PropsType = {
    label?: string
    size?: "small" | "medium"
    name: string
    sx?: SxProps<Theme>
    type: string
}

const CheckBoxControlled: React.FC<PropsType> = ({name, sx, size, label, type}) => {
    return (
        <Field name={name}
               type='checkbox'>
            {({input}) => (
                <FormControlLabel control={<Checkbox defaultChecked {...input} size={size} sx={sx}/>} label={label}/>
            )}
        </Field>
    );
};

export default CheckBoxControlled;