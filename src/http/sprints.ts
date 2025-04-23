import axios from "axios";
import { ISprint } from "../types/ISprint";

const API_URL = import.meta.env.VITE_API_URL;

export const getAllSprints = async () => {
    try {
        const res = await axios.get<ISprint[]>(`${API_URL}/sprints`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
 
};

