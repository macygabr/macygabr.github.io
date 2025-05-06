import axios from 'axios';

const apiUrl = import.meta.env.VITE_SERVER_API_URL;
const cache: Record<string, any> = {};
const ALL_PEERS_CACHE_KEY = 'all_peers';

const apiClient = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Функция для загрузки всех пиров и сохранения в кэш
export const loadAllPeers = async (campusId: string): Promise<any[]> => {
    try {
        // Сначала получаем первую страницу, чтобы узнать общее количество пиров
        const firstPage = await getPeersPage(0, 25, campusId);
        if (!firstPage || !firstPage.peers || firstPage.peers.length === 0) return [];
        cache[ALL_PEERS_CACHE_KEY] = firstPage;
        
        const totalPeers = 20000;
        const pageSize = 1000;
        const totalPages = Math.ceil(totalPeers / pageSize);
        
        // Создаем массив промисов для загрузки всех страниц
        const pagePromises = Array.from({ length: totalPages }, (_, index) => 
            getPeersPage(index, pageSize, campusId)
        );
        
        const allPages = await Promise.all(pagePromises);
        const allPeers = allPages.flatMap(p => p.peers);
        
        // Сохраняем все пиры в кэш
        cache[ALL_PEERS_CACHE_KEY] = allPeers;
        return allPeers;
    } catch (error) {
        console.error('Ошибка загрузки всех пиров:', error);
        throw error;
    }
};

// Вспомогательная функция для загрузки одной страницы
const getPeersPage = async (page: number, size: number, campusId: string) => {
    const cacheKey = `${campusId}_${page}_${size}`;
    
    // Если данные уже есть в кэше, возвращаем их
    if (cache[cacheKey]) {
        console.log('Получаем данные из кэша');
        return cache[cacheKey];
    }
    
    try {
        const response = await apiClient.get('/statistics/peers', {
            params: {
                page,
                size,
                campusId: campusId || '46e7d965-21e9-4936-bea9-f5ea0d1fddf2',
            },
        });
        
        const data = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;
        cache[cacheKey] = data;
        return data;
    } catch (error) {
        console.error('Ошибка загрузки страницы пиров:', error);
        throw error;
    }
};

// Основная функция для получения пиров
export const getPeers = async (page: number, size: number, campusId: string) => {
    const cacheKey = `${campusId}_${page}_${size}`;
    
    // Если данные уже есть в кэше, возвращаем их
    if (cache[cacheKey]) {
        console.log('Получаем данные из кэша');
        return cache[cacheKey];
    }
    
    try {
        const response = await apiClient.get('/statistics/peers', {
            params: {
                page,
                size,
                campusId: campusId || '46e7d965-21e9-4936-bea9-f5ea0d1fddf2',
            },
        });
        
        const data = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;
        cache[cacheKey] = data;
        return data;
    } catch (error) {
        console.error('Ошибка загрузки пользователей:', error);
        throw error;
    }
};
