import {Dispatch, SetStateAction} from "react";
import {formats, modules} from "../../utils/quillUtils";
import {newSessionQuill} from "../../sx/newSessionStyles";
import ReactQuill from "react-quill";

type Props = {
    notes: string
    setNotes: Dispatch<SetStateAction<string>>
}

function NewSessionTextEditor({notes, setNotes}: Props) {

    const handleProcedureContentChange = (content: string) => {
        setNotes(content);
    };

    return (
        <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            value={notes}
            onChange={handleProcedureContentChange}
            style={newSessionQuill}
            placeholder={"Write your notes here..."}
        />
    );
}

export default NewSessionTextEditor;