import { act } from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';


interface IUserVerification{
    isPhoneVerified: boolean;
    isProfileDataProvided: boolean;
}
interface IAuthState {
    isLogin: boolean;
    email: string | null;
    token: string | null;
    activeRole: 'BUYER' | 'EVENT_CREATOR'
    member: {
        id: string
        email: string
        firstName: string
        verification: IUserVerification
    } | null
    setLogin: (status: boolean) => void;
    setToken: (token: string | null) => void;
    setMember: (member: any) => void;
    switchRole: () => void;
    reset: () => void;
    }

const authStore = create(persist((set) => ({
    isLogin: false,
    email: null,
    token: null,
    activeRole: 'BUYER' as 'BUYER' | 'EVENT_CREATOR',
    member: null,
    setLogin: (status: boolean) => set({ isLogin: status }),
    setToken: (token: string | null) => set({ token: token }),
    setMember: (member: any) => set({ member: member }),
    switchRole: () => set((state: IAuthState) => ({ activeRole: state.activeRole === 'BUYER' ? 'EVENT_CREATOR' : 'BUYER' })),
    reset: () => set({ isLogin: false, email: null, token: null,activeRole: 'BUYER', member: null }),
}), {
    name: 'auth-store',
    partialize: (state: IAuthState) => ({ isLogin: state.isLogin, email: state.email, token: state.token, activeRole: state.activeRole, member: state.member }),
}))

export default authStore