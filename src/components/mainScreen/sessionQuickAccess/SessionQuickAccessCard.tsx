import {activeText, secondaryActiveText} from "../../../sx/customColors";
import {Button, Card, CardActions, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Session} from "../../../types/types";
import {latestSessionCardStyles, latestSessionDemoNotes} from "../../../sx/mainScreenStyles";
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
                    sx={{fontSize: 16, color: activeText}}
                    gutterBottom
                >
                    {session.name}
                </Typography>
                <Typography
                    sx={{fontSize: 14, color: secondaryActiveText}}
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
            <CardActions sx={{display: 'flex', justifyContent: 'space-around'}}>
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