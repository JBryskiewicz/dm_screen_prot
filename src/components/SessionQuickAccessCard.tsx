import {activeText, customTetraryColor, inactiveText} from "../utils/customStyles";
import {Button, Card, CardActions, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Session} from "../types/types";

type Props = {
    session: Session
}

function SessionQuickAccessCard({session}: Props) {

    const demoNotes = session.notes
        .split(' ')
        .slice(0, 20)
        .join(' ');

    const demoDate = session.plannedDate.toString()
        .split(' ')
        .at(0);

    return (
        <Card sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            maxWidth: 290,
            width: '18vw',
            height: '220px',
            backgroundColor: customTetraryColor,
            marginBottom: '20px'
        }}>
            <CardContent>
                <Typography sx={{fontSize: 16, color: activeText}} color="text.secondary" gutterBottom>
                    {session.name}
                </Typography>
                <Typography sx={{fontSize: 14, color: activeText}} color="text.secondary" gutterBottom>
                    Planned: {demoDate}
                </Typography>
                <Typography variant="body2" sx={{color: inactiveText, marginTop: '12px'}}>
                    {demoNotes}...
                </Typography>
            </CardContent>
            <CardActions sx={{display: 'flex', justifyContent: 'space-around'}}>
                <Button size="small">Edit</Button>
                <Button size="small">Remove</Button>
            </CardActions>
        </Card>
    );
}

export default SessionQuickAccessCard;