import axios from "axios";
import { ITarea } from "../types/ITarea";

const API_URL = import.meta.env.VITE_API_URL;

export const getAllTareas = async () => {
  try {
    const res = await axios.get<{ tareas: ITarea[] }>(`${API_URL}/backlog`);
    return res.data.tareas;
  } catch (error) {
    console.log(error);
  }
};

export const postNuevaTarea = async (nuevaTarea: ITarea) => {
  try {
    const res = await axios.get<{ tareas: ITarea[] }>(`${API_URL}/backlog`);
    const tareasActuales = res.data.tareas || [];

    const nuevasTareas = [...tareasActuales, nuevaTarea];
    await axios.patch(`${API_URL}/backlog`, { tareas: nuevasTareas });
  } catch (error) {
    console.log(error);
  }
};

export const editarTarea = async (tareaActualizada: ITarea) => {
  try {
    const res = await axios.get<{ tareas: ITarea[] }>(`${API_URL}/backlog`);
    const tareasActuales = res.data.tareas || [];

    const nuevasTareas = tareasActuales.map((tarea) =>
      tarea.id === tareaActualizada.id ? { ...tarea, ...tareaActualizada } : tarea
    );

    await axios.patch(`${API_URL}/backlog`, { tareas: nuevasTareas });
  } catch (error) {
    console.log(error);
  }
};

export const eliminarTareaPorId = async (idTarea: string) => {
  try {
    const res = await axios.get<{ tareas: ITarea[] }>(`${API_URL}/backlog`);
    const tareasActuales = res.data.tareas || [];

    const nuevasTareas = tareasActuales.filter((tarea) => tarea.id !== idTarea);

    await axios.patch(`${API_URL}/backlog`, { tareas: nuevasTareas });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
