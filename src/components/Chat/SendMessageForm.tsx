import React from 'react';
import { Form } from 'react-final-form';
import { Paper, Stack } from '@mui/material';
import TextFieldControlled from '../Fields/TextFieldControlled/TextFieldControlled';
import LoadingButton from '@mui/lab/LoadingButton';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

export type FormValues = {
  message: string;
};

type PropsType = {
  onSubmit: (values: FormValues) => void;
};

const SendMessageForm: React.FC<PropsType> = ({ onSubmit }) => {
  return (
    <Stack mt={{ xs: 2, sm: 5 }}>
      <Form<FormValues>
        onSubmit={(values, form) => {
          onSubmit(values);

          form.reset();
        }}
        render={({ handleSubmit, values, submitting, form }) => {
          return (
            <Paper
              elevation={0}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                p: 1,
                borderRadius: 4,
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: 'background.paper',
              }}
            >
              <form
                style={{ display: 'flex', alignItems: 'center', gap: 5, width: '100%' }}
                onSubmit={handleSubmit}
              >
                <TextFieldControlled
                  fullWidth
                  multiline
                  placeholder="Введите сообщение..."
                  name="message"
                  type="text"
                  sx={{
                    px: 1,

                    '& .MuiInputBase-root': {
                      fontSize: 15,
                    },

                    '& textarea': {
                      lineHeight: 1.6,
                    },
                  }}
                />
                <Stack>
                  <LoadingButton
                    disabled={!values.message?.trim() || submitting}
                    loading={submitting}
                    type="submit"
                    color="primary"
                    sx={{
                      minWidth: 44,
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      boxShadow: 2,
                    }}
                  >
                    <SendRoundedIcon />
                  </LoadingButton>
                </Stack>
              </form>
            </Paper>
          );
        }}
      />
    </Stack>
  );
};

export default React.memo(SendMessageForm);
