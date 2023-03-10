import React from 'react';
import Box from '@mui/material/Box';
import MuiModal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 3,
};

type PropsType = {
    openModal: boolean
    closeModal: () => void
    fnToAccept: () => void
}

const Modal: React.FC<PropsType> = ({openModal, closeModal, fnToAccept}) => {
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
                    <Typography id="keep-mounted-modal-description" sx={{mt: 2}}>
                        To log out of your account, click on the button.
                    </Typography>
                    <Box textAlign='right' mt={5}>
                        <Button onClick={fnToAccept} sx={{mr: 1}} size='small' variant='contained'>Accept</Button>
                        <Button size='small' variant='contained' onClick={closeModal}>Cancel</Button>
                    </Box>
                </Box>
            </MuiModal>
        </div>
    );
}

export default React.memo(Modal)