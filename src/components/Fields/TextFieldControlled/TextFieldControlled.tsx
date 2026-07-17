import React from 'react';
import {
  FilledInputProps,
  InputProps,
  OutlinedInputProps,
  SxProps,
  TextField,
  Theme,
} from '@mui/material';
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
  onKeyDown?: (event: React.KeyboardEvent) => void;
  InputProps?:
    | Partial<InputProps>
    | Partial<FilledInputProps>
    | Partial<OutlinedInputProps>
    | undefined;
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
  onKeyDown,
  InputProps,
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
            InputProps={InputProps}
            hidden={hidden}
            defaultValue={defaultValue}
            rows={rows}
            fullWidth={fullWidth}
            onKeyDown={(event) => {
              onKeyDown?.(event);
            }}
          />
        );
      }}
    </Field>
  );
};

export default TextFieldControlled;
