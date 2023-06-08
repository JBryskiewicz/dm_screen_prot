import "react-quill/dist/quill.snow.css";
import Box from "@mui/material/Box";
import {newSessionBodyBox} from "./newSessionStyles";
import React, {useState} from "react";
import NewSessionTextEditor from "./NewSessionTextEditor";
import NewSessionDatePlanner from "./NewSessionDatePlanner";
import {NewSession} from "../../types/types";
import NewSessionNameSection from "./NewSessionNameSection";
import {postSession} from "../../utils/apiCommunication";

function NewSessionBody() {
    const [sessionName, setSessionName] = useState<string>('');
    const [notes, setNotes] = useState<string>('');
    const [plannedDate, setPlannedDate] = useState<Date | null>(null);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const newSession: NewSession = {
            name: sessionName,
            notes: notes,
            creationDate: new Date(),
            plannedDate: plannedDate
        }

        await postSession(newSession);
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
