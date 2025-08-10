const genreSlugMapping = {
    'All': '',                // no filter
    'Action': 'action',
    'Adventure': 'adventure',
    'RPG': 'role-playing-games-rpg',
    'Shooter': 'shooter',
    'Strategy': 'strategy',
    'Fighting': 'fighting',
    'Sports': 'sports',
    'Indie': 'indie',
    'Racing': 'racing'
};

const API_KEY = import.meta.env.VITE_API_RAWG_KEY;;
const BASE_URL = "https://api.rawg.io/api";

// Updated to support pagination
export const getPopularGames = async (page = 1) => {
    const response = await fetch(`${BASE_URL}/games?ordering=-added&page_size=20&page=${page}&key=${API_KEY}`);
    const data = await response.json();
    return {
        results: data.results,
        count: data.count,
        next: data.next,
        previous: data.previous,
        total_pages: Math.ceil(data.count / 20),
        current_page: page
    };
};

// Updated to support pagination
export const searchGames = async (query, page = 1) => {
    const response = await fetch(`${BASE_URL}/games?search=${query}&page_size=20&page=${page}&key=${API_KEY}`);
    const data = await response.json();
    return {
        results: data.results,
        count: data.count,
        next: data.next,
        previous: data.previous,
        total_pages: Math.ceil(data.count / 20),
        current_page: page
    };
};

// Updated to support pagination
export const getGamesByGenre = async (genre, page = 1) => {
    const slug = genreSlugMapping[genre];
    const response = await fetch(`${BASE_URL}/games?key=${API_KEY}&genres=${slug}&page_size=20&page=${page}`);
    const data = await response.json();
    return {
        results: data.results,
        count: data.count,
        next: data.next,
        previous: data.previous,
        total_pages: Math.ceil(data.count / 20),
        current_page: page
    };
};