import NoteList from '../components/Notes/index';
import SearchNote from '../components/Notes/Search';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import './Notes.scss';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Notes() {
    return (
        <Container maxWidth="md">
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Item>
                        <SearchNote />
                    </Item>
                </Grid>

                <Grid item xs={4}>
                    <Item>title</Item>
                </Grid>

                <NoteList />
            </Grid>
        </Container>
    )
}