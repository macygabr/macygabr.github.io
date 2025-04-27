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
                page: page || 0, // Если значение page пустое, передаем 0 по умолчанию
                size: size || 25, // Если значение size пустое, передаем 25 по умолчанию
                campusId: campusId || '46e7d965-21e9-4936-bea9-f5ea0d1fddf2', // Передаем campusId
            },
        });

        return response.data; // Возвращаем данные, пришедшие с сервера
    } catch (error) {
        console.error('Ошибка загрузки пользователей:', error);
        throw error; // Прокидываем ошибку дальше
    }
};