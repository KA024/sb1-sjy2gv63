import { create } from 'zustand';

export type TabType = 'notifications' | 'messages';

interface InboxState {
  isOpen: boolean;
  activeTab: TabType;
  openInbox: (tab?: TabType) => void;
  closeInbox: () => void;
  switchTab: (tab: TabType) => void;
}

export const useInbox = create<InboxState>((set) => ({
  isOpen: false,
  activeTab: 'notifications',
  openInbox: (tab = 'notifications') => set({ isOpen: true, activeTab: tab }),
  closeInbox: () => set({ isOpen: false }),
  switchTab: (tab) => set({ activeTab: tab }),
}));