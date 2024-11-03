import { useEffect, useState } from 'react';
import authClient from '../lib/auth/auth';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    async function checkAuth() {
        try {
          const user = await authClient.getUserInfo(); 
          setIsAuthenticated(!!user); 
        } catch (error) {
          setIsAuthenticated(false);
        }
      }

    checkAuth();
  }, []);

  return isAuthenticated;
}
