import Grid from '@mui/material/Grid'

import SearchNote from '../Notes/Search'
import Title from '../Notes/Title'

export default function Header() {
    return (
        <Grid container style={{
            alignItems: 'center',
        }}>
            <Grid item xs={5}>
                <Title />
            </Grid>

            <Grid item xs={7}>
                <SearchNote />
            </Grid>
        </Grid>
    )
}