import axios from 'axios';

const apiUrl = import.meta.env.VITE_SERVER_API_URL;

const authClient = {

    async signIn(email: string, password: string): Promise<{ success: boolean; error?: string }> {
      try {
        const response = await axios.post(`${apiUrl}/api/auth/signin`, { email, password });
        const { token, token_name } = response.data;

        console.log(response.data);

        localStorage.setItem(token_name, token);
        return { success: true };
      } catch (error) {
        console.error("Ошибка входа:", error);
        return { success: false, error: 'Ошибка входа. Проверьте данные и попробуйте снова.' };
      }
    },
  
    async signOut(): Promise<void> {
      console.log("Выход из системы...");

      const token = localStorage.getItem('authToken');
      const response = await axios.get(
        `${apiUrl}/api/user/logout`,
        {
          headers: {
            Authorization: token ? `${token}` : `null`,
          }
        }
      );

      console.log(response.data);
    },
  };

  export default authClient;
  