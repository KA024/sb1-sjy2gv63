import { create } from 'zustand';

type AuthMode = 'login' | 'signup' | 'forgot-password' | null;

interface AuthState {
  isOpen: boolean;
  mode: AuthMode;
  openAuth: (mode: AuthMode) => void;
  closeAuth: () => void;
  switchMode: (mode: AuthMode) => void;
}

export const useAuth = create<AuthState>((set) => ({
  isOpen: false,
  mode: null,
  openAuth: (mode) => set({ isOpen: true, mode }),
  closeAuth: () => set({ isOpen: false, mode: null }),
  switchMode: (mode) => set({ mode }),
}));