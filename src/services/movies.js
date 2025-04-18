const genreIdMapping = {
    'All': '',
    'Action': '28',
    'Comedy': '35',
    'Adventure': '12',
    'Sci-Fi': '878',
    'Horror': '27',
    'Thriller': '53',
    'Fantasy': '14',
    'Romance': '10749',
    'Crime': '80'
};


const API_KEY = import.meta.env.VITE_API_TMDB_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};

export const searchMovies = async (query) => {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
            query)}`);
    const data = await response.json();
    return data.results;
};

export const getMoviesByGenre = async (genre) => {
    const genreId = genreIdMapping[genre];
    const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`);
    const data = await response.json();
    return data.results;
};