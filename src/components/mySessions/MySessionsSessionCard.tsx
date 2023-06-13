import {Button, Card, CardActions, CardContent, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Session} from "../../types/types";
import Box from "@mui/material/Box";
import axios from "axios";
import {Dispatch, SetStateAction} from "react";
import {MySessionsCardItem, MySessionsDateStyles, MySessionsNameStyles, MySessionsNotesDemo} from "../../sx/mySessionsStyles";
import {applyDate, applyDemoNotes} from "../../utils/supportFunctions";
import parse from "html-react-parser";
import {API_URL} from "../../utils/apiCommunication";
import {Link} from "react-router-dom";

type Props = {
    session: Session
    setCheck: Dispatch<SetStateAction<number>>
}

function MySessionsSessionCard({session, setCheck}: Props) {

    async function handleDeleteButton () {
        console.log("HANDLE DELETE");
        await removeSession(session.id);
    }

    async function removeSession(id: number) {
        console.log("REMOVE SESSION");
        await axios.delete(`${API_URL}/${id}`);
        await new Promise(resolve => {
            console.log("CALLING SETCHECK");
            setCheck(prevState => prevState === 0 ? 1 : 0);
            setTimeout(() => {
                resolve(null);
            }, 1000);
        });
    }

    const parsedNotes = parse(applyDemoNotes(session.notes, 80));

    return (
        <Grid item xs={4}>
            <Card sx={MySessionsCardItem}>
                <CardContent>
                    <Typography sx={MySessionsNameStyles} color="text.secondary" gutterBottom>
                        {session.name}
                    </Typography>
                    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Typography sx={MySessionsDateStyles} color="text.secondary" gutterBottom>
                            {session.plannedDate !== null
                                ? `Planned: ${applyDate(session.plannedDate)}`
                                : 'Session is not planned'
                            }
                        </Typography>
                        <Typography sx={MySessionsDateStyles} color="text.secondary" gutterBottom>
                            Created: {applyDate(session.creationDate)}
                        </Typography>
                    </Box>
                    <div style={MySessionsNotesDemo}>
                        { parsedNotes }
                    </div>
                </CardContent>
                <CardActions sx={{display: 'flex', justifyContent: 'space-around'}}>
                    <Link to={`/session-details/${session.id}`}>
                        <Button size="small">View</Button>
                    </Link>
                    <Button onClick={handleDeleteButton} size="small">Remove</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default MySessionsSessionCard;