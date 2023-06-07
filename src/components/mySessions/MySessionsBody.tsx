import {
    SessionsBodyBoxStyle
} from "../../utils/customStyles";
import Box from "@mui/material/Box";
import MySessionsButtons from "./MySessionsButtons";
import MySessionsStatistics from "./MySessionsStatistics";
import MySessionsList from "./MySessionsList";
import {useEffect, useState} from "react";
import {Session} from "../../types/types";
import {API_URL} from "../../utils/constants";
import axios from "axios";

function MySessionsBody() {
    const [sessions, setSessions] = useState<Session[]>([]);

    useEffect(() => {
        getSessions().then(data => {
            const sortedSessions = data.sort((a, b) =>
                new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime()
            );
            setSessions(sortedSessions);
        });
    }, []);
    async function getSessions(): Promise<Session[]> {
        const response = await axios.get(API_URL);
        return await response.data;
    }

    return (
        <>
            <Box sx={SessionsBodyBoxStyle}>
                <MySessionsButtons />
                <MySessionsList sessions={sessions}/>
            </Box>
            <MySessionsStatistics />
        </>
    );
}

export default MySessionsBody;