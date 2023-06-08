export type NewSession = {
    name: string;
    notes: string;
    creationDate: Date;
    plannedDate: Date | null;
}

export interface Session extends NewSession {
    id: number;
}