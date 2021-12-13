import NoteItem from "./Item";
import Grid from '@mui/material/Grid';

export default function NoteList() {
    return (
        <>
            <Grid xs={4}>
                <NoteItem />
            </Grid>
            <Grid xs={4}>
                <NoteItem />
            </Grid>
        </>
    )
}