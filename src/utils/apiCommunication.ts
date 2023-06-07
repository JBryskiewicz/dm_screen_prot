import {Session} from "../types/types";
import axios from "axios";
import {API_URL} from "./constants";

export async function getSessions(): Promise<Session[]> {
    const response = await axios.get(API_URL);
    return await response.data;
}