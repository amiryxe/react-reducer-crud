import NoteList from '../components/Notes/index';
import SearchNote from '../components/Notes/Search';
import Button from '@mui/material/Button';

export default function Notes() {
    return (
        <>
            <SearchNote />
            <NoteList />
            <Button variant="contained">Hello World</Button>
        </>
    )
}