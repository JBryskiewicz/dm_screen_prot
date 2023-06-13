import {Dispatch, SetStateAction} from "react";
import {Session} from "../../types/types";
import {applyDate, handleOnClick} from "../../utils/supportFunctions";
import {sessionDetailsNameLabel, sessionDetailsNotesBox, sessionDetailsPlannedDateLabel} from "../../sx/sessionDetailsStyles";
import {Chip} from "@mui/material";
import Box from "@mui/material/Box";
import parse from "html-react-parser";

type Props = {
    isEditable: boolean;
    setIsEditable: Dispatch<SetStateAction<boolean>>;
    session: Session;
}

export function SessionDetailsName({ isEditable, setIsEditable, session }: Props) {
    return (
        <Chip
            label={session.name}
            onClick={() => handleOnClick(isEditable, setIsEditable)}
            sx={sessionDetailsNameLabel}
        />
    );
}

export function SessionDetailsNotes({ isEditable, setIsEditable, session }: Props) {
    const parsedNotes = parse(session.notes);
    return (
        <div onClick={() => handleOnClick(isEditable, setIsEditable)}>
            <Box sx={sessionDetailsNotesBox}>
                { parsedNotes }
            </Box>
        </div>
    );
}

export function SessionDetailsPlannedDate({ isEditable, setIsEditable, session }: Props) {
    return (
        <Chip
            label={`Planned: ${applyDate(session.plannedDate!)}`}
            onClick={() => handleOnClick(isEditable, setIsEditable)}
            sx={sessionDetailsPlannedDateLabel}
        />
    );
}

