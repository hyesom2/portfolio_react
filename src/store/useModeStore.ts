import { create } from 'zustand';

type Mode = 'light' | 'dark';

const initialMode = localStorage.getItem('mode') || 'light';

interface modeStore {
  mode: Mode;
  setMode: (newMode: Mode) => void;
  toggleMode: () => void;
}

export const useModeStore = create<modeStore>()((set) => ({
  mode: initialMode as Mode,
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
