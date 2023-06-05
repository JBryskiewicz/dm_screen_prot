export type NewSession = {
    name: string;
    notes: string;
    creationDate: string;
    plannedDate: string;
}

export interface Session extends NewSession {
    id: number;
}