import {NewSession, Session} from "../types/types";
import axios from "axios";
import {API_URL} from "./constants";

export async function getSessions(): Promise<Session[]> {
    const response = await axios.get<Session[]>(API_URL);
    return response.data;
}

export async function getOneSession(id: string | undefined): Promise<Session> {
    const response = await axios.get<Session>(`${API_URL}/${id}`);
    return response.data;
}

export async function postSession(data: NewSession) {
    await axios.post<NewSession>(API_URL, data);
}

export async function updateSessionField(fieldName: string, value: string | Date | null, id: number){
    await axios.patch<Session>(`${API_URL}/${id}`, {
        [fieldName]: value,
    });
}