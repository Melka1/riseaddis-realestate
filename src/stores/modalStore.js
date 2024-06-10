import { create } from "zustand";

export const useBackgroundStore = create((set) => ({
  displayBackground: false,
  setDisplayBackground: () =>
    set((state) => ({ displayBackground: !state.displayBackground })),
}));
