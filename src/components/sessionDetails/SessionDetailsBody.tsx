import {newSessionBodyBox, newSessionDatePickerBox, newSessionUpperBox} from "../newSession/newSessionStyles";
import Box from "@mui/material/Box";
import {secondaryActiveText} from "../../utils/customColors";
import Typography from "@mui/material/Typography";
import {Chip} from "@mui/material";
import {Session} from "../../types/types";
import {useEffect, useState} from "react";
import axios from "axios";
import {API_URL} from "../../utils/constants";
import {useParams} from "react-router-dom";
import {applyDate} from "../../utils/supportFunctions";
import {
    sessionDetailsCreationDateLabel,
    sessionDetailsNameLabel,
    sessionDetailsNotesBox,
    sessionDetailsPlannedDateLabel
} from "./sessionDetailsStyles";

type RouteParams = {
    id: string;
}

const initialSession: Session = {
    id: 0,
    name: '',
    notes: '',
    creationDate: new Date(),
    plannedDate: new Date()
}

function SessionDetailsBody() {
    const { id } = useParams<RouteParams>()
    const [session, setSession] = useState<Session>(initialSession);

    useEffect(() => {
        getSession().then(data => {
            setSession(data);
        });
    }, [])

    async function getSession(): Promise<Session> {
        const response = await axios.get<Session>(`${API_URL}/${id}`);
        return response.data;
    }

    return (
        <Box sx={newSessionBodyBox}>
            <Box sx={newSessionUpperBox}>
                <Chip
                    label={session.name}
                    sx={sessionDetailsNameLabel}/>
                <Chip
                    label={`Created: ${applyDate(session.creationDate)}`}
                    sx={sessionDetailsCreationDateLabel}
                />
            </Box>
            <Box sx={sessionDetailsNotesBox}>
                <div dangerouslySetInnerHTML={{__html: session.notes}} />
            </Box>
            <Box sx={newSessionDatePickerBox}>
                <Typography sx={{color: secondaryActiveText}}>
                    Your session is planned for:
                </Typography>
                {/*There is no instance that plannedDate will be null*/}
                <Chip
                    label={`Planned: ${applyDate(session.plannedDate!)}`}
                    sx={sessionDetailsPlannedDateLabel}
                />
            </Box>
        </Box>
    );
}

export default SessionDetailsBody;