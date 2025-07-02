import { create } from "zustand";

const useAuthStore = create((set) => ({
  isLoggedIn: false,
  isSigningUp: false,
  user: null,

  setLoggedIn: (value) => set({ isLoggedIn: value }),
  setUser: (user) => set({ user }),
  logout: () => set({ isLoggedIn: false, user: null }),
}));

export default useAuthStore;
