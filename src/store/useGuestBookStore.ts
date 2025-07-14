import { create } from 'zustand';

interface guestBookState {
  isEdit: boolean;
  isDelete: boolean;
}

interface guestBookActions {
  setIsEdit: (value: boolean) => void;
  setIsDelete: (value: boolean) => void;
}

export const useGuestBookStore = create<guestBookState & guestBookActions>()((set) => ({
  isEdit: false,
  isDelete: false,

  setIsEdit: (value) => set({ isEdit: value }),
  setIsDelete: (value) => set({ isDelete: value }),
}));
