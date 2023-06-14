import {Button, Card, CardActions, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Session} from "../../../types/types";
import {
    latestSessionActions,
    latestSessionCardStyles,
    latestSessionDate,
    latestSessionDemoNotes,
    latestSessionName
} from "../../../sx/mainScreenStyles";
import {applyDate, applyDemoNotes} from "../../../utils/supportFunctions";
import parse from 'html-react-parser';
import {Link} from "react-router-dom";

type Props = {
    session: Session
}

function SessionQuickAccessCard({session}: Props) {

    const parsedNotes = parse(applyDemoNotes(session.notes, 80));

    return (
        <Card sx={latestSessionCardStyles}>
            <CardContent>
                <Typography
                    sx={latestSessionName}
                    gutterBottom
                >
                    {session.name}
                </Typography>
                <Typography
                    sx={latestSessionDate}
                    gutterBottom
                >
                    {session.plannedDate !== null
                        ? `Planned: ${applyDate(session.plannedDate)}`
                        : `Session is not planned`}
                </Typography>
                <div style={latestSessionDemoNotes}>
                    { parsedNotes }
                </div>
            </CardContent>
            <CardActions sx={latestSessionActions}>
                <Link to={`/session-details/${session.id}`}>
                    <Button size="small">
                        Details
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
}

export default SessionQuickAccessCard;