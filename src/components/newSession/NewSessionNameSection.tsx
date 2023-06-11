import {newSessionsNameField, newSessionUpperBox} from "../../sx/newSessionStyles";
import {Button, TextField} from "@mui/material";
import {latestSessionsNewButton} from "../../sx/mainScreenStyles";
import Box from "@mui/material/Box";
import {Dispatch, SetStateAction} from "react";
import {styled} from "@mui/material/styles";

const CssTextField = styled(TextField)(newSessionsNameField);

type Props = {
    sessionName: string;
    setSessionName: Dispatch<SetStateAction<string>>
}

function NewSessionNameSection({sessionName, setSessionName}: Props) {
    return (
        <Box sx={newSessionUpperBox}>
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
                Save Session
            </Button>
        </Box>
    );
}

export default NewSessionNameSection;