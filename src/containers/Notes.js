import { useState } from 'react'
import NoteList from '../components/Notes/index'
import SearchNote from '../components/Notes/Search'
import Title from '../components/Notes/Title'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import AddNote from '../components/Notes/Add'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import './Notes.scss'

export default function Notes() {
    const [showModal, setShowModal] = useState(false)

    return (
        <Container maxWidth="md">
            <Grid container style={{
                alignItems: 'center',
            }}>
                <Grid item xs={4}>
                    <Title />
                </Grid>

                <Grid item xs={8}>
                    <SearchNote />
                </Grid>
            </Grid>

            <Button color="primary" onClick={() => setShowModal(true)}>
                <AddIcon /> Add Note
            </Button>

            <NoteList />

            <AddNote {...{ showModal, setShowModal }} />
        </Container>
    )
}