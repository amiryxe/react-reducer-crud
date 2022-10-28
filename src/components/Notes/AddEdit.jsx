import { useState, useContext, useEffect } from 'react'
import MainContext from '../../context/mainContext'

import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

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
}

export default function AddNote({ showModal, setShowModal, editData }) {
    const [date, setDate] = useState(new Date().toLocaleDateString())

    const { dispatch } = useContext(MainContext)

    const [values, setValues] = useState({
        title: '',
        subtitle: '',
        summary: '',
        date: '',
    })

    useEffect(() => {
        if (editData) {
            setValues(editData)
        }
    }, [editData])

    const handleClose = () => setShowModal(false)

    const submitAddNoteHandler = e => {
        e.preventDefault()

        const payload = {
            id: Math.random(),
            title: values.title,
            subtitle: values.subtitle,
            description: values.description,
            date: date,
        }

        dispatch({ type: 'ADD_NOTE', payload })

        // reset form
        setValues({
            title: '',
            subtitle: '',
            description: '',
            date: '',
        })

        setShowModal(false)
    }

    return (
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
                        value={values.subtitle}
                        onChange={(e) => setValues({ ...values, subtitle: e.target.value })}
                    />

                    <TextField
                        label="Summary"
                        multiline
                        maxRows={4}
                        value={values.description}
                        onChange={(e) => setValues({ ...values, description: e.target.value })}
                    />

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Basic example"
                            value={date}
                            onChange={(newValue) => {
                                setDate(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>

                    <Button variant="contained" color="primary" type="submit">
                        Add Note
                    </Button>

                    <Button onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                </form>
            </Box>
        </Modal>
    )
}