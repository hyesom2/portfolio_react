import { create } from 'zustand';

interface TimeStore {
  time: Date;
}

interface TimeActionStore {
  updateTime: () => void;
}

export const useTimeStore = create<TimeStore & TimeActionStore>()((set) => ({
  time: new Date(),

  updateTime: () => set({ time: new Date() }),
}));
