import { create } from 'zustand';

interface AuthState {
  user: any; // Will be replaced with proper User type
  token: string | null;
  isLoading: boolean;
  setUser: (user: any) => void;
  setToken: (token: string) => void;
  logout: () => void;
  initializeAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isLoading: true,
  setUser: (user) => set({ user, isLoading: false }),
  setToken: (token) => set({ token }),
  logout: () => set({ user: null, token: null }),
  initializeAuth: () => {
    // Check for existing token in localStorage
    const token = localStorage.getItem('access_token');
    if (token) {
      // In a real app, you would validate the token here
      // For now, we'll just set it and assume it's valid
      set({ token, isLoading: false });
    } else {
      set({ isLoading: false });
    }
  },
}));