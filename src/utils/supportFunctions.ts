import {getSessions} from "./apiCommunication";
import {Dispatch, SetStateAction} from "react";
import {Session} from "../types/types";

export function sortAndSetSessions(setSessions: Dispatch<SetStateAction<Session[]>>) {
    getSessions().then(data => {
        const sortedSessions = data.sort((a, b) =>
            new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime()
        );
        setSessions(sortedSessions);
    });
}

export function applyDate(date: Date) {
    if(date === null) {
         return 'Session is not planned'
    }
    return date
        .toString()
        .slice(0, 19)
        .split('T')
        .at(0);
}

export function applyDemoNotes(notes: string, charLimit: number) {
    return notes
        .split('')
        .slice(0, charLimit)
        .concat(['...'])
        .join('');
}

 /**
    This function handles onClick in session details components
    allowing to display edit forms
 */

export function handleOnClick(index: number, isEditable: boolean[], setIsEditable: Dispatch<SetStateAction<boolean[]>>) {
    const newEditable = [...isEditable];
    newEditable[index] = newEditable.at(index) === false
    setIsEditable(newEditable);
}