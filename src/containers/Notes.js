import NoteList from '../components/Notes/index';
import SearchNote from '../components/Notes/Search';
import Title from '../components/Notes/Title';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import './Notes.scss';

export default function Notes() {
    return (
        <Container maxWidth="md">
            <Grid container>
                <Grid item xs={4}>
                    <Title />
                </Grid>

                <Grid item xs={8}>
                    <SearchNote />
                </Grid>

                <NoteList />
            </Grid>
        </Container>
    )
}