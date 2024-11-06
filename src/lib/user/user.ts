import axios from 'axios';
import { UserInfo } from '../models/userInfo';

const apiUrl = import.meta.env.VITE_SERVER_API_URL;


const userClient = {
  
    async getUserInfo(): Promise<UserInfo | null> {
      try {
        const response = await axios.get<UserInfo>(`${apiUrl}/api/user/getinfo`);
        return response.data;
      } catch (error) {
        console.error("Ошибка при получении данных пользователя:", error);
        return null;
      }
    }
  };
  
  export default authClient;