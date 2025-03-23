import { RAWG_API_KEY } from "../config.js";

const API_KEY = RAWG_API_KEY;
const BASE_URL = "https://api.rawg.io/api";

export const getPopularGames = async () => {
    const response = await fetch(`${BASE_URL}/games?ordering=-metacritic&page_size=20&key=${API_KEY}`);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
};

export const searchGames = async (query) => {
    const response = await fetch(`${BASE_URL}/games?search=${query}&page_size=20&key=${API_KEY}`);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
};

