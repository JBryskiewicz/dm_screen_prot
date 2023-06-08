import {activeText, inactiveText, secondaryActiveText} from "../../../utils/customColors";
import {Button, Card, CardActions, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Session} from "../../../types/types";
import {latestSessionCardStyles} from "../mainScreenStyles";

type Props = {
    session: Session
}

function SessionQuickAccessCard({session}: Props) {

    const demoNotes = session.notes
        .split('')
        .slice(0, 125)
        .join('');

    const demoDate = session.plannedDate
        .toString()
        .slice(0, 19)
        .split('T')
        .at(0);

    return (
        <Card sx={latestSessionCardStyles}>
            <CardContent>
                <Typography sx={{fontSize: 16, color: activeText}} color="text.secondary" gutterBottom>
                    {session.name}
                </Typography>
                <Typography sx={{fontSize: 14, color: secondaryActiveText}} color="text.secondary" gutterBottom>
                    Planned: {demoDate}
                </Typography>
                <Typography variant="body2" sx={{maxHeight: '80px',color: inactiveText, marginTop: '12px'}}>
                    {demoNotes}...
                </Typography>
            </CardContent>
            <CardActions sx={{display: 'flex', justifyContent: 'space-around'}}>
                <Button size="small">Details</Button>
                <Button size="small">Edit</Button>
            </CardActions>
        </Card>
    );
}

export default SessionQuickAccessCard;