import React from 'react';
import Box from '@mui/material/Box';
import MuiModal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: 'calc(100% - 32px)', sm: 400 },
  maxWidth: 400,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: { xs: 2, sm: 3 },
  boxSizing: 'border-box' as const,
};

type PropsType = {
  openModal: boolean;
  closeModal: () => void;
  fnToAccept?: () => void;
};

const Modal: React.FC<PropsType> = ({ openModal, closeModal, fnToAccept }) => {
  return (
    <div>
      <MuiModal
        keepMounted
        open={openModal}
        onClose={closeModal}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Are you sure you want to exit?
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            To log out of your account, click on the button.
          </Typography>
          <Box textAlign="right" mt={5} display="flex" justifyContent="flex-end" flexWrap="wrap" gap={1}>
            <Button onClick={fnToAccept} size="small" variant="contained">
              Accept
            </Button>
            <Button size="small" variant="contained" onClick={closeModal}>
              Cancel
            </Button>
          </Box>
        </Box>
      </MuiModal>
    </div>
  );
};

export default React.memo(Modal);
