import {activeText, customTetraryColor, inactiveText} from "../../utils/customStyles";
import {Button, Card, CardActions, CardContent, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Session} from "../../types/types";
import Box from "@mui/material/Box";
import axios from "axios";
import {API_URL} from "../../utils/constants";
import {Dispatch, SetStateAction} from "react";

type Props = {
    session: Session
    setCheck: Dispatch<SetStateAction<number>>
}

function MySessionsSessionCard({session, setCheck}: Props) {

    const demoNotes = session.notes
        .split('')
        .slice(0, 175)
        .join('');

    function applyDate(date: Date) {
        return date
            .toString()
            .slice(0, 19)
            .split('T')
            .at(0);
    }

    async function handleDeleteButton () {
        await removeSession(session.id);
    }

    async function removeSession(id: number) {
        await axios.delete(`${API_URL}/${id}`);
        await setCheck(prevState => prevState === 0 ? 1 : 0);
    }

    return (
        <Grid item xs={4}>
            <Card sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                maxWidth: 400,
                height: '240px',
                backgroundColor: customTetraryColor,
                marginBottom: '20px'
            }}>
                <CardContent>
                    <Typography sx={{fontSize: 18, color: activeText}} color="text.secondary" gutterBottom>
                        {session.name}
                    </Typography>
                    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Typography sx={{fontSize: 14, color: '#b1b1b1'}} color="text.secondary" gutterBottom>
                            Planned: {applyDate(session.plannedDate)}
                        </Typography>
                        <Typography sx={{fontSize: 14, color: '#b1b1b1'}} color="text.secondary" gutterBottom>
                            Created: {applyDate(session.creationDate)}
                        </Typography>
                    </Box>
                    <Typography variant="body2" sx={{maxHeight: '80px', color: inactiveText, marginTop: '12px'}}>
                        {demoNotes}...
                    </Typography>
                </CardContent>
                <CardActions sx={{display: 'flex', justifyContent: 'space-around'}}>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                    <Button onClick={handleDeleteButton} size="small">Remove</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default MySessionsSessionCard;