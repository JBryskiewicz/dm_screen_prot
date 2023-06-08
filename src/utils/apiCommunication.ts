import {NewSession, Session} from "../types/types";
import axios from "axios";
import {API_URL} from "./constants";

export async function getSessions(): Promise<Session[]> {
    const response = await axios.get<Session[]>(API_URL);
    return response.data;
}

export async function postSession(data: NewSession) {
    await axios.post<NewSession>(API_URL, data);
}