import { create } from 'zustand';

interface DockState {
  activeApp: string | null;
  setActiveApp: (name: string | null) => void;
}

export const useDockStore = create<DockState>((set) => ({
  activeApp: null,
  setActiveApp: (app) => set({ activeApp: app }),
}));
