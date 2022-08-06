import { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import NoteDetail from './Detail'
import RemoveDialog from './RemoveDialog'

export default function NoteItem({ data }) {
    const [showModal, setShowModal] = useState(false)
    const [showDeleteAlert, setShowDeleteAlert] = useState(false)
    const { id, title, date, description, subtitle } = data

    return (
        <Card sx={{ minWidth: 275 }}>
            <RemoveDialog {...{ id, title, showDeleteAlert, setShowDeleteAlert }} />

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
                <Button size="small" onClick={() => setShowModal(true)}>Edit</Button>
                <Button size="small" color="error" onClick={() => setShowDeleteAlert(true)}>
                    Delete
                </Button>
                <NoteDetail status={showModal} setStatus={setShowModal} />
            </CardActions>
        </Card>
    )
}