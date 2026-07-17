import React from 'react';
import { Form } from 'react-final-form';
import { Box, Stack } from '@mui/material';
import TextFieldControlled from '../Fields/TextFieldControlled/TextFieldControlled';
import LoadingButton from '@mui/lab/LoadingButton';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { sx } from './Messages.style';

export type FormValues = {
  message: string;
};

type PropsType = {
  onSubmit: (values: FormValues) => void;
};

const SendMessageForm: React.FC<PropsType> = ({ onSubmit }) => {
  return (
    <Box sx={sx.composer}>
      <Form<FormValues>
        onSubmit={(values, form) => {
          onSubmit(values);
          form.restart();
        }}
        render={({ handleSubmit, values, submitting }) => {
          const canSend = Boolean(values.message?.trim()) && !submitting;

          return (
            <Box component="form" onSubmit={handleSubmit} sx={sx.composerPaper}>
              <TextFieldControlled
                fullWidth
                multiline
                maxRows={4}
                placeholder="Write a message..."
                name="message"
                type="text"
                onKeyDown={(event) => {
                  if (event.key === 'Enter' && !event.shiftKey) {
                    event.preventDefault();
                    if (canSend) {
                      handleSubmit();
                    }
                  }
                }}
                sx={{
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                  },
                  '& .MuiInputBase-root': {
                    fontSize: 15,
                    py: 0.5,
                    alignItems: 'center',
                  },
                  '& textarea': {
                    lineHeight: 1.55,
                  },
                }}
              />
              <Stack>
                <LoadingButton
                  disabled={!canSend}
                  loading={submitting}
                  type="submit"
                  variant="contained"
                  aria-label="Send message"
                  sx={{
                    minWidth: 44,
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    boxShadow: canSend ? '0 8px 18px rgba(88, 80, 236, 0.35)' : 'none',
                    bgcolor: canSend ? 'primary.main' : 'action.disabledBackground',
                    color: '#fff',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                      boxShadow: '0 10px 22px rgba(88, 80, 236, 0.4)',
                    },
                  }}
                >
                  <SendRoundedIcon fontSize="small" />
                </LoadingButton>
              </Stack>
            </Box>
          );
        }}
      />
    </Box>
  );
};

export default React.memo(SendMessageForm);
