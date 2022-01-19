import { useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

export default function AddNote() {
    const [showModal, setShowModal] = useState(false);
    const [date, setDate] = useState(new Date().toLocaleDateString());

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

        const payload = {
            title: values.title,
            subtitle: values.subtitle,
            summary: values.summary,
            date: date,
        };

        console.log(payload)
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
                    <form action="" onSubmit={submitAddNoteHandler} style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr',
                        gridGap: '1.5rem',
                    }}>
                        <TextField
                            label="Title"
                            variant="outlined"
                            value={values.title}
                            onChange={(e) => setValues({ ...values, title: e.target.value })}
                        />

                        <TextField
                            label="Subtitle"
                            variant="outlined"
                            value={values.subject}
                            onChange={(e) => setValues({ ...values, subtitle: e.target.value })}
                        />

                        <TextField
                            label="Summary"
                            multiline
                            maxRows={4}
                            value={values.summary}
                            onChange={(e) => setValues({ ...values, summary: e.target.value })}
                        />

                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DateTimePicker
                                label="Date and time"
                                value={date}
                                onChange={(newValue) => {
                                    setDate(newValue.toLocaleDateString());
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>

                        <Button variant="contained" color="primary" type="submit">
                            Submit
                        </Button>
                    </form>
                </Box>
            </Modal>
        </>
    )
}