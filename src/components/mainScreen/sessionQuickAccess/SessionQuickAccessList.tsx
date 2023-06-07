import Box from "@mui/material/Box";
import SessionQuickAccessCard from "./SessionQuickAccessCard";
import {useEffect, useState} from "react";
import {Session} from "../../../types/types";
import SessionQuickAccessAdd from "./SessionQuickAccessAdd";
import Typography from "@mui/material/Typography";
import {latestSessionsListHint} from "../mainScreenStyles";
import {sortAndSetSessions} from "../../../utils/supportFunctions";

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
        <>
            <SessionQuickAccessAdd setCheck={setCheck}/>
            <Typography sx={latestSessionsListHint}>
                *list below is sorted by creation date (desc)
            </Typography>
            <Box>
                {sessions
                    .slice(0,3)
                    .map((session) => (
                        <SessionQuickAccessCard key={session.id} session={session}/>
                    ))
                }
            </Box>
        </>
    );
}

export default SessionQuickAccessList;