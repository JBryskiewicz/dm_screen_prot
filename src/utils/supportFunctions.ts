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