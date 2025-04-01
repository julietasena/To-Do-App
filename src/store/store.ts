import { create } from "zustand";

interface Store {
  showBacklog: boolean;
  toggleScreen: () => void;
}

export const useStore = create<Store>((set) => ({
  showBacklog: false, //empieza con Sprint
  toggleScreen: () => set((state) => ({ showBacklog: !state.showBacklog })), //cambia entre sprint y backlog
}));

