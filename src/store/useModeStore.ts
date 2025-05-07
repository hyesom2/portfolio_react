import { create } from 'zustand';

type Mode = 'light' | 'dark';

interface modeStore {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

export const useModeStore = create<modeStore>()((set) => ({
  mode: 'light',
  setMode: (mode) => set({ mode }),
}));
