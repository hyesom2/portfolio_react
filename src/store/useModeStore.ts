import { create } from 'zustand';
const initialMode = localStorage.getItem('mode') || 'light';

interface modeStore {
  mode: string;
  setMode: (newMode: string) => void;
  toggleMode: () => void;
}

export const useModeStore = create<modeStore>()((set) => ({
  mode: initialMode,
  setMode: (newMode) => {
    localStorage.setItem('mode', newMode);
    document.documentElement.classList.toggle('dark', newMode === 'dark');
    set({ mode: newMode });
  },
  toggleMode: () => {
    set((state) => {
      const newMode = state.mode === 'dark' ? 'light' : 'dark';
      localStorage.setItem('mode', newMode);
      document.documentElement.classList.toggle('dark', newMode === 'dark');
      return { mode: newMode };
    });
  },
}));
