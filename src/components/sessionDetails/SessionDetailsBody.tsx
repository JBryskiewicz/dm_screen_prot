import {newSessionBodyBox} from "../newSession/newSessionStyles";
import Box from "@mui/material/Box";
import {Session} from "../../types/types";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getOneSession} from "../../utils/apiCommunication";
import SessionDetailsNameBox from "./SessionDetailsNameBox";
import SessionDetailsNotesBox from "./SessionDetailsNotesBox";
import SessionDetailsDateBox from "./SessionDetailsDateBox";
import BasicLoader from "../BasicLoader";

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
    const [check, setCheck] = useState<number>(0);

    useEffect(() => {
        getOneSession(id).then(data => {
            setSession(data);
        });
    }, []);

    useEffect(() => {
        getOneSession(id).then(data => {
            setSession(data);
        });
    }, [check]);

    if(!Object.keys(session).length) {
        return  (
            <Box sx={newSessionBodyBox}>
                <BasicLoader />
            </Box>
        )
    }

    return (
        <Box sx={newSessionBodyBox}>
            <SessionDetailsNameBox session={session} setCheck={setCheck}/>
            <SessionDetailsNotesBox session={session} setCheck={setCheck}/>
            <SessionDetailsDateBox session={session} setCheck={setCheck}/>
        </Box>
    );
}

export default SessionDetailsBody;