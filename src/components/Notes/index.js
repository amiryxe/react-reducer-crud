import { useContext } from "react";
import MainContext from "../../context/mainContext";
import NoteItem from "./Item";
import Grid from '@mui/material/Grid';

export default function NoteList() {
    const { noteList } = useContext(MainContext);

    return (
        <Grid container className="notes" spacing={2}>
            {
                noteList.map(item => (
                    <Grid item xs={4} key={item.id}>
                        <NoteItem data={item} />
                    </Grid>
                ))
            }
        </Grid>
    )
}