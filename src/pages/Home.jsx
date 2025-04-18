import Card from '../components/Card.jsx'
import { useState, useEffect } from 'react'
import { searchMovies, getPopularMovies } from '../services/movies.js'
import GenreTabs from '../components/GenreTabs.jsx'
import '../css/Home.css'

function Home() {

    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedGenre, setSelectedGenre] = useState('All');


    const genres = ['All', 'Action', 'Comedy', 'Adventure', 'Sci-Fi', 'Horror', 'Thriller', 'Fantasy', 'Romance', 'Crime'];

    useEffect(() => {

        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            }
            catch (error) {
                console.log(error);
                setError("Failed to load movies");
            }
            finally {
                setLoading(false);
            }
        }

        loadPopularMovies();
    }, []);


    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) {
            return;
        }

        if (loading) {
            return;
        }

        setLoading(true);
        try {
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null);
        }
        catch (error) {
            console.log(error);
            setError("Failed to search movies");
        }
        finally {
            setLoading(false);
        }
    };

    const handleGenreClick = (genre) => {
        setSelectedGenre(genre);
    }

    return (
        <div className="home">

            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for a movie"
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-btn">
                    Search
                </button>
            </form>
            {error && <div className="error">{error}</div>}

            <div className="content-container">
                <GenreTabs
                    genres={genres}
                    selectedGenre={selectedGenre}
                    handleGenreClick={handleGenreClick}
                />
                {loading ? (<div className="loading">Loading...</div>)
                    : (
                        <div className="movies-grid">
                            {movies.map((movie) =>
                                <Card information={movie} key={movie.id} />)}
                        </div>)}
            </div>
        </div>
    );
}

export default Home;