import {newSessionBodyBox, newSessionUpperBox} from "../newSession/newSessionStyles";
import Box from "@mui/material/Box";
import {Session} from "../../types/types";
import {useEffect, useState} from "react";
import axios from "axios";
import {API_URL} from "../../utils/constants";
import {useParams} from "react-router-dom";
import {
    sessionDetailsCreationDateLabel, sessionDetailsDatePickerBox,
    sessionDetailsNameLabel,
    sessionDetailsNotesBox,
    sessionDetailsPlannedDateLabel
} from "./sessionDetailsStyles";
import {Chip} from "@mui/material";
import {applyDate, handleOnClick} from "../../utils/supportFunctions";
import {secondaryActiveText} from "../../utils/customColors";
import Typography from "@mui/material/Typography";
import EditSessionName from "./editSessionDetails/EditSessionName";
import EditSessionNotes from "./editSessionDetails/EditSessionNotes";
import EditSessionDatePicker from "./editSessionDetails/EditSessionDatePicker";

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
    const {id} = useParams<RouteParams>()
    const [session, setSession] = useState<Session>(initialSession);
    const [isEditable, setIsEditable] = useState<boolean[]>([false, false, false]);
    const [check, setCheck] = useState<number>(0);

    useEffect(() => {
        getSession().then(data => {
            setSession(data);
        });
    }, []);

    useEffect(() => {
        getSession().then(data => {
            setSession(data);
        });
    }, [check]);

    async function getSession(): Promise<Session> {
        const response = await axios.get<Session>(`${API_URL}/${id}`);
        return response.data;
    }

    return (
        <Box sx={newSessionBodyBox}>
            <Box sx={newSessionUpperBox}>
                {isEditable.at(0) === false
                    ? <Chip
                        label={session.name}
                        onClick={() => handleOnClick(0, isEditable, setIsEditable)}
                        sx={sessionDetailsNameLabel}/>
                    : <EditSessionName isEditable={isEditable} setIsEditable={setIsEditable} session={session} setCheck={setCheck}/>
                }
                <Chip
                    label={`Created: ${applyDate(session.creationDate)}`}
                    sx={sessionDetailsCreationDateLabel}
                />
            </Box>
            {isEditable.at(1) === false
                ? <div onClick={() => handleOnClick(1, isEditable, setIsEditable)}>
                    <Box sx={sessionDetailsNotesBox}>
                        <div dangerouslySetInnerHTML={{__html: session.notes}}/>
                    </Box>
                  </div>
                : <EditSessionNotes isEditable={isEditable} setIsEditable={setIsEditable} session={session} setCheck={setCheck}/>
            }
            <Box sx={sessionDetailsDatePickerBox}>
                <Typography sx={{color: secondaryActiveText}}> Your session is planned for: </Typography>
                {isEditable.at(2) === false
                    ? <Chip
                        label={`Planned: ${applyDate(session.plannedDate!)}`}
                        onClick={() => handleOnClick(2, isEditable, setIsEditable)}
                        sx={sessionDetailsPlannedDateLabel}
                    />
                    : <EditSessionDatePicker isEditable={isEditable} setIsEditable={setIsEditable} session={session} setCheck={setCheck} />
                }
            </Box>
        </Box>
    );
}

export default SessionDetailsBody;