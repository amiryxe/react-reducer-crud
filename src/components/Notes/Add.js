import { useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

export default function AddNote() {
    const [showModal, setShowModal] = useState(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: 2,
        p: 4,
    };

    const handleClose = () => setShowModal(false);

    return (
        <>
            <Fab color="primary" aria-label="add" onClick={() => setShowModal(true)}>
                <AddIcon />
            </Fab>

            <Modal
                open={showModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    test
                </Box>
            </Modal>
        </>
    )
}