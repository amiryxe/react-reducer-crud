import NoteList from '../components/Notes/index';
import SearchNote from '../components/Notes/Search';

export default function Notes() {
    return (
        <>
            <SearchNote />
            <NoteList />
        </>
    )
}