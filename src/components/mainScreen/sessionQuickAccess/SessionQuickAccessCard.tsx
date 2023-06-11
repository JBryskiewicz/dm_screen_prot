import {activeText, inactiveText, secondaryActiveText} from "../../../utils/customColors";
import {Button, Card, CardActions, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Session} from "../../../types/types";
import {latestSessionCardStyles} from "../../../sx/mainScreenStyles";
import {applyDate, applyDemoNotes} from "../../../utils/supportFunctions";
import parse from 'html-react-parser';
import {Link} from "react-router-dom";

type Props = {
    session: Session
}

function SessionQuickAccessCard({session}: Props) {

    const parsedNotes = parse(applyDemoNotes(session.notes, 100));

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
                <Typography
                    variant="body2"
                    sx={{maxHeight: '80px', color: inactiveText, overflow: 'hidden'}}
                >
                    <div>{ parsedNotes }</div>
                </Typography>
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