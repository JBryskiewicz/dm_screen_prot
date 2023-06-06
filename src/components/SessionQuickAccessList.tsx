import Box from "@mui/material/Box";
import SessionQuickAccessCard from "./SessionQuickAccessCard";
import axios from "axios";
import {useEffect, useState} from "react";
import {Session} from "../types/types";
import {API_URL} from "../utils/constants";

function SessionQuickAccessList() {
    const [sessions, setSessions] = useState<Session[]>([]);

    useEffect(() => {
        getSessions().then(data => {
            const sortedSessions = data.sort((a, b) =>
                new Date(b.plannedDate).getTime() - new Date(a.plannedDate).getTime()
            );
            setSessions(sortedSessions);
        });
    }, []);

    async function getSessions(): Promise<Session[]> {
        const response = await axios.get(API_URL);
        return await response.data;
    }

    return (
        <Box sx={{paddingTop: '20px'}}>
            {sessions
                .map((session) => (
                    <SessionQuickAccessCard key={session.id} session={session}/>
                ))
            }
        </Box>
    );
}

export default SessionQuickAccessList;