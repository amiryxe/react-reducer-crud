import { useContext } from "react"
import MainContext from "../../context/mainContext"

import Grid from '@mui/material/Grid'

import NoteItem from "./Item"

export default function NoteList() {
    const { noteList } = useContext(MainContext)

    return (
        <Grid
            container
            className="notes"
            style={{ marginTop: '3rem' }}
            spacing={2}>
            {
                noteList.length > 0 ?
                    noteList.map(item => (
                        <Grid item xs={4} key={item.id}>
                            <NoteItem data={item} />
                        </Grid>
                    ))
                    :
                    <div>
                        <h3>You have no notes yet</h3>
                        <p>Click the blue add button to create a new note</p>
                    </div>
            }
        </Grid>
    )
}