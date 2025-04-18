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


const API_KEY = import.meta.env.VITE_API_RAWG_KEY;
const BASE_URL = "https://api.rawg.io/api";

export const getPopularGames = async () => {
    const response = await fetch(`${BASE_URL}/games?ordering=-metacritic&page_size=20&key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};

export const searchGames = async (query) => {
    const response = await fetch(`${BASE_URL}/games?search=${query}&page_size=20&key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};

export const getGamesByGenre = async (genre) => {
    const slug = genreSlugMapping[genre];
    const response = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&genres=${slug}`);
    const data = await response.json();
    return data.results;
};

