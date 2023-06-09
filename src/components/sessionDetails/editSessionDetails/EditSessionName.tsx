import {styled} from "@mui/material/styles";
import {TextField} from "@mui/material";
import {newSessionsNameField} from "../../newSession/newSessionStyles";
import React, {Dispatch, SetStateAction, useState} from "react";
import {handleOnClick} from "../../../utils/supportFunctions";
import {updateSessionField} from "../../../utils/apiCommunication";
import {Session} from "../../../types/types";

const CssTextField = styled(TextField)(newSessionsNameField);

type Props = {
    isEditable: boolean[];
    setIsEditable: Dispatch<SetStateAction<boolean[]>>;
    session: Session;
    setCheck: Dispatch<SetStateAction<number>>;
}

function EditSessionName({ isEditable, setIsEditable, session, setCheck }: Props) {
    const [sessionName, setSessionName] = useState<string>(session.name);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        await updateSessionField('name', sessionName, session.id);
        await setCheck(prevState => prevState === 0 ? 1 : 0);
        await handleOnClick(0, isEditable, setIsEditable);
    }

    function handleExitClick(event: React.KeyboardEvent<HTMLInputElement>) {
        if(event.key === 'Escape') {
            handleOnClick(0, isEditable, setIsEditable);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CssTextField
                required
                label="Session name"
                id="sessionName"
                name="sessionName"
                value={sessionName}
                onChange={(event) => setSessionName(event.target.value)}
                onKeyDown={handleExitClick}
            />
        </form>
    );
}

export default EditSessionName;