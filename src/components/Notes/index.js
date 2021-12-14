import NoteItem from "./Item";
import Grid from '@mui/material/Grid';

export default function NoteList() {
    return (
        <Grid container className="notes">
            <Grid item xs={4}>
                <NoteItem />
            </Grid>
            <Grid item xs={4}>
                <NoteItem />
            </Grid>
        </Grid>
    )
}