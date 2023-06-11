import {Button, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";
import {NewSession} from "../../../types/types";
import {Dispatch, SetStateAction, useState} from "react";
import {latestSessionsFormStyles, latestSessionsNewButton, latestSessionsTextField} from "../../../sx/mainScreenStyles";
import {postSession} from "../../../utils/apiCommunication";

const CssTextField = styled(TextField)(latestSessionsTextField);

type Props = {
    setCheck: Dispatch<SetStateAction<number>>
}

function SessionQuickAccessAdd({setCheck}: Props) {
    const [sessionName, setSessionName] = useState<string>('');

    async function handleSubmit() {
        const newSession: NewSession = {
            name: sessionName,
            notes: "",
            creationDate: new Date(),
            plannedDate: null
        }

        await postSession(newSession);
        await setCheck(prevState => prevState === 0 ? 1 : 0);
        setSessionName('');
    }

    return (
        <Box sx={{marginTop: '10px'}}>
            <form
                onSubmit={handleSubmit}
                style={latestSessionsFormStyles}
            >
                <CssTextField
                    required
                    label="Session name"
                    id="sessionName"
                    name="sessionName"
                    value={sessionName}
                    onChange={(event) => setSessionName(event.target.value)}
                />
                <Button
                    type="submit"
                    sx={latestSessionsNewButton}>
                    add
                </Button>
            </form>
        </Box>
    );
}

export default SessionQuickAccessAdd;