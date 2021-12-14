import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function NoteItem() {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    note date is here
                </Typography>
                <Typography variant="h5" component="div">
                    Note title here
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    subtitle or category here
                </Typography>
                <Typography variant="body2">
                    summary of note here
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">View More</Button>
            </CardActions>
        </Card>
    )
}