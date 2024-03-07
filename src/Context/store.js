import { create } from "zustand";

export const useStore = create((set) => ({
  user: { name: "Melka" },
  setUser: (value) => {
    set(() => ({ user: value }));
  },
}));
