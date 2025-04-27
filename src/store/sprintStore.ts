import { create } from "zustand";
import { ISprint } from "../types/ISprint";
import { ITarea } from "../types/ITarea";
import { tareaStore } from "./tareaStore";
import axios from "axios";
import { eliminarTareaPorId, postNuevaTarea } from "../http/tareas";

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
  actualizarSprintActivo: (sprintActualizado: ISprint) => void;
  enviarTareaAlBacklog: (tarea: ITarea, stprintId: string) => void;
}

export const sprintStore = create<ISprintStore>((set, get) => ({
  sprints: [],
  sprintActivo: null,

  setSprintActivo: (sprintActivoIn) => set(() => ({ sprintActivo: sprintActivoIn })),

  setArraySprints: (arrayDeSprints) => set(() => ({ sprints: arrayDeSprints })),

  agregarNuevoSprint: (nuevoSprint) => set((state) => ({
    sprints: [...state.sprints, nuevoSprint]
  })),

  editarUnSprint: (sprintEditado) => set((state) => {
    const arregloSprints = state.sprints.map((sprint) =>
      sprint.id === sprintEditado.id ? { ...sprint, ...sprintEditado } : sprint
    );
    const sprintActivo = state.sprintActivo?.id === sprintEditado.id ? { ...state.sprintActivo, ...sprintEditado } : state.sprintActivo;
    return { sprints: arregloSprints, sprintActivo };
  }),

  eliminarUnSprint: (idSprint) => set((state) => {
    const arregloSprints = state.sprints.filter((sprint) =>
      sprint.id !== idSprint
    );
    const sprintActivo = state.sprintActivo?.id === idSprint ? null : state.sprintActivo;
    return { sprints: arregloSprints, sprintActivo };
  }),

  asignarTareaASprint: async (tarea, sprintId) => {
    const tareaConEstado = { ...tarea, estado: "porHacer" };
  
    // Eliminar la tarea del backlog
    const { eliminarUnaTarea } = tareaStore.getState();
    eliminarUnaTarea(tarea.id!);
  
    // Actualizar el sprint agregando la tarea
    set((state) => {
      const sprintsActualizados = state.sprints.map((sprint) => {
        if (sprint.id === sprintId) {
          const tareasActualizadas = [...(sprint.tareas ?? []), tareaConEstado];
  
          // Actualizar en la API también
          axios.patch(`${API_URL}/sprintList/sprints/${sprintId}`, { tareas: tareasActualizadas });
  
          return { ...sprint, tareas: tareasActualizadas };
        }
        return sprint;
      });
  
      return { sprints: sprintsActualizados };
    });
  },
  
  

  enviarTareaAlBacklog: async (tarea, sprintId) => {
    const tareaSinEstado = { ...tarea, estado: null };
  
    const { sprints } = get(); // 👉 importante obtener el estado actual de Zustand
  
    // Eliminar la tarea del sprint y actualizar en la API
    const sprintsActualizados = sprints.map((sprint) => {
      if (sprint.id === sprintId) {
        const tareasActualizadas = sprint.tareas?.filter((t) => t.id !== tarea.id) || [];
  
        return { ...sprint, tareas: tareasActualizadas };
      }
      return sprint;
    });
  
    await axios.patch(`${API_URL}/sprintList`, { sprints: sprintsActualizados });
  
    // Ahora actualizar Zustand local
    set((state) => {
      const sprintActivoActualizado = state.sprintActivo?.id === sprintId
        ? {
            ...state.sprintActivo,
            tareas: state.sprintActivo.tareas?.filter((t) => t.id !== tarea.id)
          }
        : state.sprintActivo;
  
      return { sprints: sprintsActualizados, sprintActivo: sprintActivoActualizado };
    });
  
    // Agregar la tarea al backlog
    await postNuevaTarea(tareaSinEstado);
  },
  
  

  actualizarSprintActivo: (sprintActualizado) => set((state) => {
    const arregloSprints = state.sprints.map((sprint) =>
      sprint.id === sprintActualizado.id ? sprintActualizado : sprint
    );
    return { sprints: arregloSprints, sprintActivo: sprintActualizado };
  })
}));
