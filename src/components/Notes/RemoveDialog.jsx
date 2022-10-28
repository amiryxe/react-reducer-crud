import { useContext } from 'react'
import MainContext from '../../context/mainContext'

import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button'

export default function RemoveDialog({ id, title, showDeleteAlert, setShowDeleteAlert }) {
    const { dispatch } = useContext(MainContext)

    const handleDeleteNote = () => {
        dispatch({ type: 'DELETE_NOTE', payload: id })
        setShowDeleteAlert(false)
    }

    return (
        <Dialog
            open={showDeleteAlert}
            onClose={() => setShowDeleteAlert(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Are you sure to delete note?
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    You are removing <b>{title}</b>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setShowDeleteAlert(false)}>Cancel</Button>
                <Button color="error" onClick={handleDeleteNote} autoFocus>
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    )
}