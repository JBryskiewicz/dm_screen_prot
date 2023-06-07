import Box from "@mui/material/Box";
import SessionQuickAccessCard from "./SessionQuickAccessCard";
import axios from "axios";
import {useEffect, useState} from "react";
import {Session} from "../../../types/types";
import {API_URL} from "../../../utils/constants";
import SessionQuickAccessAdd from "./SessionQuickAccessAdd";
import Typography from "@mui/material/Typography";
import {inactiveText} from "../../../utils/customStyles";

function SessionQuickAccessList() {
    const [sessions, setSessions] = useState<Session[]>([]);
    const [check, setCheck] = useState<number>(0);

    useEffect(() => {
        getSessions().then(data => {
            const sortedSessions = data.sort((a, b) =>
                new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime()
            );
            setSessions(sortedSessions);
        });
    }, []);

    useEffect(() => {
        getSessions().then(data => {
            const sortedSessions = data.sort((a, b) =>
                new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime()
            );
            setSessions(sortedSessions);
        });
    }, [check]);

    async function getSessions(): Promise<Session[]> {
        const response = await axios.get(API_URL);
        return await response.data;
    }

    return (
        <>
            <SessionQuickAccessAdd setCheck={setCheck}/>
            <Typography sx={{color: inactiveText, padding: '15px 10px', fontSize: '14px'}}>
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