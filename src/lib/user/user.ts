import axios from 'axios';
import { UserInfo } from '../models/userInfo';

const apiUrl = import.meta.env.VITE_SERVER_API_URL;


const userClient = {
  
    async getUserInfo(): Promise<UserInfo | null> {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.get<UserInfo>(
          `${apiUrl}/api/user/getinfo`,
          {
            headers: {
              Authorization: token ? `${token}` : `null`,
            }
          }
        );
        console.log(response.data);
        if(response.data === null) return null
        return response.data;
      } catch (error) {
        console.error("Ошибка при получении данных пользователя:", error);
        return null;
      }
    }
  };
  
export default userClient;