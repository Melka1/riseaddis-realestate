import { create } from "zustand";

export const useOTPStore = create((set) => ({
  otp: null,
  setOTP: (otp) => set({ otp }),
}));
