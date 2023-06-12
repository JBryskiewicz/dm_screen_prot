import Box from "@mui/material/Box";
import SessionQuickAccessCard from "./SessionQuickAccessCard";
import {useEffect, useState} from "react";
import {Session} from "../../../types/types";
import SessionQuickAccessAdd from "./SessionQuickAccessAdd";
import Typography from "@mui/material/Typography";
import {latestSessionsListHint, latestSessionsStyle} from "../../../sx/mainScreenStyles";
import {sortAndSetSessions} from "../../../utils/supportFunctions";
import BasicLoader from "../../loaders/BasicLoader";

function SessionQuickAccessList() {
    const [sessions, setSessions] = useState<Session[]>([]);
    const [check, setCheck] = useState<number>(0);

    useEffect(() => {
        sortAndSetSessions(setSessions);
    }, []);

    useEffect(() => {
        sortAndSetSessions(setSessions);
    }, [check]);

    return (
        <Box sx={latestSessionsStyle}>
            <SessionQuickAccessAdd setCheck={setCheck}/>
            <Typography sx={latestSessionsListHint}>
                *list below is sorted by creation date (desc)
            </Typography>
            <Box sx={{minHeight: 'calc(100vh - 210px)'}}>
                {!sessions.length
                    ? <BasicLoader/>
                    : sessions
                        .slice(0, 3)
                        .map((session) => (
                            <SessionQuickAccessCard key={session.id} session={session}/>
                        ))
                }
            </Box>
        </Box>
    );
}

export default SessionQuickAccessList;