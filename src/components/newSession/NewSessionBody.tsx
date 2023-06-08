import {useState} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Box from "@mui/material/Box";
import {formats, modules} from "../../utils/quillUtils";
import {
    newSessionBodyBox,
    newSessionQuill,
    newSessionsNameField,
    newSessionUpperBox
} from "./newSessionStyles";
import {styled} from "@mui/material/styles";
import {Button, TextField} from "@mui/material";
import {latestSessionsNewButton} from "../mainScreen/mainScreenStyles";

const CssTextField = styled(TextField)(newSessionsNameField);

function NewSessionBody() {
    const [notes, setNotes] = useState('');
    const handleProcedureContentChange = (content: any) => {
        setNotes(content);
    };

    return (
        <Box sx={newSessionBodyBox}>
            <Box sx={newSessionUpperBox}>
                <CssTextField
                    required
                    label="Session name"
                    id="sessionName"
                    name="sessionName"
                />
                <Button
                    type="submit"
                    sx={latestSessionsNewButton}>
                    Submit Session
                </Button>
            </Box>
            <ReactQuill
                theme="snow"
                modules={modules}
                formats={formats}
                value={notes}
                onChange={handleProcedureContentChange}
                style={newSessionQuill}
            />
        </Box>
    );
}

export default NewSessionBody;