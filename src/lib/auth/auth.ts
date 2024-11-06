import axios from 'axios';
import { UserInfo } from '../models/userInfo';

const apiUrl = import.meta.env.VITE_SERVER_API_URL;


const authClient = {

    async signIn(email: string, password: string): Promise<{ success: boolean; error?: string }> {
      try {
        await axios.post(`${apiUrl}/api/auth/signin`, { email, password });
        return { success: true };
      } catch (error) {
        console.error("Ошибка входа:", error);
        return { success: false, error: 'Ошибка входа. Проверьте данные и попробуйте снова.' };
      }
    },
  
    async signOut(): Promise<void> {

      console.log("Выход из системы");
    },
  };

  export default authClient;
  