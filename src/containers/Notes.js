import { useState } from 'react'

import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'

import NoteList from '../components/Notes/index'
import Header from '../components/layouts/Header'
import AddEdit from '../components/Notes/AddEdit'

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

            <AddEdit {...{ showModal, setShowModal }} />
        </Container>
    )
}