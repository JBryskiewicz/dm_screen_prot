import {styled} from "@mui/material/styles";
import {TextField} from "@mui/material";
import {newSessionsNameField} from "../../newSession/newSessionStyles";
import React, {Dispatch, SetStateAction, useState} from "react";
import {handleOnClick} from "../../../utils/supportFunctions";
import {updateSessionField} from "../../../utils/apiCommunication";

const CssTextField = styled(TextField)(newSessionsNameField);

type Props = {
    isEditable: boolean[];
    setIsEditable: Dispatch<SetStateAction<boolean[]>>;
    id: number;
    setCheck: Dispatch<SetStateAction<number>>;
}

function EditSessionName({ isEditable, setIsEditable, id, setCheck }: Props) {
    const [sessionName, setSessionName] = useState<string>('');

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        await updateSessionField('name', sessionName, id);
        await setCheck(prevState => prevState === 0 ? 1 : 0);
        await handleOnClick(0, isEditable, setIsEditable);
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
            />
        </form>
    );
}

export default EditSessionName;