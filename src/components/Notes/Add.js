import { useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function AddNote() {
    const [showModal, setShowModal] = useState(false);
    const [values, setValues] = useState({
        title: '',
        subtitle: '',
        summary: '',
        date: '',
    });

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

    const submitAddNoteHandler = e => {
        e.preventDefault();

        console.log('submit')
    }

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
                    <form action="" onSubmit={submitAddNoteHandler}>
                        <TextField
                            style={{ width: '100%' }}
                            id="outlined-basic"
                            label="Title"
                            variant="outlined"
                            value={values.title}
                            onChange={(e) => setValues({ ...values, title: e.target.value })}
                        />

                        <TextField
                            style={{ width: '100%' }}
                            id="outlined-multiline-flexible"
                            label="Summary"
                            multiline
                            maxRows={4}
                            value={values.summary}
                            onChange={(e) => setValues({ ...values, summary: e.target.value })}
                        />

                        <Button variant="contained" color="primary" type="submit">
                            Submit
                        </Button>
                    </form>
                </Box>
            </Modal>
        </>
    )
}