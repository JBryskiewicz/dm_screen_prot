import {formats, modules} from "../../../utils/quillUtils";
import ReactQuill from "react-quill";
import {Session} from "../../../types/types";
import React, {Dispatch, SetStateAction, useState} from "react";
import {updateSessionField} from "../../../utils/apiCommunication";
import {handleOnClick} from "../../../utils/supportFunctions";
import {Button} from "@mui/material";
import {sessionDetailsQuill} from "../../../sx/sessionDetailsStyles";

type Props = {
    isEditable: boolean;
    setIsEditable: Dispatch<SetStateAction<boolean>>;
    session: Session;
    setCheck: Dispatch<SetStateAction<number>>;
}

function EditSessionNotes({ isEditable, setIsEditable, session, setCheck }: Props) {
    const [notes, setNotes] = useState<string>(session.notes)

    const handleProcedureContentChange = (content: string) => {
        setNotes(content);
    };

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        await updateSessionField('notes', notes, session.id);
        await setCheck(prevState => prevState === 0 ? 1 : 0);
        await handleOnClick(isEditable, setIsEditable);
    }

    return (
        <form onSubmit={handleSubmit} style={{position: 'relative'}}>
            <ReactQuill
                theme="snow"
                modules={modules}
                formats={formats}
                value={notes}
                onChange={handleProcedureContentChange}
                style={sessionDetailsQuill}
                placeholder={"Write your notes here..."}
            />
            <Button
                type="submit"
                sx={{
                    position: 'absolute',
                    top: '22.5px',
                    right: '100px'
            }}>
                Save Changes
            </Button>
            <Button
            onClick={() => handleOnClick(isEditable, setIsEditable)}
            sx={{
                position: 'absolute',
                top: '22.5px',
                right: '20px'
            }}>
                Cancel
            </Button>
        </form>
    );
}

export default EditSessionNotes;