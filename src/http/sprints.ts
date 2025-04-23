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

export const postNuevoSprint = async (nuevoSprint: ISprint) => {
    try {
      const response = await axios.post<ISprint>(`${API_URL}/sprints`, {
        ...nuevoSprint,
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const editarSprint = async (sprintActualizado: ISprint) => {
    try {
      const response = await axios.put<ISprint>(
        `${API_URL}/sprints/${sprintActualizado.id}`,
        {
          ...sprintActualizado,
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const eliminarSprintPorId = async (idSprint: string) => {
    try {
      const response = await axios.delete<ISprint>(
        `${API_URL}/sprints/${idSprint}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };