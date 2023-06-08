import {NewSession, Session} from "../types/types";
import axios from "axios";
import {API_URL} from "./constants";

//Axios typowanie, sprawdź w dokumentacji (hint: generyk)
export async function getSessions(): Promise<Session[]> {
    const response = await axios.get(API_URL);
    return await response.data;
}

export async function postSession(data: NewSession) {
    await axios.post(API_URL, data);
}