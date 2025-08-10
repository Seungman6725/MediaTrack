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

// Updated to support pagination
export const getPopularMovies = async (page = 1) => {

    const response = await fetch(
        `${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=revenue.desc&page=${page}`
    );

    const data = await response.json();
    return {
        results: data.results,
        page: data.page,
        total_pages: data.total_pages,
        total_results: data.total_results
    };
};

export const searchMovies = async (query, page = 1) => {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`
    );
    const data = await response.json();
    return {
        results: data.results,
        page: data.page,
        total_pages: data.total_pages,
        total_results: data.total_results
    };
};

export const getMoviesByGenre = async (genre, page = 1) => {
    const genreId = genreIdMapping[genre];
    const response = await fetch(
        `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&sort_by=revenue.desc&page=${page}`
    );
    const data = await response.json();
    return {
        results: data.results,
        page: data.page,
        total_pages: data.total_pages,
        total_results: data.total_results
    };
};