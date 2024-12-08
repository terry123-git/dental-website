import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
  appointments: Appointment[];
}

interface Appointment {
  id: string;
  date: string;
  time: string;
  dentist: string;
  reason: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
  updateAppointments: (appointments: Appointment[]) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: (user) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
  updateAppointments: (appointments) =>
    set((state) => ({
      user: state.user ? { ...state.user, appointments } : null,
    })),
}));