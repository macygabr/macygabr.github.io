import { useEffect, useState } from 'react';
import userClient from '../lib/user/user';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    async function checkAuth() {
        try {
          const user = await userClient.getUserInfo(); 
          setIsAuthenticated(!!user); 
        } catch (error) {
          setIsAuthenticated(false);
        }
      }

    checkAuth();
  }, []);

  return isAuthenticated;
}
