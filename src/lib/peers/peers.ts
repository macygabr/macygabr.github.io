import axios from 'axios';

const apiUrl = import.meta.env.VITE_SERVER_API_URL;

const apiClient = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getPeers = async (page: number, size: number, campusId: string) => {
    try {
        const response = await apiClient.get('/statistics/peers', {
            params: {
                page,
                size,
                campusId,
            },
        });
        return response.data; // Возвращаем данные, пришедшие с сервера
    } catch (error) {
        console.error('Ошибка загрузки пользователей:', error);
        throw error; // Прокидываем ошибку дальше
    }
};