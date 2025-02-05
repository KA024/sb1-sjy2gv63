import { create } from 'zustand';

interface SubmitPostState {
  isOpen: boolean;
  openSubmitPost: () => void;
  closeSubmitPost: () => void;
}

export const useSubmitPost = create<SubmitPostState>((set) => ({
  isOpen: false,
  openSubmitPost: () => set({ isOpen: true }),
  closeSubmitPost: () => set({ isOpen: false }),
}));