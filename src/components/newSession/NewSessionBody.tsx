import "react-quill/dist/quill.snow.css";
import Box from "@mui/material/Box";
import {newSessionBodyBox} from "../../sx/newSessionStyles";
import React, {useState} from "react";
import NewSessionTextEditor from "./NewSessionTextEditor";
import NewSessionDatePlanner from "./NewSessionDatePlanner";
import {NewSession} from "../../types/types";
import NewSessionNameSection from "./NewSessionNameSection";
import {postSession} from "../../utils/apiCommunication";
import {useNavigate} from "react-router-dom";

function NewSessionBody() {
    const [sessionName, setSessionName] = useState<string>('');
    const [notes, setNotes] = useState<string>('');
    const [plannedDate, setPlannedDate] = useState<Date | null>(null);

    const navigate = useNavigate();

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (plannedDate !== null) {
            plannedDate.setDate(plannedDate.getDate() + 1);
        }

        const newSession: NewSession = {
            name: sessionName,
            notes: notes,
            creationDate: new Date(),
            plannedDate: plannedDate
        }

        await postSession(newSession);
        navigate('/my-sessions');
    }

    return (
        <Box sx={newSessionBodyBox}>
            <form onSubmit={handleSubmit}>
                <NewSessionNameSection sessionName={sessionName} setSessionName={setSessionName}/>
                <NewSessionTextEditor notes={notes} setNotes={setNotes}/>
                <NewSessionDatePlanner plannedDate={plannedDate} setPlannedDate={setPlannedDate}/>
            </form>
        </Box>
    );
}

export default NewSessionBody;
