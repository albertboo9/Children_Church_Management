import { useAuthStore } from '../stores/auth.store';

export class AuthService {
  private readonly apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

  async login(email: string, password: string) {
    try {
      const response = await fetch(`${this.apiUrl}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      const { access_token } = data;

      // Store the token
      useAuthStore.getState().setToken(access_token);
      localStorage.setItem('access_token', access_token);

      // Fetch user profile
      const profileResponse = await fetch(`${this.apiUrl}/auth/profile`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      if (!profileResponse.ok) {
        throw new Error('Failed to fetch user profile');
      }

      const user = await profileResponse.json();
      useAuthStore.getState().setUser(user);

      return { user, access_token };
    } catch (error) {
      throw error;
    }
  }

  async register(email: string, password: string, firstName: string, lastName: string, role: string) {
    try {
      const response = await fetch(`${this.apiUrl}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, firstName, lastName, role }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  logout() {
    useAuthStore.getState().setUser(null);
    useAuthStore.getState().setToken(null);
    localStorage.removeItem('access_token');
  }
}

export const authService = new AuthService();