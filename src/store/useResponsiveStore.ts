import { create } from 'zustand';

interface responsiveStore {
  isTablet: boolean;
  setIsTablet: (value: boolean) => void;
}

export const useResponsiveStore = create<responsiveStore>()((set) => ({
  isTablet: window.innerWidth < 1024,
  setIsTablet: (value: boolean) => set({ isTablet: value }),
}));
