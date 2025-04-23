import { create } from "zustand";
import { ISprint } from "../types/ISprint";

interface ISprintStore {
   sprints: ISprint[]; // Cambié sprint a sprints para que sea consistente
   sprintActivo: ISprint | null;

   setSprintActivo: (sprintActivo: ISprint | null) => void;

   setArraySprints: (arrayDeSprints: ISprint[]) => void;

   agregarNuevoSprint: (nuevoSprint: ISprint) => void;

   editarUnSprint: (sprintActualizado: ISprint) => void;

   eliminarUnSprint: (idSprint: string) => void;
}

export const sprintStore = create<ISprintStore>((set) => ({
    sprints: [], 
    sprintActivo: null,

    //Funciones modificadoras para el array

    // Agregar array de sprints
    setArraySprints: (arrayDeSprints) => set(() => ({ sprints: arrayDeSprints })), 

    // Agregar un sprint al array
    agregarNuevoSprint: (nuevoSprint) => set((state) => ({ sprints: [...state.sprints, nuevoSprint] })), 

    // Editar un sprint del array
    editarUnSprint: (sprintEditado) => set((state) => {
        const arregloSprints = state.sprints.map((sprint) =>
            sprint.id === sprintEditado.id ? { ...sprint, ...sprintEditado} : sprint);
        return { sprints: arregloSprints }; 
    }),

    // Eliminar un sprint del array
    eliminarUnSprint: (idSprint) => set((state) => {
        const arregloSprints = state.sprints.filter((sprint) =>
            sprint.id !== idSprint );
        return { sprints: arregloSprints }; 
    }),

    // Setear el sprint activo
    setSprintActivo: (sprintActivoIn) => set(() => ({ sprintActivo: sprintActivoIn }))
}));
