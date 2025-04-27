import axios from 'axios';

const apiUrl = import.meta.env.VITE_SERVER_API_URL;

const authClient = {

    async signIn(email: string, password: string): Promise<{ success: boolean; error?: string }> {
      try {
        const response = await axios.post(`${apiUrl}/auth/sign-in`, { email, password });
        const { token, token_name } = response.data;
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
        `${apiUrl}/auth/logout`,
        {
          headers: {
            Authorization: token ? `${token}` : `null`,
          }
        }
      );

      console.log(response.data);
      window.location.href = '/';
    },

    async hhRegistry(): Promise<void> {
      console.log("Регистриция в hh.ru...");

      const token = localStorage.getItem('authToken');
      const response = await axios.get(
        `${apiUrl}/hh/registry`,
        {
          headers: {
            Authorization: token ? `${token}` : `null`,
          }
        }
      );

      console.log(response.data);
      if(response.data.status === 'OK') {
        window.location.href = response.data.message;
      } else {
        console.error(response.data.message);
      }
    },
  };

  export default authClient;
  