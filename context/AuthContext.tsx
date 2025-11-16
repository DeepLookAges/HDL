
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { User } from '../types';
import { MOCK_USERS } from '../constants';

interface AuthContextType {
    isAuthenticated: boolean;
    user: User | null;
    login: (email: string, pass: string) => boolean;
    signup: (name: string, email: string, pass: string) => boolean;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    const login = (email: string, pass: string): boolean => {
        // This is a mock login. In a real app, you'd call an API.
        // We will log in the admin for demo purposes.
        if (email === 'admin@hdl.com' && pass === 'password') {
            const adminUser = MOCK_USERS.find(u => u.role === 'Admin');
            if (adminUser) {
                setIsAuthenticated(true);
                setUser(adminUser);
                return true;
            }
        }
        const regularUser = MOCK_USERS.find(u => u.email === email);
        if (regularUser) {
             setIsAuthenticated(true);
             setUser(regularUser);
             return true;
        }
        return false;
    };

    const signup = (name: string, email: string, pass: string): boolean => {
        // Mock signup. In a real app, you'd check if user exists, then call an API to create them.
        // For this mock, we'll just create a new user object and log them in.
        const existingUser = MOCK_USERS.find(u => u.email === email);
        if (existingUser) {
            return false; // User already exists
        }

        const newUser: User = {
            id: `USR-${new Date().getTime()}`,
            name,
            email,
            role: 'Customer',
            phone: '', // Can be added to signup form later if needed
            createdAt: new Date().toISOString().split('T')[0],
        };

        // In a real app, you'd add the user to the DB. Here we just log them in.
        setIsAuthenticated(true);
        setUser(newUser);
        return true;
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
