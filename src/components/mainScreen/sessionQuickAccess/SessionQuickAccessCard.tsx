import {activeText, inactiveText, secondaryActiveText} from "../../../utils/customColors";
import {Button, Card, CardActions, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Session} from "../../../types/types";
import {latestSessionCardStyles} from "../mainScreenStyles";
import {applyDate, applyDemoNotes} from "../../../utils/supportFunctions";

type Props = {
    session: Session
}

function SessionQuickAccessCard({session}: Props) {
    return (
        <Card sx={latestSessionCardStyles}>
            <CardContent>
                <Typography sx={{fontSize: 16, color: activeText}} color="text.secondary" gutterBottom>
                    {session.name}
                </Typography>
                <Typography sx={{fontSize: 14, color: secondaryActiveText}} color="text.secondary" gutterBottom>
                    {session.plannedDate !== null ? `Planned: ${applyDate(session.plannedDate)}` : `Session is not planned`}
                </Typography>
                <Typography variant="body2" sx={{maxHeight: '80px', color: inactiveText, marginTop: '12px'}}>
                    <div dangerouslySetInnerHTML={{__html: applyDemoNotes(session.notes, 125)}}></div>
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