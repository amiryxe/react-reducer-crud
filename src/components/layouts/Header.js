import SearchNote from '../Notes/Search'
import Title from '../Notes/Title'
import Grid from '@mui/material/Grid'

export default function Header() {
    return (
        <Grid container style={{
            alignItems: 'center',
        }}>
            <Grid item xs={4}>
                <Title />
            </Grid>

            <Grid item xs={8}>
                <SearchNote />
            </Grid>
        </Grid>
    )
}