import { create } from "zustand";
import { ISprint } from "../types/ISprint";
import { ITarea } from "../types/ITarea";
import { tareaStore } from "./tareaStore";
import axios from "axios";


const API_URL = import.meta.env.VITE_API_URL;

interface ISprintStore {
   sprints: ISprint[];
   sprintActivo: ISprint | null;

   setSprintActivo: (sprintActivo: ISprint | null) => void;

   setArraySprints: (arrayDeSprints: ISprint[]) => void;

   agregarNuevoSprint: (nuevoSprint: ISprint) => void;

   editarUnSprint: (sprintActualizado: ISprint) => void;

   eliminarUnSprint: (idSprint: string) => void;
   
   asignarTareaASprint: (tarea: ITarea, sprintId: string) => Promise<void>;
}

export const sprintStore = create<ISprintStore>((set, get) => ({
    sprints: [], 
    sprintActivo: null,

    // Setear el sprint activo
    setSprintActivo: (sprintActivoIn) => set(() => ({ sprintActivo: sprintActivoIn })),

    // Agregar array de sprints
    setArraySprints: (arrayDeSprints) => set(() => ({ sprints: arrayDeSprints })),

    // Agregar un sprint al array
    agregarNuevoSprint: (nuevoSprint) => set((state) => ({
        sprints: [...state.sprints, nuevoSprint]
    })),

    // Editar un sprint del array
    editarUnSprint: (sprintEditado) => set((state) => {
        const arregloSprints = state.sprints.map((sprint) =>
            sprint.id === sprintEditado.id ? { ...sprint, ...sprintEditado } : sprint
        );
        return { sprints: arregloSprints };
    }),

    // Eliminar un sprint del array
    eliminarUnSprint: (idSprint) => set((state) => {
        const arregloSprints = state.sprints.filter((sprint) =>
            sprint.id !== idSprint
        );
        return { sprints: arregloSprints };
    }),

    // Asignar tarea a un sprint
    asignarTareaASprint: async (tarea: ITarea, sprintId: string) => {
        const tareaConEstado = { ...tarea, estado: "porHacer" };
    
        // Eliminar tarea de la base de datos
        await axios.delete(`${API_URL}/${tarea.id}`);
    
        // Actualizar el estado de tareaStore
        const { eliminarUnaTarea } = tareaStore.getState();
        eliminarUnaTarea(tarea.id!);
    
        set((state) => {
            const sprintsActualizados = state.sprints.map((sprint) => {
                if (sprint.id === sprintId) {
                    const tareasActualizadas = [...(sprint.tareas ?? []), tareaConEstado];
    
                    // Actualizar el sprint en la base de datos
                    axios.patch(`${API_URL}/sprints/${sprintId}`, {
                        tareas: tareasActualizadas,
                    });
    
                    return {
                        ...sprint,
                        tareas: tareasActualizadas,
                    };
                }
                return sprint;
            });
    
            return { sprints: sprintsActualizados };
        });
    }
    
}));
