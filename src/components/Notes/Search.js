import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

export default function SearchNote() {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                test
            </CardContent>

            <CardActions>
                <Button size="small">Search</Button>
            </CardActions>
        </Card>
    )
}