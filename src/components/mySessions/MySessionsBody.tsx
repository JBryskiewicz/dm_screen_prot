import Box from "@mui/material/Box";
import MySessionsButtons from "./MySessionsButtons";
import MySessionsStatistics from "./MySessionsStatistics";
import MySessionsList from "./MySessionsList";
import {useEffect, useState} from "react";
import {Session} from "../../types/types";
import {SessionsBodyBoxStyle} from "./mySessionsStyles";
import {sortAndSetSessions} from "../../utils/supportFunctions";

function MySessionsBody() {
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
            <Box sx={SessionsBodyBoxStyle}>
                <MySessionsButtons />
                <MySessionsList sessions={sessions} setCheck={setCheck}/>
            </Box>
            <MySessionsStatistics sessions={sessions}/>
        </>
    );
}

export default MySessionsBody;