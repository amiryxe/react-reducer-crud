import { useState, useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import NoteDetail from './Detail';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MainContext from '../../context/mainContext';

export default function NoteItem({ data }) {
    const [showModal, setShowModal] = useState(false);
    const [showDeleteAlert, setShowDeleteAlert] = useState(false)
    const { id, title, date, description, subtitle } = data;

    const { dispatch } = useContext(MainContext)

    const handleDeleteNote = () => {
        console.log(id)
        dispatch({ type: 'DELETE_NOTE', payload: id })
        setShowDeleteAlert(false)
    }

    return (
        <Card sx={{ minWidth: 275 }}>
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

            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {date}
                </Typography>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {subtitle}
                </Typography>
                <Typography variant="body2">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => setShowModal(true)}>More</Button>
                <Button size="small" color="error" onClick={() => setShowDeleteAlert(true)}>
                    Delete
                </Button>
                <NoteDetail status={showModal} setStatus={setShowModal} />
            </CardActions>
        </Card>
    )
}