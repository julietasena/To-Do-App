import axios from "axios";
import { ITarea } from "../types/ITarea";


const API_URL = import.meta.env.VITE_API_URL;

export const getAllTareas = async () => {

    try {
        const response = await axios.get<ITarea[]>(`${API_URL}/tareas`);
        return response.data;
    } catch (error) {
        console.log(error);
    }

};


export const postNuevaTarea = async (nuevaTarea: ITarea) => {

    try {
        const response = await axios.post<ITarea>(`${API_URL}/tareas`, {
           ...nuevaTarea,
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }

};


export const editarTarea = async (tareaActualizada: ITarea) => {

    try {
        const response = await axios.put<ITarea>(
            `${API_URL}/tareas/${tareaActualizada.id}`,
            {
                ...tareaActualizada,
            });
        return response.data;
    } catch (error) {
        console.log(error);
    }

};

export const eliminarTareaPorId = async (idTarea:string) => {

    try {
        const response = await axios.delete<ITarea>(
            `${API_URL}/tareas/${idTarea}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }

};