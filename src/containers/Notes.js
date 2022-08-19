import { useState } from 'react'
import NoteList from '../components/Notes/index'
import Header from '../components/layouts/Header'
import AddNote from '../components/Notes/Add'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import './Notes.scss'

export default function Notes() {
    const [showModal, setShowModal] = useState(false)

    return (
        <Container maxWidth="md">
            <Header />

            <Button color="primary" onClick={() => setShowModal(true)}>
                <AddIcon /> Add Note
            </Button>

            <NoteList />

            <AddNote {...{ showModal, setShowModal }} />
        </Container>
    )
}