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
                page: 0,
                size: 1000,
                campusId: campusId || '46e7d965-21e9-4936-bea9-f5ea0d1fddf2',
            },
        });

        const data = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;

        return data;
    } catch (error) {
        console.error('Ошибка загрузки пользователей:', error);
        throw error;
    }
};