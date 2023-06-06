export type NewSession = {
    name: string;
    notes: string;
    creationDate: Date;
    plannedDate: Date;
}

export interface Session extends NewSession {
    id: number;
}