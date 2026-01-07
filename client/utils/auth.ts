export interface User {
  id: string;
  name: string;
  email: string;
  role: "guest" | "admin" | "manager" | "staff";
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

const STORAGE_KEY = "luxestay_auth";
const USERS_KEY = "luxestay_users";

// Initialize default admin users
const initializeDefaultUsers = () => {
  const existingUsers = localStorage.getItem(USERS_KEY);
  if (!existingUsers) {
    const defaultUsers = [
      {
        id: "admin-1",
        name: "Admin User",
        email: "admin@luxestay.com",
        password: "admin123", // Demo password
        role: "admin" as const,
      },
      {
        id: "manager-1",
        name: "Manager User",
        email: "manager@luxestay.com",
        password: "manager123",
        role: "manager" as const,
      },
      {
        id: "staff-1",
        name: "Staff User",
        email: "staff@luxestay.com",
        password: "staff123",
        role: "staff" as const,
      },
    ];
    localStorage.setItem(USERS_KEY, JSON.stringify(defaultUsers));
  }
};

// Initialize on module load
initializeDefaultUsers();

export const authService = {
  // Sign up a new guest user
  signup: (name: string, email: string, password: string): User => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");

    // Check if user already exists
    if (users.some((u: any) => u.email === email)) {
      throw new Error("Email already registered");
    }

    const newUser = {
      id: `guest-${Date.now()}`,
      name,
      email,
      password, // In real app, this would be hashed on backend
      role: "guest" as const,
    };

    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));

    // Do NOT auto-login after signup. Return created user info so caller
    // can redirect to the login page and show a success message.
    const createdUser: User = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    };

    return createdUser;
  },

  // Login user
  login: (email: string, password: string, role?: string): User => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");

    // Find user by email
    let user = users.find((u: any) => u.email === email);

    if (!user || user.password !== password) {
      throw new Error("Invalid email or password");
    }

    // Check role if specified (for admin login)
    if (role && user.role !== role) {
      throw new Error(`Invalid role. This account is a ${user.role}`);
    }

    const authUser: User = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        user: authUser,
        token: `token-${Date.now()}`,
      }),
    );

    return authUser;
  },

  // Get current logged in user
  getCurrentUser: (): User | null => {
    const auth = localStorage.getItem(STORAGE_KEY);
    if (!auth) return null;

    try {
      const { user } = JSON.parse(auth);
      return user || null;
    } catch {
      return null;
    }
  },

  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    return authService.getCurrentUser() !== null;
  },

  // Logout user
  logout: (): void => {
    localStorage.removeItem(STORAGE_KEY);
  },

  // Get auth state
  getAuthState: (): AuthState => {
    const user = authService.getCurrentUser();
    return {
      user,
      isAuthenticated: user !== null,
    };
  },
};
