import {Dispatch, SetStateAction, useState} from "react";
import {Session} from "../../types/types";
import {newSessionUpperBox} from "../newSession/newSessionStyles";
import {SessionDetailsName} from "./SessionDetailsDisplayComponents";
import EditSessionName from "./editSessionDetails/EditSessionName";
import {Chip} from "@mui/material";
import {applyDate} from "../../utils/supportFunctions";
import {sessionDetailsCreationDateLabel} from "./sessionDetailsStyles";
import Box from "@mui/material/Box";

type Props = {
    session: Session;
    setCheck: Dispatch<SetStateAction<number>>;
}
function SessionDetailsNameBox({ session, setCheck }: Props) {
    const [isEditable, setIsEditable] = useState<boolean>(false);

    return (
        <Box sx={newSessionUpperBox}>
            {isEditable === false
                ? <SessionDetailsName
                    isEditable={isEditable}
                    setIsEditable={setIsEditable}
                    session={session}/>
                : <EditSessionName
                    isEditable={isEditable}
                    setIsEditable={setIsEditable}
                    session={session}
                    setCheck={setCheck}/>
            }
            <Chip
                label={`Created: ${applyDate(session.creationDate)}`}
                sx={sessionDetailsCreationDateLabel}
            />
        </Box>
    );
}

export default SessionDetailsNameBox;