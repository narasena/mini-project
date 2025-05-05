// lib/store/auth-store.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Member information
interface Member {
  id: string;
  email: string;
  firstName: string;
}

type AuthRole = 'BUYER' | 'EVENT_CREATOR';

// Auth state interface includes a hydration flag
interface IAuthState {
  isLogin: boolean;
  email: string | null;
  token: string | null;
  activeRole: AuthRole;
  member: Member | null;
  hasHydrated: boolean;

  setLogin: (status: boolean) => void;
  setToken: (token: string | null) => void;
  setMember: (member: Member | null) => void;
  switchRole: () => void;
  reset: () => void;
}

// Create the store with persistence
const useAuthStore = create<IAuthState>()(
  persist(
    (set) => ({
      isLogin: false,
      email: null,
      token: null,
      activeRole: 'BUYER',
      member: null,
      hasHydrated: false,

      setLogin: (status) => set({ isLogin: status }),
      setToken: (token) => set({ token }),
      setMember: (member) => set({ member }),
      switchRole: () =>
        set((state) => ({
          activeRole: state.activeRole === 'BUYER' ? 'EVENT_CREATOR' : 'BUYER',
        })),
      reset: () =>
        set({
          isLogin: false,
          email: null,
          token: null,
          activeRole: 'BUYER',
          member: null,
        }),
    }),
    {
      name: 'auth-store', // key for storage
      partialize: (state) => ({
        isLogin: state.isLogin,
        email: state.email,
        token: state.token,
        activeRole: state.activeRole,
        member: state.member,
      }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.hasHydrated = true;
        }
      },
    },
  ),
);

export default useAuthStore;
