import {Session} from "../../types/types";
import {Dispatch, SetStateAction, useState} from "react";
import {SessionDetailsNotes} from "./SessionDetailsDisplayComponents";
import EditSessionNotes from "./editSessionDetails/EditSessionNotes";

type Props = {
    session: Session;
    setCheck: Dispatch<SetStateAction<number>>;
}

function SessionDetailsNotesBox({ session, setCheck }: Props) {
    const [isEditable, setIsEditable] = useState<boolean>(false);

    return (
        <>
            {isEditable === false
                ? <SessionDetailsNotes
                    isEditable={isEditable}
                    setIsEditable={setIsEditable}
                    session={session}/>
                : <EditSessionNotes
                    isEditable={isEditable}
                    setIsEditable={setIsEditable}
                    session={session}
                    setCheck={setCheck}/>
            }
        </>
    );
}

export default SessionDetailsNotesBox;