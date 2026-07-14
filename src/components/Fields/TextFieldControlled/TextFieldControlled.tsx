import React, { ChangeEventHandler } from 'react';
import { SxProps, TextField, Theme } from '@mui/material';
import { Field } from 'react-final-form';
import { FieldValidator } from 'final-form';

type PropsType = {
  label?: string;
  size?: 'small' | 'medium';
  name: string;
  sx?: SxProps<Theme>;
  type: string;
  validate?: FieldValidator<any>;
  multiline?: boolean;
  minRows?: number;
  maxRows?: number;
  placeholder?: string;
  fullWidth?: boolean;
  hidden?: boolean;
  accept?: string;
  defaultValue?: string;
  rows?: number;
};

const TextFieldControlled: React.FC<PropsType> = ({
  label,
  size,
  name,
  sx,
  minRows,
  maxRows,
  multiline,
  validate,
  type,
  placeholder,
  hidden,
  rows,
  defaultValue,
  fullWidth,
}) => {
  return (
    <Field name={name} type={type} validate={validate}>
      {({ input, meta }) => {
        const isError = Boolean(meta.touched && (meta.error || meta.submitError));
        return (
          <TextField
            {...input}
            type={type}
            error={isError}
            label={label}
            size={size}
            helperText={isError ? meta.error || meta.submitError : undefined}
            sx={sx}
            multiline={multiline}
            minRows={minRows}
            maxRows={maxRows}
            placeholder={placeholder}
            hidden={hidden}
            defaultValue={defaultValue}
            rows={rows}
            fullWidth={fullWidth}
          />
        );
      }}
    </Field>
  );
};

export default TextFieldControlled;
