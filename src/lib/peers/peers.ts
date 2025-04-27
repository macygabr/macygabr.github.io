import axios from 'axios';

const apiUrl = import.meta.env.VITE_SERVER_API_URL;
const cache: Record<string, any> = {};

const apiClient = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getPeers = async (page: number, size: number, campusId: string) => {
    // Генерируем уникальный ключ для текущих параметров
    const cacheKey = `${page}-${size}-${campusId}`;

    // Если данные уже есть в кэше, возвращаем их
    if (cache[cacheKey]) {
        console.log('Получаем данные из кэша');
        return cache[cacheKey];
    }

    try {
        // Если данных нет в кэше, делаем запрос
        const response = await apiClient.get('/statistics/peers', {
            params: {
                page,
                size,
                campusId: campusId || '46e7d965-21e9-4936-bea9-f5ea0d1fddf2',
            },
        });

        // Обрабатываем данные (если это строка, то парсим в JSON)
        const data = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;

        // Кэшируем данные
        cache[cacheKey] = data;

        return data;
    } catch (error) {
        console.error('Ошибка загрузки пользователей:', error);
        throw error;
    }
};