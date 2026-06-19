import React from 'react';
import { Form } from 'react-final-form';
import { Stack } from '@mui/material';
import TextFieldControlled from '../Fields/TextFieldControlled/TextFieldControlled';
import LoadingButton from '@mui/lab/LoadingButton';
import sendMessageImg from '../../images/send.png';

type PropsType = {
  onSubmit: (sendMessage: string) => void;
};

const SendMessageForm: React.FC<PropsType> = ({ onSubmit }) => {
  return (
    <Stack mt={5}>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting }) => (
          <form style={{ display: 'flex', alignItems: 'center', gap: 5 }} onSubmit={handleSubmit}>
            <TextFieldControlled
              name="message"
              type="text"
              size="small"
              sx={{ width: '100%', borderRadius: '100px' }}
            />
            <Stack>
              <LoadingButton disabled={submitting} loading={submitting} type="submit">
                <img src={sendMessageImg} alt="send" style={{ width: '30px', height: '30px' }} />
              </LoadingButton>
            </Stack>
          </form>
        )}
      />
    </Stack>
  );
};

export default React.memo(SendMessageForm);
